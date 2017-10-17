import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeText } from '../../actions/actions';
import incrementors from '../../const/incrementors';

class AlphabetIncrementorMenu extends Component {
  constructor (props) {
    super(props);
    this.addAlphabetVariable = this.addAlphabetVariable.bind(this);
  }

  addAlphabetVariable () {
    const newString = this.props.userText + incrementors.alphabet;
    this.props.changeText(newString);
  }

  render () {
    return (
      <div>
        <h5>
          <button
            className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored menu-btn"
            onClick={this.addAlphabetVariable}
            title="Inject">
            <i className="material-icons">add</i>
          </button>
          Alphabetical incrementor (~a)
        </h5>
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
)(AlphabetIncrementorMenu)
