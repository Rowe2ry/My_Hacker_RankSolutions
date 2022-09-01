/**
 * @param {string} s
 * @return {number}
 */

/* ========================================================
 * My original soution (switch statement conversion, and a reduce function | 259 ms | faster than 18.50% of LC submissions) 
 * ======================================================== */
 var romanToInt = function(s) {
    const len = s.length
    const numArr = [] // empty array to store our numbers
    for (let i = 0; i < len; i++) {
        switch (s[i]) {
            case 'I': // convert 'I' to 1
                numArr.push(1);
                break;
            case 'V': // convert 'V' to 5
                numArr.push(5)
                break;
            case 'X': // convert 'X' to 10
                numArr.push(10);
                break;
            case 'L': // convert 'L' to 50
                numArr.push(50);
                break;
            case 'C': // convert 'C' to 100
                numArr.push(100);
                break;
            case 'D': // convert 'D' to 500
                numArr.push(500);
                break;
            case 'M': // convert 'M' to 1000
                numArr.push(1000);
                break;
        };
    };
    let lastOpSub = false; //was the last operation a subtraction? skip ahead one index
    const addUp = numArr.reduce((a,b,i) => {
        if (lastOpSub == false && (numArr[i] >= numArr[i+1] || i == len-1)) {
            return a + b; // starting with 0, add each number of our array 
        } else if (lastOpSub == false) {
            lastOpSub = true; // we're about to do a subtraction, lets note that
            return (a + (numArr[i+1] - (numArr[i]))); // take the running total and add the DIFFERENCE of the next 2 numbers to it
        } else {
            lastOpSub = false; // this is not subtraction again, reset this boolean
            return a; // keep the running total the same (skip over this index)
        };
    }, 0)
    return addUp
};