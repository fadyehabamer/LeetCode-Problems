var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  var sArray = s.split('');
  var tArray = t.split('');
  var sMap = {};
  var tMap = {};
  for (var i = 0; i < sArray.length; i++) {
    if (sMap[sArray[i]]) {
      sMap[sArray[i]]++;
    } else {
      sMap[sArray[i]] = 1;
    }
    if (tMap[tArray[i]]) {
      tMap[tArray[i]]++;
    } else {
      tMap[tArray[i]] = 1;
    }
  }
  console.log(sMap);
  console.log(tMap);
  for (var key in sMap) {
    if (sMap[key] !== tMap[key]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram('rat', 'car'));
