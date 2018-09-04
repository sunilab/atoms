import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class GridColumn extends React.Component {
    render () {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

GridColumn.displayName = 'GridColumn';

GridColumn = styled(GridColumn)`
    grid-column-start: ${props => props.startIndex};
    grid-column-end: ${props => props.endIndex};
    -ms-grid-column: ${props => props.startIndex};
    -ms-grid-column-span: ${props => props.size};
`;

GridColumn.propTypes = {
    /** The number of columns this Column spans. Each Grid has 12 columns. */
    size: PropTypes.number
};

export default GridColumn;