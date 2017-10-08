import {
  changeText,
  changeCount,
  buildFullOutput
} from '../../src/actions/actions';
import reducerActions from '../../src/const/reducerActions';

describe('changeText Action', () => {

  it('should return a function', () => {
    expect(changeText()).toBeInstanceOf(Function);
  });

  it('should dispatch a CHANGE_TEXT action and a BUILD_SHORT_OUTPUT action', () => {
    const userText = 'This is text!';
    const dispatch = jest.fn();

    // Call the function
    changeText(userText)(dispatch);

    //Expect that a dispatch was created with the correct data
    expect(dispatch).toHaveBeenCalledWith({
      type: reducerActions.CHANGE_TEXT,
      userText: userText
    });

    //Expect that a dispatch was created to build the short output
    expect(dispatch).toHaveBeenCalledWith({
      type: reducerActions.BUILD_SHORT_OUTPUT
    });
  });
});

describe('changeCount Action', () => {

  it('should return a function', () => {
    expect(changeCount()).toBeInstanceOf(Function);
  });

  it('should dispatch a CHANGE_COUNT action and a BUILD_SHORT_OUTPUT action', () => {
    const count = 10;
    const dispatch = jest.fn();

    // Call the function
    changeCount(count)(dispatch);

    //Expect that a dispatch was created with the correct data
    expect(dispatch).toHaveBeenCalledWith({
      type: reducerActions.CHANGE_COUNT,
      count: count
    });

    //Expect that a dispatch was created to build the short output
    expect(dispatch).toHaveBeenCalledWith({
      type: reducerActions.BUILD_SHORT_OUTPUT
    });
  });
});

describe('buildFullOutput Action', () => {

  it('should return a function', () => {
    expect(buildFullOutput()).toBeInstanceOf(Function);
  });

  it('should dispatch a BUILD_FULL_OUTPUT action', () => {
    const count = 10;
    const dispatch = jest.fn();

    // Call the function
    buildFullOutput(count)(dispatch);

    //Expect that a dispatch was created with the correct data
    expect(dispatch).toHaveBeenCalledWith({
      type: reducerActions.BUILD_FULL_OUTPUT
    });
  });
});