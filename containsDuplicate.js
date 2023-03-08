var containsDuplicate = function (nums) {
  if (nums.length == 0) return false;
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) return true;
    }
  }
    return false;
    
};

// var containsDuplicate = function (nums) {
//   if (nums.length == 0) return false;
//   var set = new Set(nums);
//   return set.size != nums.length;
// };


console.log(containsDuplicate([1, 2, 3, 1]));

// leetcode submittions
