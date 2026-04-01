var productExceptSelf = function (nums) {
  let lhs = [];
  let acc = 1; // الـ "حصالة" اللي بتشيل ناتج الضرب

  for (let i = 0; i < nums.length; i++) {
    // 1. حط ناتج الضرب اللي فات في المصفوفة
    lhs.push(acc);

    // 2. اضرب الرقم الحالي في الحصالة عشان اللفة اللي جاية
    acc = acc * nums[i];
  }

  console.log(lhs); // النتيجة هتكون: [1, 1, 2, 6]

  let pf = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    lhs[j] = lhs[j] * pf; // نضرب ناتج الضرب اللي فات في الحصالة اليمين

    pf = pf * nums[j]; // نضرب الرقم الحالي في الحصالة عشان اللفة اللي جاية

   
  }
    console.log(lhs); // النتيجة هتكون: [1, 1, 2, 6]
  return lhs;
};

productExceptSelf([1, 2, 3, 4]);
