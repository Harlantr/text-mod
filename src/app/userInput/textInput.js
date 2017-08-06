import React, { Component } from 'react';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        /*
            Propagate the text change
        */
        this.props.textCallback(event.target.value);
    }

    render() {
        return (
            <input type="text" onChange={this.handleChange}/>
        );
    }
}

export default TextInput