import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Output = props => {
    const finalOutput = props.shortOutput.map(
        (line, i) => <p key={`line${i}`}>{line}</p>
    );

    return (
        <div className="amber lighten-5">
            <pre style={{padding: '0 1em'}}>{finalOutput}</pre>
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