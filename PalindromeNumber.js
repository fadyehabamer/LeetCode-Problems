var isPalindrome = function (x) {
  let stringx = x.toString();
  let result = [];
  for (let i = 0; i < stringx.length; i++) {
    result.push(stringx[i]);
  }
  result = result.reverse();
  if (result.join('') == x) {
    return true;
  } else {
    return false;
  }
};
