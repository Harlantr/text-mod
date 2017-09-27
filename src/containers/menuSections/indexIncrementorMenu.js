import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeText } from '../../actions/actions';
import { Button } from 'react-materialize';
import incrementors from '../../const/incrementors';

class IndexIncrementorMenu extends Component {
    constructor (props) {
        super(props);
        this.addIndexVariable = this.addIndexVariable.bind(this);
    }

    addIndexVariable () {
        const newString = this.props.userText + incrementors.index;
        this.props.changeText(newString);
    }

    render () {
        return (
            <div>
                <p>Index Incrementor (Base 0)</p>
                <Button waves='light' onClick={this.addIndexVariable}>Inject</Button>
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
)(IndexIncrementorMenu)