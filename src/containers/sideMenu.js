import React, { Component } from 'react';
import {
    SideNav,
    SideNavItem,
    Button,
    Collapsible,
    CollapsibleItem
} from 'react-materialize';
import { changeText } from '../actions/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.addIndexVariable = this.addIndexVariable.bind(this);
        this.addNumberVariable = this.addNumberVariable.bind(this);
        this.addAlphabetVariable = this.addAlphabetVariable.bind(this);
    }

    addIndexVariable () {
        const newString = this.props.userText + '~i';
        this.props.changeText(newString);
    }

    addNumberVariable () {
        const newString = this.props.userText + '~n';
        this.props.changeText(newString);
    }

    addAlphabetVariable () {
        const newString = this.props.userText + '~a';
        this.props.changeText(newString);
    }

    render () {
        return (
            <div>
                <SideNav trigger={<Button>Menu</Button>} options={{ closeOnClick: true }}>
                    <SideNavItem subheader>Variables</SideNavItem>
                    <Collapsible>
                        <CollapsibleItem header='~i'>
                            <p>Base 0 index</p>
                            <Button onClick={this.addIndexVariable}>Inject</Button>
                        </CollapsibleItem>
                    </Collapsible>
                    <Collapsible>
                        <CollapsibleItem header='~n'>
                            Numerical incrementor
                            <Button onClick={this.addNumberVariable}>Inject</Button>
                        </CollapsibleItem>
                    </Collapsible>
                    <Collapsible>
                        <CollapsibleItem header='~a'>
                            Alphabetical incrementor
                            <Button onClick={this.addAlphabetVariable}>Inject</Button>
                        </CollapsibleItem>
                    </Collapsible>
                </SideNav>
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
)(SideMenu)