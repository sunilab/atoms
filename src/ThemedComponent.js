/**
 * High order component that contains the logic for theming.
 * The themes are set by the browser rendering the component.
 */
import React from 'react';
import { css } from 'styled-components';

const supportedBrowsers = [
    'firefox',
    'edge',
    'chrome',
    'safari'
];

function getCurrentBrowser () {
    let browser = null;
    let sUsrAg = window.navigator.userAgent;
    if (sUsrAg.indexOf("Firefox") > -1) {
        browser = "firefox";
        //"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
    } else if (sUsrAg.indexOf("Opera") > -1) {
        browser = "Opera";
    } else if (sUsrAg.indexOf("Trident") > -1) {
        browser = "ie";
        //"Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
    } else if (sUsrAg.indexOf("Edge") > -1) {
        browser = "edge";
        //"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    } else if (sUsrAg.indexOf("Chrome") > -1) {
        browser = "chrome";
        //"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
    } else if (sUsrAg.indexOf("Safari") > -1) {
        browser = "safari";
        //"Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
    } else {
        browser = 'unknown';
    }
    return browser;
}

const themes = supportedBrowsers.reduce((acc, browser) => {
    acc[browser] = function (args) {
        if (getCurrentBrowser() == browser) {
            return css`
                ${css(args)};
            `;
        }
        return null;
    }
    return acc;
}, {});

function themed (ComposedComponent) {
    class ThemedComponent extends React.Component {
        render () {
            return (
                <ComposedComponent {...this.props} themes={themes}/>
            );
        }
    }
    return ThemedComponent;
}

export default themed;