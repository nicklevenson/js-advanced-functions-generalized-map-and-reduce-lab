// Add your functions here

function map(src, fn) {
  let newA = []
  src.forEach(e => {
    newA.push(fn(e))
  })
  return newA
}

function reduce(src, fn, start) {
   
  if (start != null) {
    return fn(src, start)
  }else {
    return fn(src)
  }
}