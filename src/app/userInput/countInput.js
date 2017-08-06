import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeCount } from '../../modules/reducer';

class CountInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(event) {
        /*
            Propagate the count change
        */
        this.props.changeCount(event.target.value);
    }

    handleKeyPress(event) {
        /*
            Kill the default behavior if the user enters
            anything other than a number
        */
        const charCode = event.charCode;
        if(!(charCode >= 48 && charCode <= 57)){
            event.preventDefault();
        }
    }

    render() {
        return (
            <input type="text"
                    defaultValue={this.props.count}
                    onKeyPress={this.handleKeyPress}
                    onChange={this.handleChange}/>
        );
    }
}

const mapStateToProps = state => ({
  count: state.reducer.count
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changeCount
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountInput)