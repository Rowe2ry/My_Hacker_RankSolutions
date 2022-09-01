/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* ========================================================
 * My original soution (brute force)
 * ======================================================== */

 var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let index2 = 0;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                index2 = j
            };
        };
        if (index2 !== 0) {
            return [i,index2];
        };
    }
};

/* ========================================================
 * More optimized from discussions
 * ======================================================== */

