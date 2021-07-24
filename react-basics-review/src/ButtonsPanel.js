import React, { Component } from 'react'
import "./ButtonsPanel.css"

class ButtonsPanel extends Component {

    resetOrReinitCounter = (btnValue) => {
        this.props.passedFunctionForReset(btnValue);
    }

    render() {
        return (
            <div className="buttons-panel" >
                <button onClick={this.props.passedFunctionForValue}>Add 1</button>
                <button onClick={this.resetOrReinitCounter(false)}>Reinit</button>
                <button onClick={this.resetOrReinitCounter(true)}>Reset</button>

            </div>
        )
    }
}
export default ButtonsPanel
