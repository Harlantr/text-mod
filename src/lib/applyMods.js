import incrementors from '../const/incrementors';

// Build regex that matches increment variables 'globally'
const regexString = `${incrementors.index}|${incrementors.number}|${incrementors.alphabet}`;
const regex = new RegExp(regexString, "g");

// Define new string protopye
String.prototype.applyMods = function(i) {

  //If string sector matches regex, return that sector as the correct variable value
  return this.replace(regex, s => {
    switch(s){
      case incrementors.index:
        return i;
      case incrementors.number:
        return i + 1;
      case incrementors.alphabet:
        return intToAlpha(i);
      default:
        return s;
    }
  });
}

/*
  Convert an integer (based at index 0) to an alphabetical representation of that number.

  Ex:
    0 = a
    1 = b
    2 = c
    ...
    27 = z
    28 = aa
    29 = ab
    30 = ac
    ...
    701 = zz
    702 = aaa
    703 = aab
    704 = aac
*/
const intToAlpha = i => {
  let newString = '';

  if(i >= 26) {
    // Append another letter to the string, recursively
    // This happens until we reach the final character (i <= 26)
    newString = intToAlpha((i / 26 >> 0) - 1)
  }

  // Calculate this integer's associated letter in the alphabet
  newString += 'abcdefghijklmnopqrstuvwxyz'[i % 26 >> 0];

  return newString;
};
