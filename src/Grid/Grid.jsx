import React from 'react';
import styled from 'styled-components';

class Grid extends React.Component {
    displayName: 'Grid'
    render () {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

Grid = styled(Grid)`
    display: grid;
    display: -ms-grid;
    grid-template-columns: repeat(12, 1fr);
    -ms-grid-columns: (1fr)[12];
    column-gap: 12px; // TODO: should be a variable
`;

export default Grid;