import React from 'react';
import { ThemeProvider } from 'styled-components';
import Themes from './Themes.js';

export default class ThemeWrapper extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            theme: 'fluent-light'
        }
        this.themeChangeHandler = this.themeChangeHandler.bind(this);
    }

    
    themeChangeHandler (event) {
        this.setState({
            theme: event.target.value
        })
    }

    render () {
        let theme = Themes.Fluent.light;
        if (this.state.theme == 'fluent-dark') {
            theme = Themes.Fluent.dark;
        }

        let backgroundColor = (this.state.theme == 'fluent-dark' ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)');
        function getBackgroundStyle () {
            return {
                backgroundColor: backgroundColor
            }
        }

        return (
            <ThemeProvider theme={theme}>
                <div>
                    <div>
                        <select onChange={this.themeChangeHandler}>
                            <option value='fluent-light'>Fluent Light</option>
                            <option value='fluent-dark'>Fluent Dark</option>
                        </select>
                    </div>
                    <div name='exampleWrapper' style={getBackgroundStyle()}>
                        {this.props.children}
                    </div>
                </div>
            </ThemeProvider>
        );
    }
}