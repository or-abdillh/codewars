// EXES AND OHS
// INSTRUCTIONS :
// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.

//INPUT OUTPUT
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
   str = str.toLowerCase().split('')
   const x = str.filter(item => item === 'x')
   const o = str.filter(item => item === 'o')
   
   if ( x.length === o.length ) return true
   else if ( x.length < 1 && o.length < 1 ) return true
   else return false
}

const example = 'Ooom'
console.log(XO(example))