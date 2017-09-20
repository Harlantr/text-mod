import React from 'react';
import SideMenu from '../containers/sideMenu';
import UserInput from './userInput';
import Output from './output';
import CopyAllButton from '../containers/copyAllButton';
import { Row } from 'react-materialize';

const App = props => (
    <div>
        <SideMenu />
        <Row className="container">
            <UserInput/>
            <Output />
            <CopyAllButton/>
        </Row>
    </div>
)

export default App;
