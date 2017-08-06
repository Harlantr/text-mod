import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeText } from '../../modules/reducer';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        /*
            Propagate the text change
        */
        this.props.changeText(event.target.value);
    }

    render() {
        return (
            <input type="text" onChange={this.handleChange}/>
        );
    }
}

const mapStateToProps = state => ({
  text: state.reducer.text
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changeText
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInput)