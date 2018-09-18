import React, { Component } from 'react';
import styled from 'styled-components';

class Label extends Component {
    render () {
        const {text, ...rest} = this.props;
        // type = type || 'body';
        return (
            <span className={this.props.className} {...rest}>{text}</span>
        )
    }
}

Label.displayName = 'Label';

Label = styled(Label).attrs({
    font: function (props) {
        let font = {
            family: 'initial',
            size: 'initial',
            weight: 'initial',
            lineHeight: 'initial'
        };
        let type = props.type || 'body';
        if (props.theme.fonts) {
            font = props.theme.fonts[type];
        }
        return font;
    }
})`
    background-color: ${props => props.theme.colors ? props.theme.colors.altHigh : 'initial'};
    box-sizing: border-box;
    color: ${props => props.theme.colors ? props.theme.colors.chromeBlackHigh : 'initial'};
    font-family: ${props => props.font.family};
    font-size: ${props => props.font.size};
    font-weight: ${props => props.font.weight};
    line-height: ${props => props.font.lineHeight};
    outline: none;
    // Extend the textbox as much as it can, users can enclose it in a parent to restrict the width
    width: 100%;
`;

/** @Component */
export default Label;