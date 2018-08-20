import React, { Component } from 'react';

class Label extends Component {
    render () {
        const {text, ...rest} = this.props;
        return (
            <span {...rest}>{text}</span>
        )
    }
}

export default Label;