/*var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};
*/

var twoSum = function (nums, target) {
  let myHash = new Map();

  // 4 , 5 , 6 
  for (let i = 0; i < nums.length; i++) {

    let currentNum = nums[i]; // 4

    let complement = target - currentNum; // 6
    
    if (myHash.has(complement)) {
      return [myHash.get(complement), i];
    }

    myHash.set(currentNum, i);
  }
};

twoSum([4, 5, 6], 10);
