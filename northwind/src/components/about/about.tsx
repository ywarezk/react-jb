import React, { Component } from "react";
import "./about.css";
import { Tester } from "../tester/tester";
import Thumbnail from "../thumbnail/thumbnail";
import Heading from "../heading/heading";

export class About extends Component {

    public constructor() {
        super(undefined);
        console.log("constructor");
    }

    public componentWillMount() {
        console.log("componentWillMount");
    }

    public componentDidMount() {
        console.log("componentDidMount");
    }

    public componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    public componentDidCatch() {
        console.log("componentDidCatch");
    }

    public componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    public componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    public componentWillReceiveProps() {
        console.log("componentWillReceiveProps");
    }

    public render(): JSX.Element {
        console.log("render");
        return (
            <div className="about">

                <Heading>Exotic Products from Around the World</Heading>

                <Thumbnail
                    imageSource="/assets/images/home.png"
                    imageWidth={100}
                    imageHeight={100} />

                <Thumbnail imageSource="/assets/images/home.png" />

                <Tester x={100} y="Hello" />

            </div>
        );
    }
}