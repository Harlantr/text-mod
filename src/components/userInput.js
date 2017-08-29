import React from 'react';
import TextInput from '../containers/textInput';
import CountInput from '../containers/countInput';
import { Row } from 'react-materialize';

const UserInput = props => (
    <Row>
        <TextInput />
        <CountInput />
    </Row>
);

export default UserInput