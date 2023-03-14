const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolving an asynchronous request!'), 2000)
  })
  
  // Chain a promise
promise
.then((firstResponse) => {
  // Return a new value for the next then
  return firstResponse + ' And chaining!'
})
.then((secondResponse) => {
  return secondResponse + ' And Other Chaining '
})
.then((thirdResponse) => {
  console.log(thirdResponse)
})

