import React, { Component, ReactNode } from 'react';
import './Hello.scss';

interface IHelloProps {
    message: string
}

interface IHelloState {
    isVisible: boolean
}

export default class Hello extends Component<IHelloProps, IHelloState> {

    state = {
        isVisible: true,
        message: 'hello'
    }

    // constructor(props: IHelloProps) {
    //     super(props);

    //     this.state = {
    //         isVisible: true
    //     }
    // }

    toggleVisibility = () => {
        // this === instance Hello

        // this.setState({
        //     isVisible: !this.state.isVisible // true
        // });
        // -


        this.setState((updatedState: IHelloState) => {
            return {
                isVisible: !updatedState.isVisible
            }
        })
    }

    toggleVisibility2() {
        // this === undefined
    }

    render() {
        return (
            <div className="hello">
                {
                    this.state.isVisible && <h1>Hello world {this.props.message}</h1>
                }
                {
                    /* this.state.isVisible ? <h1>...</h1> : null */
                }
                {
                    /* this.state.isVisible || <h1>...</h1> */
                }
                {
                    /* (() => {
                        if (this.state.isVisible) {
                            return (<h1>...</h1>)
                        } else {
                            return null
                        }
                    })() */
                }

                <button onClick={this.toggleVisibility}>Toggle visibility</button>
            </div>

        )
    }
}