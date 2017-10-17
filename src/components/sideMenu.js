import React from 'react';

import IndexIncrementorMenu from '../containers/menuSections/indexIncrementorMenu';
import NumericIncrementorMenu from '../containers/menuSections/numericIncrementorMenu';
import AlphabetIncrementorMenu from '../containers/menuSections/alphabetIncrementorMenu';

import incrementors from '../const/incrementors';

const SideMenu = props => (
  <div className="mdl-layout__drawer">
    <span className="mdl-layout-title">Text Mod Variables</span>
    <div className="mdl-card__supporting-text">
      <p>Add these variables to your text to spice it up</p>
      <IndexIncrementorMenu />
      <hr/>
      <NumericIncrementorMenu />
      <hr/>
      <AlphabetIncrementorMenu />
      <hr/>
    </div>
  </div>
);

export default SideMenu
