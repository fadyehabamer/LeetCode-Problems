var removeDuplicates = function (nums) {
 let i = 0; 
for (let j = 1; j < nums.length; j++) {
    // إحنا بنهتم لما نلاقي رقم "مختلف" بس
    if (nums[i] !== nums[j]) { 
        i++;               // حرك المدير خطوة (افتح مكان جديد)
        nums[i] = nums[j]; // انقل الرقم الجديد للمكان ده
    }
}
console.log(nums)
return i + 1;
}


removeDuplicates([1, 1, 2, 2, 3])