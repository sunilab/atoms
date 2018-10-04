import React from 'react';
import PropTypes from 'prop-types';
import Pathline from 'rsg-components/Pathline';
import Styled from 'styled-components';

const styles = ({ color, fontSize, space }) => ({
    root: {
        marginBottom: space[6]
    },
    header: {
        marginBottom: space[3]
    },
    tabs: {
        marginBottom: space[3]
    },
    tabButtons: {
        marginBottom: space[2]
    },
    tabBody: {
        overflowX: 'auto',
        maxWidth: '100%',
        WebkitOverflowScrolling: 'touch'
    },
    docs: {
        color: color.base,
        fontSize: fontSize.text
    }
});

export function ReactComponentRenderer({
    classes,
    name,
    heading,
    pathLine,
    description,
    docs,
    examples,
    tabButtons,
    tabBody
}) {
    function themeChangeHandler (event) {
        console.log(`theme value = ${event.target.value}`);
        window.localStorage.setItem('theme', event.target.value);
    }

    let theme = window.localStorage.getItem('theme') || 'fluent-light';

    return (
        <div id={name + '-container'}>
            <header>
                {heading}
                {pathLine && <Pathline>{pathLine}</Pathline>}
                <select onChange={themeChangeHandler}>
                    <option value='fluent-light' selected={theme == 'fluent-light'}>Fluent Light</option>
                    <option value='fluent-dark' selected={theme == 'fluent-dark'}>Fluent Dark</option>
                </select>
            </header>
            {(description || docs) && (
                <div>
                    {description}
                    {docs}
                </div>
            )}
            {tabButtons && (
                <div>
                    <div>{tabButtons}</div>
                    <div>{tabBody}</div>
                </div>
            )}
            {examples}
        </div>
    );
}

// export default Styled(styles)(ReactComponentRenderer);
export default ReactComponentRenderer;