import React, { Component } from 'react';
import UserInput from './userInput/userInput';
import Output from './output/output';

import './app.css';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            text: '',
            count: 1
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleCountChange = this.handleCountChange.bind(this);
    }

    handleTextChange (text) {
        /*
            Set user's text
        */
        this.setState({
            text: text
        });
    }

    handleCountChange (count) {
        /*
            Set user's count
        */
        this.setState({
            count: count
        });
    }

    render() {
        return (
            <div className="center">
                <UserInput
                    textCallback={this.handleTextChange}
                    countCallback={this.handleCountChange} />
                <Output userInput={this.state}/>
            </div>
        );
    }
}

export default App;
