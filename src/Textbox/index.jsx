import React, { Component } from 'react';

class Textbox extends Component {
    constructor () {
        super();
        this.handleInput = this.handleInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    render () {
        const {password, changeHandler, ...rest} = this.props;
        return (
            <input onInput={this.handleInput} onChange={this.handleChange} type={password ? 'password' : 'text'} {...rest}/>
        );
    }

    /**
     * Triggered when there is a change in the textbox.
     * @param {object} evt The event object
     */
    handleInput (evt) {
        if (typeof this.props.changeHandler == 'function') {
            var currentValue = evt.target.value ? evt.target.value : '';
            this.props.changeHandler(currentValue, evt);
        }
    }

    /**
     * Does not do anything, but needed for IE to work.
     */
    handleChange () {

    }
}

export default Textbox;