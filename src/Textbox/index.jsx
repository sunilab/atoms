import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Control to input text or password.
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

Textbox = styled(Textbox)`
    background-color: ${props => props.theme.colors.altHigh};
    border: solid 2px ${props => props.theme.colors.baseMediumLow};
    box-sizing: border-box;
    color: ${props => props.theme.colors.baseMedium};
    font-family: ${props => props.theme.fonts.body.family};
    font-size: ${props => props.theme.fonts.body.size};
    font-weight: ${props => props.theme.fonts.body.weight};
    line-height: ${props => props.theme.fonts.body.lineHeight};
    outline: none;
    padding: 0px 12px 0px 12px;
    // Extend the textbox as much as it can, users can enclose it in a parent to restrict the width
    width: 100%;

    &:focus {
        background-color: ${props => props.theme.colors.chromeWhite};
        border: solid 2px ${props => props.theme.colors.listAccentHigh};
        color: ${props => props.theme.colors.chromeBlackHigh};
    }
`;

Textbox.propTypes = {
    /** Function called when there is a change in the value entered in the component. */
    changeHandler: PropTypes.func,
    /** Hint for the user what can be entered in the textbox. */
    placeholder: PropTypes.string,
    /** Can be one of 'text' or 'password' */
    type: PropTypes.oneOf(['text', 'password'])
};

export default Textbox;