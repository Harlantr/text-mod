import React, { Component } from 'react';
import TextInput from './textInput';
import CountInput from './countInput';

class UserInput extends Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleCountChange = this.handleCountChange.bind(this);
    }

    handleTextChange(text) {
        this.props.textCallback(text);
    }

    handleCountChange(count) {
        this.props.countCallback(count);
    }

    render() {
        return (
            <div>
                <TextInput textCallback={this.handleTextChange}/>
                <CountInput countCallback={this.handleCountChange}/>
            </div>
        );
    }
}

export default UserInput