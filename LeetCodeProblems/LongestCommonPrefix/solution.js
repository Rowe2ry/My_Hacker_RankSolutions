/**
 * @param {string[]} strs
 * @return {string}
 */
 
/* ========================================================
 * My original soution (for loop iteration | 74ms | faster than 86.07% of LC submissions) 
 * ======================================================== */

var longestCommonPrefix = function(strs) {
    let maxPos = 200 // told in constraints that this would be the limit
    let shortestWord = ''; // set outside of loop scope
    let commonPref = ''; // baseline, will add as cecks pass
    // quick for loop to find out the length of the shortest word, to speed up overall function
    for (let i = 0; i < strs.length; i++) {
        maxPos = strs[i].length < maxPos ? strs[i].length : maxPos; // if the word we're looking at is shorter than the shortest thing weve found, its now the shortest thing we've found
        if (strs[i].length === maxPos) {
            shortestWord = strs[i]; // if this word is that short length, then its what we'll measure against, the common pref can't be logner than the shortest string
        };
    };
    // iterate through characters
    for (let i = 0; i < maxPos ; i++) {
        // iterate through the strings in the array
        for (let j = 0; j < strs.length; j++) {
              if (strs[j][i] !== shortestWord[i]) { // if the "i" letter of this word and the shortest word are NOT the same, this index has been busted, return what we've got up to this point
                  return commonPref;
              };
        };
        commonPref = commonPref.concat(shortestWord[i]) // passed the negative check for all strings, add this letter to the common pref
    };
    
    return commonPref; // return what we got after all calculations
};