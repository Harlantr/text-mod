import { CHANGE_TEXT, CHANGE_COUNT, BUILD_OUTPUT } from '../reducers/reducer';

export const changeText = (userText) => {
    return dispatch => {
        dispatch({
            type: CHANGE_TEXT,
            userText: userText
        });
        dispatch({
            type: BUILD_OUTPUT
        });
    };
};

export const changeCount = (count) => {
    return dispatch => {
        dispatch({
            type: CHANGE_COUNT,
            count: count
        });
        dispatch({
            type: BUILD_OUTPUT
        });
    };
};