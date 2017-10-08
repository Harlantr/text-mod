import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Output = props => {
    const finalOutput = props.shortOutput.map(
        (line, i) => <p key={`line${i}`}>{line}</p>
    );

    return (
        <div>
          {
            props.shortOutput.length > 0 ?
            <div className="amber lighten-5">
                <pre>{finalOutput}</pre>
            </div> :
            null
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