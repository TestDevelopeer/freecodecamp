
function steamrollArray(arrArg) {
  let newArr = [];
  let recurseSteamroll = (arr) => {
    for (let i in arr) {
    if (Array.isArray(arr[i])) {
      recurseSteamroll(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
    }
  }
  recurseSteamroll(arrArg);
  return newArr;
}

console.log(steamrollArray([1, {}, [3, [[4]]]]))
