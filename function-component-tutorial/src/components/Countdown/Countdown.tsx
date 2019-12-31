

import React from 'react';

interface ICountdownProps {
    destroyCb: () => void
}

interface ICountdownState {
    counter: number
}

export default class Countdown extends React.Component<ICountdownProps, ICountdownState> {
    state = {
        counter: 5
    }

    componentDidMount() {
        // const bigArray = [...]

        setInterval(() => {
            // bigArray.push()

            if (this.state.counter === 0) {
                this.props.destroyCb();
            }

            this.setState((prevState) => {



                return {
                    counter: prevState.counter - 1
                }
            });

        }, 1000);
    }

    render() {
        return (
            <h1>{this.state.counter}</h1>
        )
    }
}