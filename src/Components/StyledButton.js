import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    /* 공통스타일 */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;

    /* 크기 설정 */
    height: 2.25rem;
    font-size: 1rem;

    /* 색상 */
    background: #228be6;
    &:hover {
        background: #339af0;
    }
    &:active {
        background: #1c7ed6;
    }
    /* 기타 */
    & + & {
        margin-left: 1rem;
    }
`;

function StyledButton({ children, ...rest }) {
    return (
        <div>
            <Button {...rest}>{children}</Button>
        </div>
    );
}

export default StyledButton;
