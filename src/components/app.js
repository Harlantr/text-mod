import React from 'react';
import UserInput from './userInput';
import Output from './output';
import CopyAllButton from '../containers/copyAllButton';
import { Row } from 'react-materialize';

const App = props => (
    <Row className="container">
        <UserInput/>
        <Output />
        <CopyAllButton/>
    </Row>
)

export default App;
