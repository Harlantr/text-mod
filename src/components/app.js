import React from 'react';
import UserInput from './userInput';
import Output from './output';
import CopyAllButton from '../containers/copyAllButton';

const App = props => (
    <div>
        <UserInput/>
        <Output />
        <CopyAllButton/>
    </div>
)

export default App;
