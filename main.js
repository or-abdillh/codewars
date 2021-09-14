//  Find the parity outlier
// IMnstructions :
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers){
  const even = integers.filter( item => item % 2 == 0 || item % 0 == 0)
  const odd = integers.filter( item => item % 2 == 1)
  if ( even.length < odd.length ) return parseInt(even + '')
  else return parseInt(odd + '')
}

const example = [0,1,2]
console.log(findOutlier(example))