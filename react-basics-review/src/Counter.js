import React, { Component } from 'react';
import ButtonsPanel from './ButtonsPanel';
import "./Counter.css"

class Counter extends Component {
    constructor(props) {
        super(props);
        let initValue = 100

        if (!isNaN(this.props.initValue)) {
            initValue = parseInt(this.props.initValue);
        }

        this.state = {
            counterValue: initValue,
        }
    }

    changeValue = () => {
        this.setState((prevState) => {
            return ({
                counterValue: prevState.counterValue + 1
            })
        })
    }

    resetCounter = (thatsBtnValueInComponent) => {
        let resetValue = 0;

        if (!thatsBtnValueInComponent) {
            if (!isNaN(this.props.initValue)) {
                resetValue = parseInt(this.props.initValue);
            }
        }

        this.setState({
            counterValue: resetValue,
        })
    }

    render() {
        return (
            <div className="counter">

                Value:
                <span className="value">
                    {this.state.counterValue}
                </span>
                <ButtonsPanel passedFunctionForValue={this.changeValue} passedFunctionForReset={this.resetCounter} />
            </div>

        )
    }
}

export default Counter;