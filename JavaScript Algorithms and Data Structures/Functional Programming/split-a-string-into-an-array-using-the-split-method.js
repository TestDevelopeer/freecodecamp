function splitify(str) {
  // Only change code below this line
  return str.split(/[\W_]+/g);

  // Only change code above this line
}

console.log(splitify("Hello World,I-am code"))