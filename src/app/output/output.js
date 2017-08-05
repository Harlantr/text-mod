import React, { Component } from 'react';

class Output extends Component {
    render() {
        let output = []
        for (var i = 0; i < this.props.userInput.count; i++) {
            output.push(
                <p key={i}>{this.props.userInput.text}</p>
            );
        }

        return (
            <pre>{output}</pre>
        );
    }
}

export default Output