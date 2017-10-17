import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Output = props => {
  const finalOutput = props.shortOutput.map(
    (line, i) => <p key={`line${i}`}>{line}</p>
  );

  return (
    <div className="output-wrap">
      {
        props.shortOutput.length > 0 &&
        <pre>{finalOutput}</pre>
      }
    </div>
  );
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
