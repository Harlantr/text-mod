import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeText } from '../actions/actions';

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
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label fullwidth">
        <input id="txtInput"
          className="mdl-textfield__input"
          type="text"
          onChange={this.handleChange}
          value={this.props.userText}/>
        <label className="mdl-textfield__label" htmlFor="txtInput">Input</label>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userText: state.reducer.userText
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changeText
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInput)
