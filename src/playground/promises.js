const promise = new Promise((res, rej) => {
  setTimeout(()=> {
    rej('something went wrong')
  },1500)
  
})

console.log('a')

promise.then((data) => {
  console.log(data)
  console.log('c')
}, (err)=>{
  console.log('ayy ',err)
})

promise.then((data) => {
  console.log(data)
  console.log('d')
}).catch((err)=>{
  console.log(err)
})

console.log('b')