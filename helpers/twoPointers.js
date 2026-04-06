function reverseArray(nums){
    // 2 pointers --> left right    
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right){
        // swap 
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp
    }
    left ++ 
    right -- 
    
    return nums 
}

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]