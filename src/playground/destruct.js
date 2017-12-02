// const obj = {
//   name: 'Ben',
//   age: 28,
//   location: {
//     city: 'pittsburgh',
//     temp: 0
//   }
// }
//
// const { name : firstname = 'this.name' , age} = obj;
//
// console.log(`${firstname} is ${age}`)
//
// const { city , temp: temps } = obj.location
// const [a,b,c] = [1,2,3]
//
// console.log(`It's ${temps} in ${city}`)
// console.log(`${a}, ${b}, ${c}`)

const book = {
  title: 'ego is the enemy',
  author: 'ryan holiday',
  publisher: {
    name : 'Penguin'
  }
}
const { name : pubName = 'Self-pub'}  = book.publisher

const menu = ['Coffee', '$2.00' , '$2.50', '$2.75']
const [size, , cost] = menu
console.log(`A medium ${size} is ${cost}`)
