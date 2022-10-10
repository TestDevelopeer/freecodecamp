function translatePigLatin(str) {
  let vowels = [
    'a', 'e', 'i', 'o', 'u'
  ];
  str = str.split('');
  let noVowels = [];
  let indexNoVowels = -5;
  for (let i in str) {
    if (!vowels.includes(str[i])) {
      noVowels.push(str[i]);
    } else {
      indexNoVowels = i - 1;
      break;
    }
  }
  let strEnd = '';
  if (indexNoVowels == -5 || indexNoVowels >= 0) {
    if (indexNoVowels !== -5){
    str.splice(0, indexNoVowels+1);
    str.push(...noVowels);}
    strEnd = 'ay';
  } else {
    strEnd = 'way'; 
  }
  str = str.join('') + strEnd;
  console.log(str)
  console.log(indexNoVowels)
  return str;
}

translatePigLatin("rhythm");