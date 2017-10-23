import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { buildFullOutput } from '../actions/actions';
import copy from 'copy-to-clipboard';

class CopyAllButton extends Component {
  constructor(props) {
    super(props);
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy() {
    // Copy full output to clipboard, joined by a line break
    copy(this.props.output.join('\n'));
  }

  render() {
    return (
      <div>
        {
          this.props.output.length > 0 &&
          <button className="mdl-button mdl-js-button mdl-js-ripple-effect" onClick={this.handleCopy}>
            Copy All
          </button>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  output: state.reducer.output
})

const mapDispatchToProps = dispatch => bindActionCreators({
  buildFullOutput
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CopyAllButton)
