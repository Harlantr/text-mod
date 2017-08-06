import React, { Component } from 'react';

class Output extends Component {
    render() {
        let maxCount = 50;
        let userCount = this.props.userInput.count;
        let finalCount = userCount > maxCount ? maxCount : userCount;
        let output = [];

        for (var i = 0; i < finalCount; i++) {
            output.push(
                <p key={`line${i}`}>{this.props.userInput.text}</p>
            );
        }

        return (
            <pre>{output}</pre>
        );
    }
}

export default Output