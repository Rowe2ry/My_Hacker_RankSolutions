/**
 * @param {number} x
 * @return {boolean}
 */

/* ========================================================
 * My original soution (brute force | 372ms | faster than 15.51% of LC submissions) 
 * ======================================================== */

var isPalindrome = function(x) {
    const str = x.toString();
    for (let i = 0; i< str.length; i++) {
        if (str[i] !== str[str.length -(i + 1)]) {
            return false;
        };
    };
    return true;
};