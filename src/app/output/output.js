import React, { Component } from 'react';

class Output extends Component {
    constructor(props) {
        super(props);
        this.modifiedUserInput = this.modifiedUserInput.bind(this);
    }

    modifiedUserInput() {
        /*
            Modify the user's input by replacing special
            characters with their associated values.
        */
        const userCount = this.props.userInput.count;
        const userText = this.props.userInput.text;
        const finalCount = userCount > 50 ? 50 : userCount;
        let output = [];

        for (var i = 0; i < finalCount; i++) {
            let modString = userText;

            // Apply user modifications
            modString = modString.replace(/~i|~n/gi, (s) => {
                // Replace reserved characters with new values
                const specChars = {
                    '~i': i,
                    '~n': i+1
                };
                return specChars[s];
            });

            // Push text into output
            output.push(
                <p key={`line${i}`}>{modString}</p>
            );
        }
        return output;
    }

    render() {
        return (
            <pre>{this.modifiedUserInput()}</pre>
        );
    }
}

export default Output