import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import Button from './Components/StyledButton';

const AppBlock = styled.div`
    width: 512px;
    margin: 4rem auto 0;
    padding: 1rem;
    border: 1px solid black;
`;

const Circle = styled.div`
    width: 5rem;
    height: 5rem;
    margin-top: 5rem;
    background: ${(props) => props.color};
    border-radius: 50%;
    ${(props) =>
        props.huge &&
        css`
            width: 10rem;
            height: 10rem;
        `};
`;

const palette = {
    blue: '#228be6',
    gray: '#496057',
    pink: '#f06595',
};

function StyledApp() {
    return (
        <ThemeProvider theme={{ palette }}>
            <AppBlock>
                <Button>Button</Button>
                <Button color="gray">Button</Button>
                <Button color="pink">Button</Button>
                <Circle color="blue" huge />
            </AppBlock>
        </ThemeProvider>
    );
}

export default StyledApp;
