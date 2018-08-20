import React, { Component } from 'react';

class Textbox extends Component {
    render () {
        return (
            <input type={this.props.password ? 'password' : 'text'}/>
        );
    }
}

export default Textbox;