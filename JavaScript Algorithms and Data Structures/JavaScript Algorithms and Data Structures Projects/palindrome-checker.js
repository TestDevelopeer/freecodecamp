function palindrome(str) {
  str = str.replace(/[^a-z0-9\s]/gi, '')
            .toLowerCase()
            .split(' ')
            .join('')
            .split('');
  let reverseStr = [...str].reverse();
  str = str.join('');
  reverseStr = reverseStr.join('');
  if (str === reverseStr) {
    return true;
  } else {
    return false;
  }
}

palindrome("_eye wqe");