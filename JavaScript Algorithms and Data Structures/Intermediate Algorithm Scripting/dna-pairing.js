function pairElement(str) {
  let dna = {
    'A': 'AT',
    'T': 'TA',
    'C': 'CG',
    'G': 'GC',
  };
  let strArr = str.split('');
  let newDna = [];
  for (let i in strArr) {
    let dnaArr = dna[strArr[i]].split('');
    newDna.push(dnaArr);
  }
  return newDna;
}

pairElement("GCG");