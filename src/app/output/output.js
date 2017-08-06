import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Output = props => {
    let finalOutput = props.output.map(
        (line, i) => <p key={`line${i}`}>{line}</p>
    );

    return <pre>{finalOutput}</pre>
}

const mapStateToProps = state => ({
  output: state.reducer.output
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Output)