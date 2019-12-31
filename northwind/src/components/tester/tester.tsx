import React, { Component } from "react";
import "./tester.css";

interface TesterProps {
    x: number;
    y: string;
}

interface TesterState {
    a: number;
    b: string;
}

export class Tester extends Component<TesterProps, TesterState> {

    // f() {
    //     let num1 = 123;
    //     let num2: number;
    //     num2 = 123;
    //     let cat: {name: string, age: number} = { name: "Mitsi", age: 4};
    // }

    public constructor(props: TesterProps) {
        super(props);
        this.state = {
            a: 123,
            b: "Hi"
        };
    }

    public render(): JSX.Element {
        return (
            <div className="tester">
                <p>Tester...</p>
                <p>
                    x: {this.props.x}
                    <br />
                    y: {this.props.y}
                    <br />
                    a: {this.state.a}
                    <br />
                    b: {this.state.b}
                </p>
            </div>
        );
    }
}