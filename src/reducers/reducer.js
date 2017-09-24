export const CHANGE_TEXT = 'CHANGE_TEXT';
export const CHANGE_COUNT = 'CHANGE_COUNT';
export const BUILD_SHORT_OUTPUT = 'BUILD_SHORT_OUTPUT';
export const BUILD_FULL_OUTPUT = 'BUILD_FULL_OUTPUT';

/*
    Initial State Object
*/
const initialState = {
    count: 1,
    userText: '',
    numericIncrementorOptions: {
        exists: false
    },
    shortOutput: [],
    fullOutput: []
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

        case BUILD_SHORT_OUTPUT:
            return setShortOutput(state);

        case BUILD_FULL_OUTPUT:
            return setFullOutput(state);

        default:
            return state;
    }
}

/*
    Internal reducer methods
*/
const setUserText = (state, action) => {
    const newUserText = action.userText;
    const numericIncrementorExists = action.userText.indexOf('~n') !== -1;

    return {
        ...state,
        userText: newUserText,
        numericIncrementorOptions: {
            exists: numericIncrementorExists
        }
    };
}

const setCount = (state, action) => {
    return {
        ...state,
        count: action.count
    };
}

const setShortOutput = state => {
    const max_count = 50;
    const finalCount = state.count > max_count ? max_count : state.count;

    return {
        ...state,
        shortOutput: buildOutput(state.userText, finalCount)
    };
};

const setFullOutput = state => {
    const fullOutputArray = buildOutput(state.userText, state.count);

    return {
        ...state,
        fullOutput: fullOutputArray.join("\n")
    };
}

/*
    Utils
*/
const convertASCII = i => (i >= 26 ? convertASCII((i / 26 >> 0) - 1) : '') + 'abcdefghijklmnopqrstuvwxyz'[i % 26 >> 0];
const buildOutput = (text, count) => {
    let output = [];
    for (var i = 0; i < count; i++) {
        let line = text;

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

    return output;
}