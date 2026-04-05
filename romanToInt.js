/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  let myHashtable = new Map();
  myHashtable.set("I", 1);
  myHashtable.set("V", 5);
  myHashtable.set("X", 10);
  myHashtable.set("L", 50);
  myHashtable.set("C", 100);
  myHashtable.set("D", 500);
  myHashtable.set("M", 1000);
  myHashtable.set("IV", 4);
  myHashtable.set("IX", 9);
  myHashtable.set("XL", 40);
  myHashtable.set("XC", 90);
  myHashtable.set("CD", 400);
  myHashtable.set("CM", 900);

  // console.log(myHashtable)

  let stringArr = [];
  for (let i = 0; i < s.length; i++) {
    if (myHashtable.has(s[i] + s[i + 1])) {
      stringArr.push(s[i] + s[i + 1]);
      i=i+1
    } else {
      stringArr.push(s[i]);
    }
  }

  console.log(stringArr);

  let acc = 0;
  for (let j = 0; j < stringArr.length; j++) {
       acc = acc + myHashtable.get(stringArr[j]);
    // console.log(stringArr[j] + " " + myHashtable.get(stringArr[j]));
  }
    return(acc)
};

romanToInt("MCMXCIV");
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// M = 1000, CM = 900, XC = 90 and IV = 4.
