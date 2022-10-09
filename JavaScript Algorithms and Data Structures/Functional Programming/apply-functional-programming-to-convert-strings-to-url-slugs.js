// Only change code below this line
function urlSlug(title) {
  return title.trim().toLowerCase().split(/[\W_]+/g).join("-");

}
// Only change code above this line
console.log(urlSlug(" Winter Is  Coming"))