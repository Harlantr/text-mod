import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Output = props => {
  // Display first 50 results from output
  const finalOutput = props.output.slice(0,50).map(
    (line, i) => i < 50 ? <p key={`line${i}`}>{line}</p> : null
  );

  //Show shortened output only if there are elements to show
  return (
    <div className="output-wrap">
      {
        props.output.length > 0 ?
          <pre>{finalOutput}</pre> :
          null
      }
    </div>
  );
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
