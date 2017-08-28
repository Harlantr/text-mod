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
};

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
            return state;
    }
}

/*
    Internal reducer methods
*/
const setUserText = (state, action) => {
    return {
        ...state,
        userText: action.userText
    };
}

const setCount = (state, action) => {
    return {
        ...state,
        count: action.count
    };
}

const MAX_COUNT = 50;
const convertASCII = (i) => (i >= 26 ? convertASCII((i / 26 >> 0) - 1) : '') + 'abcdefghijklmnopqrstuvwxyz'[i % 26 >> 0];

const setOutput = (state) => {
    const finalCount = state.count > MAX_COUNT ? MAX_COUNT : state.count;
    let output = [];

    for (var i = 0; i < finalCount; i++) {
        let line = state.userText;

        // Apply user modifications
        // eslint-disable-next-line
        line = line.replace(/~i|~n|~a/g, (s) => {
            // Replace reserved characters with new values
            const specChars = {
                '~i': i,
                '~n': i+1,
                '~a': convertASCII(i)
            };
            return specChars[s];
        });

        // Push text into output
        output.push(line);
    };

    return {
        ...state,
        output: output
    };
};

