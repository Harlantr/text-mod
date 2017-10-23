import reducerActions from '../../src/const/reducerActions';
import reducer from '../../src/reducers/reducer';

describe('reducer', () => {

  it('should return the initial state by default', () => {
    const currentState = undefined;
    const action = {};

    const newState = reducer(currentState, action);

    expect(newState).toEqual({
      count: 1,
      userText: '',
      numericIncrementorOptions: {
        exists: false
      },
      output: []
    });
  });

  describe('text changes', () => {

    it('should return a state with a new string', () => {
      const currentState = undefined;
      const action = {
        type: reducerActions.CHANGE_TEXT,
        userText: 'This is a test string!'
      };

      const newState = reducer(currentState, action);

      expect(newState).toEqual({
        count: 1,
        userText: 'This is a test string!',
        numericIncrementorOptions: {
          exists: false
        },
        output: []
      })
    });
  });

  describe('count changes', () => {

    it('should return a state with a new count', () => {
      const currentState = undefined;
      const action = {
        type: reducerActions.CHANGE_COUNT,
        count: 10
      };

      const newState = reducer(currentState, action);

      expect(newState).toEqual({
        count: 10,
        userText: '',
        numericIncrementorOptions: {
          exists: false
        },
        output: []
      })
    });
  });

  describe('short output changes', () => {

    it('should build the shortened output of text modifications (count = 1)', () => {
      const currentState = {
        count: 1,
        userText: 'Test string',
        numericIncrementorOptions: {
          exists: false
        },
        output: []
      };
      const action = {
        type: reducerActions.BUILD_OUTPUT
      };

      const newState = reducer(currentState, action);

      expect(newState).toEqual({
        count: 1,
        userText: 'Test string',
        numericIncrementorOptions: {
          exists: false
        },
        output: [
          'Test string'
        ]
      })
    });

    it('should build the shortened output of text modifications (count < 50)', () => {
      const currentState = {
        count: 10,
        userText: 'Test string',
        numericIncrementorOptions: {
          exists: false
        },
        output: []
      };
      const action = {
        type: reducerActions.BUILD_OUTPUT
      };

      const newState = reducer(currentState, action);

      expect(newState).toEqual({
        count: 10,
        userText: 'Test string',
        numericIncrementorOptions: {
          exists: false
        },
        output: [
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string'
        ]
      });
    });

    it('should build the shortened output of text modifications (count > 50)', () => {
      const currentState = {
        count: 60,
        userText: 'Test string',
        numericIncrementorOptions: {
          exists: false
        },
        output: []
      };
      const action = {
        type: reducerActions.BUILD_OUTPUT
      };

      const newState = reducer(currentState, action);

      expect(newState).toEqual({
        count: 60,
        userText: 'Test string',
        numericIncrementorOptions: {
          exists: false
        },
        output: [
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string'
        ]
      });
    });
  });

  describe('full output changes', () => {

    it('should build the full output of text modifications (count < 50)', () => {
      const currentState = {
        count: 20,
        userText: 'Test string',
        numericIncrementorOptions: {
          exists: false
        },
        output: []
      };
      const action = {
        type: reducerActions.BUILD_OUTPUT
      };

      const newState = reducer(currentState, action);

      expect(newState).toEqual({
        count: 20,
        userText: 'Test string',
        numericIncrementorOptions: {
          exists: false
        },
        output: [
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string'
        ]
      });
    });

    it('should build the full output of text modifications (count > 50)', () => {
      const currentState = {
        count: 60,
        userText: 'Test string',
        numericIncrementorOptions: {
          exists: false
        },
        output: []
      };
      const action = {
        type: reducerActions.BUILD_OUTPUT
      };

      const newState = reducer(currentState, action);

      expect(newState).toEqual({
        count: 60,
        userText: 'Test string',
        numericIncrementorOptions: {
          exists: false
        },
        output: [
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string'
        ]
      });
    });
  });

});
