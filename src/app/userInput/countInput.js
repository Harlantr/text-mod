import React, { Component } from 'react';

class CountInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    handleChange() {
        this.props.countCallback(this.state.value);
    }

    onKeyPress(event) {
        const re = /[0-9]+/g;
        const value = event.target.value;
        if(re.test(value)){
            console.log("test");
            this.setState({
                value: value
            });
        } else {
            event.preventDefault();
        }
    }

    render() {
        return (
            <input type="number"
                    min="1"
                    onKeyPress={this.onKeyPress}
                    onChange={this.handleChange}
                    value={this.state.value}/>
        );
    }
}

export default CountInput