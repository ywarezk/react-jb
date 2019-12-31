import React, { Component, SyntheticEvent } from "react";
import "./home.css";
import Heading from "../heading/heading";

interface HomeState {
    imageWidth: number;
    currentDiscount: number;
    vegetables: { id: number, name: string }[];
}

export class Home extends Component<any, HomeState> {
    public constructor(props: any) {
        super(props);
        this.state = {
            imageWidth: 300,
            currentDiscount: 12,
            vegetables: [
                { id: 1, name: "Tomatoes" },
                { id: 2, name: "Carrots" },
                { id: 3, name: "Potatoes" },
                { id: 4, name: "Onions" },
            ]
        };
        // document.title = "Home";
    }
    public render(): JSX.Element {
        return (
            <div className="home">

                <Heading>Welcome to Northwind website!</Heading>

                <p>Only now - {this.state.currentDiscount}% discount on all products!</p>

                <img src="/assets/images/home.png" width={this.state.imageWidth} />

                <section>

                    {/* <button onClick={this.doSomething.bind(this)}>Test</button> */}
                    {/* <button onClick={this.doSomething}>Test</button> */}
                    <button onClick={this.decreaseImage}>&darr;</button>
                    <button onClick={this.increaseImage}>&uarr;</button>
                    <br />

                    <input type="range" min="100" max="500" onChange={this.changeImageWidth} value={this.state.imageWidth} />
                    <hr />

                    <h5>Top Products: </h5>
                    <p>Apples</p>
                    <p>Bananas</p>
                    {this.isSummer() && <p>Watermelon</p>}
                    <p>{this.isSummer() ? "No Avocados" : "Avocados"}</p>

                    {this.state.vegetables.map(v => <p key={v.id}>{v.name}</p>)}

                </section>

            </div>
        );
    }

    private isSummer(): boolean {
        const date = new Date();
        const month = date.getMonth() + 1;
        return month >= 6 && month <= 9;
    }

    // args - אוביקט המכיל מידע לגבי הארוע שהתרחש
    // args.target - זהו האוביקט שמייצג את התגית שהעלתה את הארוע
    private changeImageWidth = (args: SyntheticEvent) => {
        const value = +(args.target as HTMLInputElement).value;
        this.setState({ imageWidth: value });
    };

    private decreaseImage = () => {
        if (this.state.imageWidth > 100) {
            this.setState({ imageWidth: this.state.imageWidth - 10 });
        }
    };

    private increaseImage = () => {
        if (this.state.imageWidth < 500) {
            this.setState({ imageWidth: this.state.imageWidth + 10 });
        }
    };

    // private doSomething(): void {
    //     alert("Image Width: " + this.state.imageWidth);
    //     //alert("Doing Something...");
    // }

    // private doSomething = (): void => {
    //     alert("Image Width: " + this.state.imageWidth);
    // };

}