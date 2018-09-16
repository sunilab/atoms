import React from 'react';
import styled from 'styled-components';

class Grid extends React.Component {
    render () {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

Grid.displayName = 'Grid';

Grid = styled(Grid)`
    display: grid;
    display: -ms-grid;
    grid-template-columns: repeat(12, 1fr);
    -ms-grid-columns: (1fr)[12];
    column-gap: 12px; // TODO: should be a variable
    width: 100%;
`;

/** @component */
export default Grid;