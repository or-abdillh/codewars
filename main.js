//  Get the midddle character
// INSTRUCTION :
// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

function getMiddle(text) {
  text = text.split('')
  let size = text.length
  if ( size % 2 == 0 ) {
     size = size / 2
     return `${text[size - 1]}${text[size]}`
  } else {
     size--
     size = size / 2
     return text[size]
  }
}

const str = "teste"
console.log(getMiddle(str))