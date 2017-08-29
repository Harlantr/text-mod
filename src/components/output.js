import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Output = props => {
    let finalOutput = props.shortOutput.map(
        (line, i) => <p key={`line${i}`}>{line}</p>
    );

    return <pre>{finalOutput}</pre>
}

const mapStateToProps = state => ({
  shortOutput: state.reducer.shortOutput
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Output)