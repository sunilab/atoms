import React from 'react';
import { ThemeProvider } from 'styled-components';
import Themes from './Themes.js';

export default class ThemeWrapper extends React.Component {
    render () {
        let fluentTheme = Themes.Fluent.light;
        return (
            <ThemeProvider theme={fluentTheme}>
                {this.props.children}
            </ThemeProvider>
        );
    }
}