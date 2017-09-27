import '../lib/applyMods';
import incrementors from '../const/incrementors';
import reducerActions from '../const/reducerActions';

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
        case reducerActions.CHANGE_TEXT:
            return setUserText(state, action);

        case reducerActions.CHANGE_COUNT:
            return setCount(state, action);

        case reducerActions.BUILD_SHORT_OUTPUT:
            return setShortOutput(state);

        case reducerActions.BUILD_FULL_OUTPUT:
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
    const numericIncrementorExists = newUserText.indexOf(incrementors.number) !== -1;

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
