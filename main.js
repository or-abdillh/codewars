//  FIND UNIQUE ARRAY

//INSTRUCTIONS : 
//There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

function findUniq(arr) {
  const unique = arr.filter( (x, i, a) => a.indexOf(x) == i)
   for ( let x = 0; x < unique.length; x++ ) {
      if ( arr.filter( item => item == unique[x]).length == 1 ) return (unique[x])
   }
}

const example = [3, 10, 3, 3, 3,3]
console.log( findUniq(example) )