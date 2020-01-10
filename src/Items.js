import React from 'react';
import PropTypes from 'prop-types';

const Items = (props) => {
    return (
        <React.Fragment>
            <p className="items">Items</p>
            <ol className="item-list">
                {props.items.map((item, index) => <li key={index}>{item}</li>)}
            </ol>
        </React.Fragment>
    )
}

Items.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Items;