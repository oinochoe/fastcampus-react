import React, { Component } from 'react';

class Hello extends Component {
    render() {
        const { color, isSpecial, name } = this.props;
        return (
            <div style={{ color }}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        );
    }
}

/* function Hello({ color, name, isSpecial }) {
    return (
        <div style={{ color }}>
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
}
 */
Hello.defaultProps = {
    name: '영민',
};

export default Hello;
