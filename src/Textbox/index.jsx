import React, { Component } from 'react';

class Textbox extends Component {
    render () {
        const {password, ...rest} = this.props;
        return (
            <input type={password ? 'password' : 'text'} {...rest}/>
        );
    }
}

export default Textbox;