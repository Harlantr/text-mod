import React from 'react';
import {
    SideNav,
    SideNavItem,
    Button,
    Collapsible,
    CollapsibleItem
} from 'react-materialize';

import IndexIncrementorMenu from '../containers/menuSections/indexIncrementorMenu';
import NumericIncrementorMenu from '../containers/menuSections/numericIncrementorMenu';
import AlphabetIncrementorMenu from '../containers/menuSections/alphabetIncrementorMenu';

import {
    indexIncrementor ,
    numericIncrementor,
    alphabetIncrementor
} from '../lib/variableDefinitions';

const SideMenu = props => (
    <SideNav trigger={<Button>Menu</Button>} options={{ closeOnClick: true }}>
        <SideNavItem subheader>Variables</SideNavItem>
        <Collapsible>
            <CollapsibleItem header={indexIncrementor}>
                <IndexIncrementorMenu />
            </CollapsibleItem>
        </Collapsible>
        <Collapsible>
            <CollapsibleItem header={numericIncrementor}>
                <NumericIncrementorMenu/>
            </CollapsibleItem>
        </Collapsible>
        <Collapsible>
            <CollapsibleItem header={alphabetIncrementor}>
                <AlphabetIncrementorMenu/>
            </CollapsibleItem>
        </Collapsible>
    </SideNav>
);

export default SideMenu