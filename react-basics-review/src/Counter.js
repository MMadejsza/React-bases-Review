import React, { Component } from 'react';
import "./Counter.css"

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValue: 0,
        }
    }

    changeValue = () => {
        this.setState((prevState) => {
            return ({
                counterValue: prevState.counterValue + 1
            })
        })
    }

    render() {
        return (
            <div className="counter">

                Value:
                <span className="value">
                    {this.state.counterValue}
                </span>
                <button className="btn" onClick={this.changeValue}>Add 1</button>
            </div>

        )
    }
}

export default Counter;