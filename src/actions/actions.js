import reducerActions from '../const/reducerActions';

export const changeText = userText => {
    return dispatch => {
        dispatch({
            type: reducerActions.CHANGE_TEXT,
            userText: userText
        });
        dispatch({
            type: reducerActions.BUILD_SHORT_OUTPUT
        });
    };
};

export const changeCount = count => {
    return dispatch => {
        dispatch({
            type: reducerActions.CHANGE_COUNT,
            count: count
        });
        dispatch({
            type: reducerActions.BUILD_SHORT_OUTPUT
        });
    };
};

export const buildFullOutput = () => {
    return dispatch => {
        dispatch({
            type: reducerActions.BUILD_FULL_OUTPUT
        });
    };
};