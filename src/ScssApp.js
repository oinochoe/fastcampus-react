import React from 'react';
import Button from './Components/Button';
import './App.scss';

function ScssApp() {
    return (
        <div className="App">
            <div className="buttons">
                <Button size="large">Button</Button>
                <Button size="small">Button</Button>
                <Button>Button</Button>
            </div>
        </div>
    );
}

export default ScssApp;
