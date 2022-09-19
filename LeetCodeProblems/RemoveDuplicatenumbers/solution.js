/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let k = 0;
    for(let i=1; i < nums.length; i++){
      if(nums[k] === nums[i]){
        continue;
      }
      k += 1
      nums[k] = nums[i];
      
    }
    return k+1
  };