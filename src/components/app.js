import React from 'react';
import UserInput from './userInput';
import Output from './output';
import CopyAllButton from '../containers/copyAllButton';
import { Row, SideNav, SideNavItem, Button, Collapsible, CollapsibleItem  } from 'react-materialize';

const App = props => (
    <div>
        <SideNav
            trigger={<Button>Legend</Button>}
            options={{ closeOnClick: true }}
            >
            <SideNavItem subheader>Variables</SideNavItem>
            <Collapsible>
                <CollapsibleItem header='~i'>
                    Base 0 index.
                </CollapsibleItem>
            </Collapsible>
            <Collapsible>
                <CollapsibleItem header='~n'>
                    Numerical incrementor
                </CollapsibleItem>
            </Collapsible>
            <Collapsible>
                <CollapsibleItem header='~i'>
                    Alphabetical incrementor
                </CollapsibleItem>
            </Collapsible>
        </SideNav>
        <Row className="container">
            <UserInput/>
            <Output />
            <CopyAllButton/>
        </Row>
    </div>
)

export default App;
