export const CHANGE_TEXT = 'CHANGE_TEXT';
export const CHANGE_COUNT = 'CHANGE_COUNT';
export const BUILD_OUTPUT = 'BUILD_OUTPUT';

/*
    Initial State Object
*/
const initialState = {
    count: 1,
    userText: '',
    output: []
}

/*
    Main Reducer
*/
export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TEXT:
            return setUserText(state, action);

        case CHANGE_COUNT:
            return setCount(state, action);

        case BUILD_OUTPUT:
            return setOutput(state);

        default:
            return state
    }
}

/*
    Internal reducer methods
*/
const setUserText = (state, action) => {
    return {
        ...state,
        userText: action.userText
    }
}

const setCount = (state, action) => {
    return {
        ...state,
        count: action.count
    }
}

const setOutput = (state) => {
    const finalCount = state.count > 50 ? 50 : state.count;
    let lines = [];

    for (var i = 0; i < finalCount; i++) {
        let line = state.userText;

        // Apply user modifications
        line = line.replace(/~i|~n/g, (s) => {
            // Replace reserved characters with new values
            const specChars = {
                '~i': i,
                '~n': i+1
            };
            return specChars[s];
        });

        // Push text into output
        lines.push(line);
    }

    return {
        ...state,
        output: lines
    }
}

/*
    Exported reduction API
*/
export const changeText = (userText) => {
    return dispatch => {
        dispatch({
            type: CHANGE_TEXT,
            userText: userText
        });
        dispatch({
            type: BUILD_OUTPUT
        });
    }
}

export const changeCount = (count) => {
    return dispatch => {
        dispatch({
            type: CHANGE_COUNT,
            count: count
        });
        dispatch({
            type: BUILD_OUTPUT
        });
    }
}