import React from 'react';
import styled, { css } from 'styled-components';
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
    background: ${(props) => props.color};
    border-radius: 50%;
    ${(props) =>
        props.huge &&
        css`
            width: 10rem;
            height: 10rem;
        `};
`;

function StyledApp() {
    return (
        <AppBlock>
            <Button>Button</Button>
            <Circle color="blue" huge />
        </AppBlock>
    );
}

export default StyledApp;
