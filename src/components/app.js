import React from 'react';
import SideMenu from './sideMenu';
import UserInput from './userInput';
import Output from './output';
import CopyAllButton from '../containers/copyAllButton';

import '../stylesheets/material.min.css';
import 'material-design-lite/material.min.js';

const App = props => (
  <div className="mdl-layout mdl-js-layout">
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">Text-Mod</span>
        <div className="mdl-layout-spacer"></div>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="https://github.com/Harlantr/text-mod" target="_blank">
            <i className="material-icons link-space-right">code</i>
            Source
          </a>
          <a className="mdl-navigation__link" href="https://thomas-harlan.com" target="_blank">
            <i className="material-icons link-space-right">face</i>
            Author
          </a>
        </nav>
      </div>
    </header>
    <SideMenu />
    <main className="mdl-layout__content">
      <div className="page-content container">
        <UserInput/>
        <Output />
        <CopyAllButton/>
      </div>
    </main>
    <footer className="mdl-mini-footer">
      <span>
        <i className="material-icons link-space-right">copyright</i>
        Thomas Harlan 2017
      </span>
    </footer>
  </div>
)

export default App;
