// Equal sides of an array 
// INSTRUCTIONS :
// You are going to be given an array of integers. Your job is to take that array and find an index N 
// where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
// If there is no index that would make this happen, return -1.

function findEvenIndex(numbers){
   const size = numbers.length
   let left
   let right
   for ( let x = 0; x < size; x++ ) {
      let tmp = numbers[x]
      if ( x == 0 ) {
         left = numbers.slice(x + 1).reduce( (a, b) => a + b)
         if ( tmp === left ) return x
      } else {
         left = numbers.slice(0, x).reduce( (a, b) => a + b)
         if ( x < size - 1 ) right = numbers.slice(x + 1).reduce( (a, b) => a + b)
         if ( left == right ) return x
      }   
   }
   return -1
}

const example = [20,10,30,10,10,15,35]
console.log(findEvenIndex(example))
//console.log(example.slice(1))