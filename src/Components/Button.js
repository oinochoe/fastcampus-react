import React from 'react';
import classNames from 'classnames';

import './Button.scss';

// size: large, medium, small
// color : blue pink gray
function Button({
    children,
    size,
    color,
    outline,
    fullWidth,
    className,
    ...rest
}) {
    return (
        <button
            className={classNames(
                'Button',
                size,
                color,
                {
                    outline,
                    fullWidth,
                },
                className, // className도 받아온다면.. 버튼 자체도 덮어쓸 수 있습니다. 재사용성!
            )}
            {...rest}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    size: 'medium',
};

export default Button;
