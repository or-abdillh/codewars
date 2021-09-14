//  Counting duplicates
// INSTRUCTION :
// Write a function that will return the count of distinct case-insensitive 
// alphabetic characters and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits

function duplicateCount(text){
  const uniques = text.toLowerCase().split('').filter( (x, i, a) => a.indexOf(x) === i) 
  let count = 0
  uniques.forEach( unique => {
     if ( text.toLowerCase().split('').filter( item => item === unique ).length > 1) count++
  })
  return count
}

const str = "aabBcde"
console.log(duplicateCount(str))
//console.log(str.indexOf('a'))