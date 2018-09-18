import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Button extends Component {
    render () {
        return (
            <button className={this.props.className} onClick={this.props.clickHandler} disabled={this.props.disabled}>{this.props.text}</button>
        );
    }
};

Button.displayName = 'Button';

Button.propTypes = {
    /** Function handler called when the button is clicked */
    clickHandler: PropTypes.func,
    /** The Button label */
    text: PropTypes.string
};

Button = styled(Button)`
    background-color: ${props => props.theme.colors ? props.theme.colors.baseLow : 'initial'};
    border: none;
    box-sizing: border-box;
    color: ${props => props.theme.colors ? props.theme.colors.chromeBlackHigh : 'initial'};
    font-family: ${props => props.theme.fonts ? props.theme.fonts.body.family : 'initial'};
    font-size: ${props => props.theme.fonts ? props.theme.fonts.body.size : 'initial'};
    font-weight: ${props => props.theme.fonts ? props.theme.fonts.body.weight : 'initial'};
    height: 32px;
    line-height: ${props => props.theme.fonts ? props.theme.fonts.body.lineHeight : 'initial'};
    min-width: 120px;
    outline: none;

    &:hover {
        border: solid 2px ${props => props.theme.colors ? props.theme.colors.baseMediumLow : 'initial'};
        color: ${props => props.theme.colors ? props.theme.colors.chromeBlackHigh : 'initial'};
    }

    &:disabled {
        border: none;
        color: ${props => props.theme.colors ? props.theme.colors.baseMediumLow : 'initial'};
    }
`;

/** @Component */
export default Button;