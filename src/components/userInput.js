import React from 'react';
import TextInput from '../containers/textInput';
import CountInput from '../containers/countInput';

const UserInput = props => (
  <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--11-col">
      <TextInput />
    </div>
    <div className="mdl-cell mdl-cell--1-col">
      <CountInput />
    </div>
  </div>
);

export default UserInput
