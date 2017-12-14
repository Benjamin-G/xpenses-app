const promise = new Promise((res, rej) => {
  setTimeout(()=> {
    //rej('something went wrong')
    res('Resolved')
  },1500)
  
})

console.log('before')

promise.then((data) => {
  console.log('1',data)

  return new Promise((res, rej) => {
    setTimeout(()=> { res('Resolved from another promise')
  },5000)})
}).then((data) => {
  console.log('here is the thing ',data)
}).catch((err)=>{
  console.log('error: ',err)
})

console.log('after')