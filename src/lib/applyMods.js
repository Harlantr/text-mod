import {
    indexIncrementor ,
    numericIncrementor,
    alphabetIncrementor
} from './variableDefinitions';

// Build regex that matches increment variables 'globally'
const regexString = `${indexIncrementor}|${numericIncrementor}|${alphabetIncrementor}`;
const regex = new RegExp(regexString, "g");

// eslint-disable-next-line
String.prototype.applyMods = function(i) {

    //If string sector matches regex, return that sector as the correct variable value
    return this.replace(regex, s => {
        switch(s){
            case indexIncrementor:
                return i;
            case numericIncrementor:
                return i + 1;
            case alphabetIncrementor:
                return intToAlpha(i);
            default:
                return s;
        }
    });
}

/*
    Convert an integer to an alphabetical representation of that number.

    Ex:
        1 = a
        2 = b
        3 = c
        ...
        26 = z
        27 = aa
        28 = ab
        29 = ac
        ...
        702 = zz
        703 = aaa
        704 = aab
        705 = aac
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