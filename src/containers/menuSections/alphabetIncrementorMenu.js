import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeText } from '../../actions/actions';
import { Button } from 'react-materialize';

class AlphabetIncrementorMenu extends Component {
    constructor (props) {
        super(props);
        this.addAlphabetVariable = this.addAlphabetVariable.bind(this);
    }

    addAlphabetVariable () {
        const newString = this.props.userText + '~a';
        this.props.changeText(newString);
    }

    render () {
        return (
            <div>
                <p>Alphabetical incrementor</p>
                <Button waves='light' onClick={this.addAlphabetVariable}>Inject</Button>
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
)(AlphabetIncrementorMenu)