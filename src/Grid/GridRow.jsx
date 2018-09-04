import React from 'react';

class GridRow extends React.Component {
    constructor () {
        super();
        this.renderChildren = this.renderChildren.bind(this);
    }

    /**
     * Adds logic to assign the start and end index for the columns. These values are passed to the GridColumn
     * child components.
     */
    renderChildren () {
        let currentIndex = 1;
        return React.Children.map(this.props.children, (child, index) => {
            let childSpan = child.props.size;
            if (childSpan == null || childSpan == undefined) {
                childSpan = 1;
            }
            let startIndex = currentIndex;
            let endIndex = currentIndex + childSpan;
            currentIndex = endIndex;
            return React.cloneElement(child, {
                size: childSpan,
                startIndex: startIndex,
                endIndex: endIndex
            });
        });
    }

    render () {
        return (
            <React.Fragment>
                {this.renderChildren()}
            </React.Fragment>
        );
    }
}

GridRow.displayName = 'GridRow';

export default GridRow;