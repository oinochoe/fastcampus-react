import React, { Component } from 'react';

class Counter extends Component {
    state = {
        counter: 0,
        fixed: 0,
        updateMe: {
            toggleMe: false,
            dontChangeMe: 1,
        },
    };

    handleIncrease = () => {
        // this.setState({
        //     counter: this.state.counter + 1,
        // });
        this.setState((state) => ({
            counter: state.counter + 1,
        }));
    };

    handleDecrease = () => {
        this.setState({
            counter: this.state.counter - 1,
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>픽스된 값 : {this.state.fixed}</p>
            </div>
        );
    }
}

/*
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error('Unhanlded action');
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0);

    // 리액트 컴포넌트 최적화를 위해서 number를 그대로 사용하는 것보다는 이게 낫다.
    const onIncrease = () => {
        dispatch({
            type: 'INCREMENT',
        });
    };
    const onDecrease = () => {
        dispatch({
            type: 'DECREMENT',
        });
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
} */

export default Counter;
