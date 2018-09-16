import React, { Component } from 'react';

class Button extends Component {
    render () {
        return (
            <button onClick={this.props.clickHandler}>{this.props.text}</button>
        );
    }
};

/** @Component */
export default Button;