import React, { Component } from 'react';
class Counter extends Component {
    render() {
        return (<div className="counter">Counter: {this.props.myValue}</div>)
    }
}

export default Counter;