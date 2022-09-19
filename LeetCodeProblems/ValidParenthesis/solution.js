/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    /* ========================================================
 * My original soution - did not work, passes 2 types of checks off of assumed behavior.
    
    • will return something like ()[]{}() to true => good
    • will catch nested pairs like ((([[{[]}]])))[[{{}}]] to true => good
    • gets caught on things like ((())[]) and says false, but the algorythm they're looking for would call this true

    does fail bad arrays }( etc
 * ======================================================== */
    
    
    /*
    // go ahead and fail any string of an odd number of characters
    if (s.length % 2 !== 0) {
        return false;
    };
    
    // turn the input string into an array
    const inputArr = s.split('');
    // convert our symbols to numbers so we can compare using number properties like even vs odd etc.
    const numArr = inputArr.map((item) => {
        switch (item) {
            case '(':
                return 1;
                break;
            case ')':
                return 2;
                break;
            case '[':
                return 3;
                break;
            case ']':
                return 4;
                break;
            case '{':
                return 5;
                break;
            case '}':
                return 6;
                break;
        };
    });
    
    // create a new place to build sub arrays for testing
    const subArrs = [];
    
    let lenCount = 0; // setting to zero before iteration
    let tempArr = []; // a temporary array to build
    
    // iterate through our numArr and build out our sub arrays
    for (let i = 0; i < s.length; i++) {
        // if we're looking 
        if (numArr[i] % 2 === 1 && (tempArr[tempArr.length - 1] % 2 != 0 || !tempArr.length)) {
            console.log("cond 1 true");
            tempArr.push(numArr[i]);
            lenCount += 2;
        } else if (tempArr.length + 1 <= lenCount) {
            console.log("cond 2 true");
            tempArr.push(numArr[i])
        } else {
            console.log("cond 3 true");
            subArrs.push(tempArr); // finish this sub array by adding it to the sub array tests
            lenCount = 2; // reset the lenght to 2
            tempArr = [numArr[i]];
        };
        if (tempArr[0] % 2 === 0) return false;
    };
    // after last iteration push the temp arr in to be analyzed
    subArrs.push(tempArr);
    
    // test each sub array for palendromatic relationship
    for (let i = 0; i< subArrs.length; i++) {
        if (subArrs[i].length % 2 != 0) {
            console.log('triggering uneven array negth error');
            return false;
        }
        for (let j = 0; j < subArrs[i].length / 2; j++) {
            if (subArrs[i][j] + 1 != subArrs[i][subArrs[i].length - (j + 1)]) {
                console.log('triggering uneven pair error');
                return false;
            }
        };
        return true
    }
}; */
    
/* ========================================================
 * Frm LC discussions (stack comparison | 115ms | faster than 23.97% of LC submissions)
 * ======================================================== */

    let stk = new Array();

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') { // build up stack with any opening parenthesis character
            stk.push(s[i]);
        }
        //  for all "else if" conditions take off last thing, it should be corresponding closing pair
        else if ((s[i] == ')' && stk.pop() == '(')) {
            continue;
        } else if ((s[i] == '}' && stk.pop() == '{')) {
            continue;
        } else if ((s[i] == ']' && stk.pop() == '[')) {
            continue;
        } else {
            return false;
        }
    }
    
    // we should have built up and completely tore back down the stack, if anyhting is left, it was invalid 
    if (stk.length != 0) {
        return false;
    }

    // passed all tests
    return true;
};