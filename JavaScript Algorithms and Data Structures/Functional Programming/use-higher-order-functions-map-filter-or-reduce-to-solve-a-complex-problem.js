const squareList = arr => {
  // Only change code below this line
  arr = arr.filter((item => {
    if (item > 0 && (item ^ 0) === item) {
      return item;
    }
  }));
  arr = arr.map(item => Math.pow(item, 2));
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);