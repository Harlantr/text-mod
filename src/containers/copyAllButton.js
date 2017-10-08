import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { buildFullOutput } from '../actions/actions';
import copy from 'copy-to-clipboard';
import { Button } from 'react-materialize';

class CopyAllButton extends Component {
    constructor(props) {
        super(props);
        this.handleCopy = this.handleCopy.bind(this);
    }

    handleCopy() {
        this.props.buildFullOutput();
    }

    componentWillReceiveProps(nextProps) {
        copy(nextProps.fullOutput.join('\n'));
    }

    render() {
        return (
            <div>
                {
                    this.props.shortOutput.length > 0 ?
                    <Button waves='light' onClick={this.handleCopy}>Copy All</Button> :
                    null
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    shortOutput: state.reducer.shortOutput,
    fullOutput: state.reducer.fullOutput
})

const mapDispatchToProps = dispatch => bindActionCreators({
    buildFullOutput
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CopyAllButton)