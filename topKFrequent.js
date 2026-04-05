var topKFrequent = function (nums, k) {
  let myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!myMap.has(nums[i])) {
      myMap.set(nums[i], 1);
    } else {
      myMap.set(nums[i], myMap.get(nums[i]) + 1);
    }
  }
  //   let descArrayValues = [];
  //   for (let value of myMap.values()) {
  //     descArrayValues.push(value);
  //   }
  //   descArrayValues.sort((a, b) => b - a)
  //   console.log(descArrayValues)

  //   for(let x = 0 ; x<descArrayValues.length;x++){
  //     myMap.get()
  //   }

  let mapArray = Array.from(myMap);
  console.log(mapArray);
  mapArray.sort((a, b) => b[1] - a[1]);
  console.log(mapArray);
  let sortedMap = new Map(mapArray);
  console.log(sortedMap);

  let res = [];
  for (let key of sortedMap) {
    console.log(key);
    res.push(key[0]);
  }


  console.log("res is " + res.slice(0,2));

  return res.slice(0,k)
};

topKFrequent([1, 2, 2, 3, 3, 3], 2);
