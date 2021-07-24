import React, { Component } from 'react'
import "./ButtonsPanel.css"

class ButtonsPanel extends Component {

    resetOrReinitCounter = (btnValue) => {
        this.props.passedFunctionForReset(btnValue); //Każda klasa może mieć swój state więc skąd react wie że to ten od rodzica a nie szuka w tym komponencie?
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