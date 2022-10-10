function myReplace(str, before, after) {
  let strArr = str.split(' ');
  for (let i in strArr){
    if (strArr[i].toLowerCase() == before.toLowerCase()){
      if (strArr[i][0] === strArr[i][0].toLowerCase()) {
        strArr[i] = after.toLowerCase();
      } else {
        let afterArr = after.split('');
        afterArr[0] = after[0].toUpperCase();
        strArr[i] = afterArr.join('');
      }
    }
  }
  return strArr.join(' ');
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");