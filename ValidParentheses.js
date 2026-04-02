/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let symbols = ["[", "]", "(", ")", "{", "}"];
  let arr = [];
  const bracketsMap = new Map();
  bracketsMap.set("(", ")");
  bracketsMap.set("{", "}");
  bracketsMap.set("[", "]");

  if (s.length % 2 !== 0) return false;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (symbols.includes(char)) {
      if (bracketsMap.has(char)) {
        arr.push(char);
      } else {
        let lastElement = arr.pop();
        if (char !== bracketsMap.get(lastElement)) {
          return false; 
        }
      }
    } else {
      return false;
    }
  }

  return arr.length === 0;
};
// --------------------
isValid(")(){}");
isValid("()")
