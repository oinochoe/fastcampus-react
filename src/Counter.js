import React, { useReducer } from 'react';

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
}

export default Counter;
