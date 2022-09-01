/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* ========================================================
 * My original soution (brute force | 169ms | faster than 33.20% of LC submissions) 
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
 * More optimized from discussions (hashmap | 132ms | faster than 47.62% of solutions)
 * ======================================================== */

var twoSum = function(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i];
        }

        map.set(target - nums[i], i);
    };
};

/* ========================================================
 * More optimized from discussions (hashmap #2 | 115ms | faster than 58.79% of solutions)
 * ======================================================== */

var twoSum = function(nums, target) {
    
    const hash = new Map();
    
    for(let i = 0; i < nums.length; i++){
        
        if(hash.has(nums[i])) return [i, hash.get(nums[i])];
        
        else hash.set(target - nums[i], i);
        
    };    
};