

import React from 'react';

interface ICountdownProps {
    destroyCb: () => void
}

interface ICountdownState {
    counter: number
}

export default class Countdown extends React.Component<ICountdownProps, ICountdownState> {
    private counterId: any;

    state = {
        counter: 5
    }

    toggleVisibility = () => {
        // ... this is always the instance
    }

    componentDidMount() {
        // this can change

        // const bigArray = [...]

        this.counterId = setInterval(() => {
            // bigArray.push()


            // if (this.state.counter <= 0) {
            //     this.props.destroyCb();
            //     return;
            // }

            console.log('set state');
            this.setState((prevState) => {



                return {
                    counter: prevState.counter - 1
                }
            });

        }, 1000);
    }

    // cleaning up
    componentWillUnmount() {
        console.log('clear interval');
        clearInterval(this.counterId);
    }

    componentDidUpdate() {
        if (this.state.counter <= 0) {
            this.props.destroyCb();
            return;
        }
    }

    render() {
        return (
            <h1>{this.state.counter}</h1>
        )
    }
}