import React, { Component } from 'react';

class CountInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(event) {
        this.props.countCallback(event.target.value);
    }

    handleKeyPress(event) {
        if(!(event.charCode >= 48 && event.charCode <= 57)){
            event.preventDefault();
        }
    }

    render() {
        return (
            <input type="text"
                    min="1"
                    defaultValue={this.state.value}
                    onKeyPress={this.handleKeyPress}
                    onChange={this.handleChange}/>
        );
    }
}

export default CountInput