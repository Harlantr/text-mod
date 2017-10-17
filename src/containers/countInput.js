import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeCount } from '../actions/actions';

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
    this.props.changeCount(event.target.value);
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
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input id="txtCount"
          className="mdl-textfield__input"
          type="number"
          onChange={this.handleChange}
          value={this.props.count}
          onKeyPress={this.handleKeyPress}
          min="0"/>
        <label className="mdl-textfield__label" htmlFor="txtCount">Count</label>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.reducer.count
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changeCount
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountInput)
