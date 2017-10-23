import incrementors from '../const/incrementors';
import reducerActions from '../const/reducerActions';
import buildOutput from '../lib/buildOutput';

/*
  Initial State Object
*/
const initialState = {
  count: 1,
  userText: '',
  numericIncrementorOptions: {
    exists: false
  },
  output: []
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

    case reducerActions.BUILD_OUTPUT:
      return setOutput(state);

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

const setOutput = state => {
  return {
    ...state,
    output: buildOutput(state.userText, state.count)
  };
}
