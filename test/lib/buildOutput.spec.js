import buildOutput from '../../src/lib/buildOutput';

describe('buildOutput service', () => {

  it('should return the correct data for a given string (w/o mods)', () => {
    const userText = 'This is a test';
    const output = buildOutput(userText, 5);

    expect(output.length).toBe(5);
    expect(output).toEqual([
      'This is a test',
      'This is a test',
      'This is a test',
      'This is a test',
      'This is a test'
    ]);
  });

  it('should return the correct data for a given string (w/ index mods)', () => {
    const userText = 'This is a test for index ~i';
    const output = buildOutput(userText, 5);

    expect(output.length).toBe(5);
    expect(output).toEqual([
      'This is a test for index 0',
      'This is a test for index 1',
      'This is a test for index 2',
      'This is a test for index 3',
      'This is a test for index 4'
    ]);
  });

  it('should return the correct data for a given string (w/ number mods)', () => {
    const userText = 'This is a test for number ~n';
    const output = buildOutput(userText, 5);

    expect(output.length).toBe(5);
    expect(output).toEqual([
      'This is a test for number 1',
      'This is a test for number 2',
      'This is a test for number 3',
      'This is a test for number 4',
      'This is a test for number 5'
    ]);
  });

  it('should return the correct data for a given string (w/ alpha mods)', () => {
    const userText = 'This is a test for letter ~a';
    const output = buildOutput(userText, 5);

    expect(output.length).toBe(5);
    expect(output).toEqual([
      'This is a test for letter a',
      'This is a test for letter b',
      'This is a test for letter c',
      'This is a test for letter d',
      'This is a test for letter e'
    ]);
  });

});