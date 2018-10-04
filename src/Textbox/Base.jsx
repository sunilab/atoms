import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Control to input text or password. Base component does not have any styling.
 */
class Textbox extends Component {
    constructor () {
        super();
        this.handleInput = this.handleInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    render () {
        const {password, changeHandler, placeholder, ...rest} = this.props;
        let placeholderText = placeholder || 'Hint Text';
        return (
            <input className={this.props.className} onInput={this.handleInput} onChange={this.handleChange}
                placeholder={placeholderText} type={password ? 'password' : 'text'} {...rest}/>
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

Textbox.displayName = 'Textbox';

Textbox.propTypes = {
    /** Function called when there is a change in the value entered in the component. */
    changeHandler: PropTypes.func,
    /** Hint for the user what can be entered in the textbox. */
    placeholder: PropTypes.string,
    /** If password is set to true, the textbox works as a password else it acts as a textbox. */
    password: PropTypes.bool
};

/** @Component */
export default Textbox;