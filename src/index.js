import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
import Counter from './Counter';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
        <Counter />
    </React.StrictMode>,
    rootElement,
);
