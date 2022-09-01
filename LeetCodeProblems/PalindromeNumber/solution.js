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

/* ========================================================
 * Frm LC discussions (reconstruct the number in reverse with modulos | 179ms | faster than 93.55% of LC submissions) 
 * does not require converting the input number to a string!
 * ======================================================== */

var isPalindrome = function(x) {
    var reverse = 0; // set to zero
    var copy = x; // copy the input eg. 1141

    while (copy > 0) { // while our copy is positive (negative numbers cannot be palendromes)
      const digit = copy % 10; // remainder of number divided by 10 eg. 1141 % 10 ==> 1 |i=2 114 % 10 = 4 | i=3 11 % 10 = 1| i=4 1 % 10 = 1
      reverse = reverse * 10 + digit; // 0 * 10 + 1 | i=2 1 * 10 + 4 = 14| i=3 14 * 10 + 1 = 141 | i=4 141 * 10 + 1 = 1141
      copy = ~~(copy / 10); //Math.floor(copy / 10) | 1141 / 10 (rounded down) = 114 |i=2 114/10-11| i=3 11/10 = 1| i=4 1/10 = 0 - break while loop
    }

    return reverse == x; // is 1141 == 1141 || true
};