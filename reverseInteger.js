var reverse = function (x) {
  let stringx = x.toString();
  let result = [];
  for (let i = stringx.length - 1; i >= 0; i--) {
    if (x >= 0) {
      result.push(Number(stringx[i]));
    } else {
      result[0] = '-';
      result.push(stringx[i]);
      result.splice(stringx.length);
    }
  }
  if (result.join('') >= -2147483648 && result.join('') <= 2147483647) {
    return result.join('');
  } else {
    return 0;
  }
};
