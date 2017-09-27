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

import incrementors from '../const/incrementors';

const SideMenu = props => (
    <SideNav trigger={<Button>Menu</Button>} options={{ closeOnClick: true }}>
        <SideNavItem subheader>Variables</SideNavItem>
        <Collapsible>
            <CollapsibleItem header={incrementors.index}>
                <IndexIncrementorMenu />
            </CollapsibleItem>
        </Collapsible>
        <Collapsible>
            <CollapsibleItem header={incrementors.number}>
                <NumericIncrementorMenu/>
            </CollapsibleItem>
        </Collapsible>
        <Collapsible>
            <CollapsibleItem header={incrementors.alphabet}>
                <AlphabetIncrementorMenu/>
            </CollapsibleItem>
        </Collapsible>
    </SideNav>
);

export default SideMenu