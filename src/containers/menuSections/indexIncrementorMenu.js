import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeText } from '../../actions/actions';
import incrementors from '../../const/incrementors';

class IndexIncrementorMenu extends Component {
  constructor (props) {
    super(props);
    this.addIndexVariable = this.addIndexVariable.bind(this);
  }

  addIndexVariable () {
    const newString = this.props.userText + incrementors.index;
    this.props.changeText(newString);
  }

  render () {
    return (
      <div>
        <h5>
          <button
            className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored menu-btn"
            onClick={this.addIndexVariable}
            title="Inject">
            <i className="material-icons">add</i>
          </button>
          Index incrementor (~i)
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
)(IndexIncrementorMenu)
