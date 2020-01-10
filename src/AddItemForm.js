import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddItemForm extends Component {
  
  	static propTypes = {
      addItem: PropTypes.func.isRequired,
    }

    state = {
        value: '',
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    inputIsEmpty = () => {
        return this.state.value === '';
    };

    render() {
        return (
            <React.Fragment>
                <form onSubmit={(e) => this.props.addItem(e, this.state.value)}>
                    <input
                        type="text"
                        placeholder="Enter New Item"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <button disabled={this.inputIsEmpty()}>Add</button>
                </form>
            </React.Fragment>
        )
    }
}


export default AddItemForm;