import '../lib/applyMods';
import {
    indexIncrementor ,
    numericIncrementor,
    alphabetIncrementor
} from '../lib/variableDefinitions';

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
    const numericIncrementorExists = action.userText.indexOf(numericIncrementor) !== -1;

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

const buildOutput = (text, count) => {
    let output = [];
    for (var i = 0; i < count; i++) {
        output.push(text.applyMods(i));
    };

    return output;
}
