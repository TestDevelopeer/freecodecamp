// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add([...books], bookName) {
  books.push(bookName);
  return books;
  
  // Change code above this line
}

// Change code below this line
function remove([...books], bookName) {
  const book_index = books.indexOf(bookName);
  if (book_index >= 0) {
    books.splice(book_index, 1);
    return books;
    // Change code above this line
    }
}