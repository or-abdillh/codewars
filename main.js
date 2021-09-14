// ARRAY DIFF
// Your goal in this kata is to implement a difference function, 
// which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
function arrayDiff(a, b) {
  if ( a.length < 1 || b.length < 1 ) return a 
  else {
     let tmp = []
     a.forEach( (arr, i) => {
        if ( b.indexOf(arr) < 0 ) tmp.push(arr)
     })
     return tmp
  }
}

console.log( arrayDiff([1,2,3], [1,2]) )