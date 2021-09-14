function alphabetPosition(text) {
  const position = "abcdefghijklmnopqrstuvwxyz"
  const postArr = []
  text.toLowerCase().split('').forEach( item => {
     if ( position.indexOf(item) >= 0 ) postArr.push(position.indexOf(item) + 1)
  })
  return postArr.join(' ')
}

const example = "The sunset sets at twelve o' clock"
console.log( alphabetPosition(example))