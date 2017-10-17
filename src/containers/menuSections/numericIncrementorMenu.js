import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeText } from '../../actions/actions';
import incrementors from '../../const/incrementors';

class NumericIncrementorMenu extends Component {
  constructor (props) {
    super(props);
    this.addNumericVariable = this.addNumericVariable.bind(this);
  }

  addNumericVariable () {
    const newString = this.props.userText + incrementors.number;
    this.props.changeText(newString);
  }

  render () {
    return (
      <div>
        <h5>
          <button
            className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored menu-btn"
            onClick={this.addNumericVariable}
            title="Inject">
            <i className="material-icons">add</i>
          </button>
          Numeric incrementor (~n)
        </h5>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userText: state.reducer.userText,
  numericIncrementorOptions: state.reducer.numericIncrementorOptions
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changeText
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NumericIncrementorMenu)
