import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeText } from '../../actions/actions';
import { Button } from 'react-materialize';
import { numericIncrementor } from '../../lib/variableDefinitions';

class NumericIncrementorMenu extends Component {
    constructor (props) {
        super(props);
        this.addNumericVariable = this.addNumericVariable.bind(this);
    }

    addNumericVariable () {
        const newString = this.props.userText + numericIncrementor;
        this.props.changeText(newString);
    }

    render () {
        return (
            <div>
                <p>Numeric Incrementor (Base 1)</p>
                <Button waves='light' onClick={this.addNumericVariable}>Inject</Button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userText: state.reducer.userText,
    numericIncrementorOptions: state.reducer.numericIncrementorOptions
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changeText
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NumericIncrementorMenu)