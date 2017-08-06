import React, { Component } from 'react';

class CountInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(event) {
        /*
            Propagate the count change
        */
        this.props.countCallback(event.target.value);
    }

    handleKeyPress(event) {
        /*
            Kill the default behavior if the user enters
            anything other than a number
        */
        const charCode = event.charCode;
        if(!(charCode >= 48 && charCode <= 57)){
            event.preventDefault();
        }
    }

    render() {
        return (
            <input type="text"
                    defaultValue="1"
                    onKeyPress={this.handleKeyPress}
                    onChange={this.handleChange}/>
        );
    }
}

export default CountInput