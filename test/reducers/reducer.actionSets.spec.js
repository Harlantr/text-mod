import reducerActions from '../../src/const/reducerActions';
import reducer from '../../src/reducers/reducer';

describe('reducer', () => {

  describe('reducing action sets', () => {

    it('handles text and count changes', () => {
      // Set of actions to execute
      const actionSet = [
        {
          type: reducerActions.CHANGE_TEXT,
          userText: 'Test string'
        },
        {
          type: reducerActions.BUILD_OUTPUT
        },
        {
          type: reducerActions.CHANGE_COUNT,
          count: 5
        },
        {
          type: reducerActions.BUILD_OUTPUT
        }
      ];

      // Apply all actions in sequence
      const newState = actionSet.reduce(reducer, undefined);

      expect(newState).toEqual({
        count: 5,
        userText: 'Test string',
        numericIncrementorOptions: {
          exists: false
        },
        output: [
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string'
        ]
      });
    });

    it('builds a full output (count < 50)', () => {
      // Set of actions to execute
      const actionSet = [
        {
          type: reducerActions.CHANGE_TEXT,
          userText: 'Test string'
        },
        {
          type: reducerActions.BUILD_OUTPUT
        },
        {
          type: reducerActions.CHANGE_COUNT,
          count: 5
        },
        {
          type: reducerActions.BUILD_OUTPUT
        }
      ];

      // Apply all actions in sequence
      const newState = actionSet.reduce(reducer, undefined);

      expect(newState).toEqual({
        count: 5,
        userText: 'Test string',
        numericIncrementorOptions: {
          exists: false
        },
        output: [
          'Test string',
          'Test string',
          'Test string',
          'Test string',
          'Test string'
        ]
      });
    });

    it('builds a full output (count > 50)', () => {
      // Set of actions to execute
      const actionSet = [
        {
          type: reducerActions.CHANGE_TEXT,
          userText: 'Test string'
        },
        {
          type: reducerActions.BUILD_OUTPUT
        },
        {
          type: reducerActions.CHANGE_COUNT,
          count: 60
        },
        {
          type: reducerActions.BUILD_OUTPUT
        }
      ];

      // Apply all actions in sequence
      const newState = actionSet.reduce(reducer, undefined);

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

    describe('with index mods', () => {

      it('handles text and count changes', () => {
        // Set of actions to execute
        const actionSet = [
          {
            type: reducerActions.CHANGE_TEXT,
            userText: 'Index: ~i'
          },
          {
            type: reducerActions.BUILD_OUTPUT
          },
          {
            type: reducerActions.CHANGE_COUNT,
            count: 5
          },
          {
            type: reducerActions.BUILD_OUTPUT
          }
        ];

        // Apply all actions in sequence
        const newState = actionSet.reduce(reducer, undefined);

        expect(newState).toEqual({
          count: 5,
          userText: 'Index: ~i',
          numericIncrementorOptions: {
            exists: false
          },
          output: [
            'Index: 0',
            'Index: 1',
            'Index: 2',
            'Index: 3',
            'Index: 4'
          ]
        });
      });

      it('builds a full output (count < 50)', () => {
        // Set of actions to execute
        const actionSet = [
          {
            type: reducerActions.CHANGE_TEXT,
            userText: 'Index: ~i'
          },
          {
            type: reducerActions.BUILD_OUTPUT
          },
          {
            type: reducerActions.CHANGE_COUNT,
            count: 5
          },
          {
            type: reducerActions.BUILD_OUTPUT
          }
        ];

        // Apply all actions in sequence
        const newState = actionSet.reduce(reducer, undefined);

        expect(newState).toEqual({
          count: 5,
          userText: 'Index: ~i',
          numericIncrementorOptions: {
            exists: false
          },
          output: [
            'Index: 0',
            'Index: 1',
            'Index: 2',
            'Index: 3',
            'Index: 4'
          ]
        });
      });

      it('builds a full output (count > 50)', () => {
        // Set of actions to execute
        const actionSet = [
          {
            type: reducerActions.CHANGE_TEXT,
            userText: 'Index: ~i'
          },
          {
            type: reducerActions.BUILD_OUTPUT
          },
          {
            type: reducerActions.CHANGE_COUNT,
            count: 60
          },
          {
            type: reducerActions.BUILD_OUTPUT
          }
        ];

        // Apply all actions in sequence
        const newState = actionSet.reduce(reducer, undefined);

        expect(newState).toEqual({
          count: 60,
          userText: 'Index: ~i',
          numericIncrementorOptions: {
            exists: false
          },
          output: [
            'Index: 0',
            'Index: 1',
            'Index: 2',
            'Index: 3',
            'Index: 4',
            'Index: 5',
            'Index: 6',
            'Index: 7',
            'Index: 8',
            'Index: 9',
            'Index: 10',
            'Index: 11',
            'Index: 12',
            'Index: 13',
            'Index: 14',
            'Index: 15',
            'Index: 16',
            'Index: 17',
            'Index: 18',
            'Index: 19',
            'Index: 20',
            'Index: 21',
            'Index: 22',
            'Index: 23',
            'Index: 24',
            'Index: 25',
            'Index: 26',
            'Index: 27',
            'Index: 28',
            'Index: 29',
            'Index: 30',
            'Index: 31',
            'Index: 32',
            'Index: 33',
            'Index: 34',
            'Index: 35',
            'Index: 36',
            'Index: 37',
            'Index: 38',
            'Index: 39',
            'Index: 40',
            'Index: 41',
            'Index: 42',
            'Index: 43',
            'Index: 44',
            'Index: 45',
            'Index: 46',
            'Index: 47',
            'Index: 48',
            'Index: 49',
            'Index: 50',
            'Index: 51',
            'Index: 52',
            'Index: 53',
            'Index: 54',
            'Index: 55',
            'Index: 56',
            'Index: 57',
            'Index: 58',
            'Index: 59',
          ]
        });
      });
    });

    describe('with number mods', () => {

      it('handles text and count changes', () => {
        // Set of actions to execute
        const actionSet = [
          {
            type: reducerActions.CHANGE_TEXT,
            userText: 'Number: ~n'
          },
          {
            type: reducerActions.BUILD_OUTPUT
          },
          {
            type: reducerActions.CHANGE_COUNT,
            count: 5
          },
          {
            type: reducerActions.BUILD_OUTPUT
          }
        ];

        // Apply all actions in sequence
        const newState = actionSet.reduce(reducer, undefined);

        expect(newState).toEqual({
          count: 5,
          userText: 'Number: ~n',
          numericIncrementorOptions: {
            exists: true
          },
          output: [
            'Number: 1',
            'Number: 2',
            'Number: 3',
            'Number: 4',
            'Number: 5'
          ]
        });
      });

      it('builds a full output (count < 50)', () => {
        // Set of actions to execute
        const actionSet = [
          {
            type: reducerActions.CHANGE_TEXT,
            userText: 'Number: ~n'
          },
          {
            type: reducerActions.BUILD_OUTPUT
          },
          {
            type: reducerActions.CHANGE_COUNT,
            count: 5
          },
          {
            type: reducerActions.BUILD_OUTPUT
          }
        ];

        // Apply all actions in sequence
        const newState = actionSet.reduce(reducer, undefined);

        expect(newState).toEqual({
          count: 5,
          userText: 'Number: ~n',
          numericIncrementorOptions: {
            exists: true
          },
          output: [
            'Number: 1',
            'Number: 2',
            'Number: 3',
            'Number: 4',
            'Number: 5'
          ]
        });
      });

      it('builds a full output (count > 50)', () => {
        // Set of actions to execute
        const actionSet = [
          {
            type: reducerActions.CHANGE_TEXT,
            userText: 'Number: ~n'
          },
          {
            type: reducerActions.BUILD_OUTPUT
          },
          {
            type: reducerActions.CHANGE_COUNT,
            count: 60
          },
          {
            type: reducerActions.BUILD_OUTPUT
          }
        ];

        // Apply all actions in sequence
        const newState = actionSet.reduce(reducer, undefined);

        expect(newState).toEqual({
          count: 60,
          userText: 'Number: ~n',
          numericIncrementorOptions: {
            exists: true
          },
          output: [
            'Number: 1',
            'Number: 2',
            'Number: 3',
            'Number: 4',
            'Number: 5',
            'Number: 6',
            'Number: 7',
            'Number: 8',
            'Number: 9',
            'Number: 10',
            'Number: 11',
            'Number: 12',
            'Number: 13',
            'Number: 14',
            'Number: 15',
            'Number: 16',
            'Number: 17',
            'Number: 18',
            'Number: 19',
            'Number: 20',
            'Number: 21',
            'Number: 22',
            'Number: 23',
            'Number: 24',
            'Number: 25',
            'Number: 26',
            'Number: 27',
            'Number: 28',
            'Number: 29',
            'Number: 30',
            'Number: 31',
            'Number: 32',
            'Number: 33',
            'Number: 34',
            'Number: 35',
            'Number: 36',
            'Number: 37',
            'Number: 38',
            'Number: 39',
            'Number: 40',
            'Number: 41',
            'Number: 42',
            'Number: 43',
            'Number: 44',
            'Number: 45',
            'Number: 46',
            'Number: 47',
            'Number: 48',
            'Number: 49',
            'Number: 50',
            'Number: 51',
            'Number: 52',
            'Number: 53',
            'Number: 54',
            'Number: 55',
            'Number: 56',
            'Number: 57',
            'Number: 58',
            'Number: 59',
            'Number: 60'
          ]
        });
      });
    });

    describe('with alphabet mods', () => {

      it('handles text and count changes', () => {
        // Set of actions to execute
        const actionSet = [
          {
            type: reducerActions.CHANGE_TEXT,
            userText: 'Letter: ~a'
          },
          {
            type: reducerActions.BUILD_OUTPUT
          },
          {
            type: reducerActions.CHANGE_COUNT,
            count: 5
          },
          {
            type: reducerActions.BUILD_OUTPUT
          }
        ];

        // Apply all actions in sequence
        const newState = actionSet.reduce(reducer, undefined);

        expect(newState).toEqual({
          count: 5,
          userText: 'Letter: ~a',
          numericIncrementorOptions: {
            exists: false
          },
          output: [
            'Letter: a',
            'Letter: b',
            'Letter: c',
            'Letter: d',
            'Letter: e'
          ]
        });
      });

      it('builds a full output (count < 50)', () => {
        // Set of actions to execute
        const actionSet = [
          {
            type: reducerActions.CHANGE_TEXT,
            userText: 'Letter: ~a'
          },
          {
            type: reducerActions.BUILD_OUTPUT
          },
          {
            type: reducerActions.CHANGE_COUNT,
            count: 5
          },
          {
            type: reducerActions.BUILD_OUTPUT
          }
        ];

        // Apply all actions in sequence
        const newState = actionSet.reduce(reducer, undefined);

        expect(newState).toEqual({
          count: 5,
          userText: 'Letter: ~a',
          numericIncrementorOptions: {
            exists: false
          },
          output: [
            'Letter: a',
            'Letter: b',
            'Letter: c',
            'Letter: d',
            'Letter: e'
          ]
        });
      });

      it('builds a full output (count > 50)', () => {
        // Set of actions to execute
        const actionSet = [
          {
            type: reducerActions.CHANGE_TEXT,
            userText: 'Letter: ~a'
          },
          {
            type: reducerActions.BUILD_OUTPUT
          },
          {
            type: reducerActions.CHANGE_COUNT,
            count: 60
          },
          {
            type: reducerActions.BUILD_OUTPUT
          }
        ];

        // Apply all actions in sequence
        const newState = actionSet.reduce(reducer, undefined);

        expect(newState).toEqual({
          count: 60,
          userText: 'Letter: ~a',
          numericIncrementorOptions: {
            exists: false
          },
          output: [
            'Letter: a',
            'Letter: b',
            'Letter: c',
            'Letter: d',
            'Letter: e',
            'Letter: f',
            'Letter: g',
            'Letter: h',
            'Letter: i',
            'Letter: j',
            'Letter: k',
            'Letter: l',
            'Letter: m',
            'Letter: n',
            'Letter: o',
            'Letter: p',
            'Letter: q',
            'Letter: r',
            'Letter: s',
            'Letter: t',
            'Letter: u',
            'Letter: v',
            'Letter: w',
            'Letter: x',
            'Letter: y',
            'Letter: z',
            'Letter: aa',
            'Letter: ab',
            'Letter: ac',
            'Letter: ad',
            'Letter: ae',
            'Letter: af',
            'Letter: ag',
            'Letter: ah',
            'Letter: ai',
            'Letter: aj',
            'Letter: ak',
            'Letter: al',
            'Letter: am',
            'Letter: an',
            'Letter: ao',
            'Letter: ap',
            'Letter: aq',
            'Letter: ar',
            'Letter: as',
            'Letter: at',
            'Letter: au',
            'Letter: av',
            'Letter: aw',
            'Letter: ax',
            'Letter: ay',
            'Letter: az',
            'Letter: ba',
            'Letter: bb',
            'Letter: bc',
            'Letter: bd',
            'Letter: be',
            'Letter: bf',
            'Letter: bg',
            'Letter: bh'
          ]
        });
      });
    });

  });

});
