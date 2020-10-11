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
            <div className="buttons">
                <Button color="gray" size="large">
                    Button
                </Button>
                <Button color="gray" size="small">
                    Button
                </Button>
                <Button color="gray">Button</Button>
            </div>
            <div className="buttons">
                <Button color="pink" size="large">
                    Button
                </Button>
                <Button color="pink" size="small">
                    Button
                </Button>
                <Button color="pink">Button</Button>
            </div>
            <div className="buttons">
                <Button size="large" outline={true}>
                    {/* outline={true} 에서 {true 생략 가능} */}
                    Button
                </Button>
                <Button color="gray" outline={true}>
                    Button
                </Button>
                <Button color="pink" outline={true}>
                    Button
                </Button>
            </div>
            <div className="buttons">
                <Button size="large" fullWidth>
                    Button
                </Button>
                <Button
                    size="large"
                    color="gray"
                    fullWidth
                    className="customized-button"
                >
                    Button
                </Button>
                <Button
                    size="large"
                    color="pink"
                    fullWidth
                    onClick={() => {
                        console.log('클릭!');
                    }}
                    onMouseMove={() => {
                        console.log('mousemove');
                    }}
                >
                    Button
                </Button>
            </div>
        </div>
    );
}

export default ScssApp;
