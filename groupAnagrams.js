// /var groupAnagrams = function (strs) {
// Sort each string in strs and store the sorted values in a new array
//   let sortedStrs = strs.map((str) => str.split('').sort().join(''));

//   // Create a map where the keys are the sorted strings and the values are arrays of the original strings
//   let map = {};
//   for (let i = 0; i < strs.length; i++) {
//     let sortedStr = sortedStrs[i];
//     if (map[sortedStr]) {
//       map[sortedStr].push(strs[i]);
//     } else {
//       map[sortedStr] = [strs[i]];
//     }
//   }
//   let result = [];
//   for (let key in map) {
//     result.push(map[key]);
//   }

//   return result;
// };

// var groupAnagrams = function(strs) {
//     let map = new Map();
//    for (let i = 0; i < strs.length; i++) {
//        let sorted = strs[i].split('').sort().join('');
//        if (map.has(sorted)) {
//        map.get(sorted).push(strs[i]);
//        } else {
//        map.set(sorted, [strs[i]]);
//        }
//    }
//    return [...map.values()];
// };

var groupAnagrams = function (strs) {
  let sortedStrs = [];
  for (let str = 0; str < strs.length; str++) {
    sortedStrs.push(strs[str].split("").sort().join(""));
  }
  console.log("sortedStrs is");
  console.log(sortedStrs);

  console.log("===================================");

  let strMap = new Map();
  for (let x = 0; x < sortedStrs.length; x++) {
    if (!strMap.has(sortedStrs[x])) {
      strMap.set(sortedStrs[x], [strs[x]]);
    } else {
      strMap.get(sortedStrs[x]).push(strs[x]);
    }
  }
  console.log("Map is ");
  console.log(strMap);
  return [...strMap.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
