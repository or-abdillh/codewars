// Jaden Casing strings
// INSTRUCTIOND :
// Your task is to convert strings to how they
// would be written by Jaden Smith. The strings are actual quotes from Jaden Smith,
// but they are not capitalized in the same way he originally typed them.

String.prototype.toJadenCase = function () {
  let str = this.toString().split(' ')
  const jadenCase = []
  str.forEach( item => {
     let tmp = item.split('')
     tmp[0] = tmp[0].toUpperCase()
     jadenCase.push(tmp.join(''))
  })
  return jadenCase.join(' ')
}

const str = "How can mirrors be real if our eyes aren't real"
console.log(str.toJadenCase())