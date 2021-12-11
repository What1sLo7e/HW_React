import React, {Component} from 'react';

class Counter extends Component {
    state = { count: 0 }

    onIncrement = () => {
        const newValue = this.state.count + 1
        this.setState({count: newValue});
    }

    onDecrement = () => {
        this.setState({count: this.state.count - 1})
    }

    render () {
        return (
            <div>
                <div>{this.state.count}</div>
                <button type='button' onClick={this.onIncrement}>+</button>
                <button type='button' onClick={this.onDecrement}>-</button>
            </div>
        )
    }
}

export default Counter;