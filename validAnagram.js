// var isAnagram = function (s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }
//   var sArray = s.split('');
//   var tArray = t.split('');
//   var sMap = {};
//   var tMap = {};
//   for (var i = 0; i < sArray.length; i++) {
//     if (sMap[sArray[i]]) {
//       sMap[sArray[i]]++;
//     } else {
//       sMap[sArray[i]] = 1;
//     }
//     if (tMap[tArray[i]]) {
//       tMap[tArray[i]]++;
//     } else {
//       tMap[tArray[i]] = 1;
//     }
//   }
//   console.log(sMap);
//   console.log(tMap);
//   for (var key in sMap) {
//     if (sMap[key] !== tMap[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isAnagram('rat', 'car'));

////

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  var sMap = new Map();

  // fady 
  for (var i = 0; i < s.length; i++) {
    // 1- f 2- a 3- d 4- y
    let char = s[i];
    if ( ! sMap.has(char)) {
      // f : 1
      sMap.set(char, 1);
    }else {
      sMap.set(char, sMap.get(char) + 1);
    }
  }


  for (var i = 0; i < t.length; i++) {
    let char = t[i];
    if ( ! sMap.has(char)) {
      return false;
    }else {
      sMap.set(char, sMap.get(char) - 1);
    }
  }

  for (let value of sMap.values()) {
    if (value !== 0) {
      return false;
    }
  }
  return true;




};

console.log(isAnagram("rfffat", "rfffat"));
