import * as firebase from 'firebase'

import fixtures from '../tests/fixtures/expenses'

const config = {
  apiKey: "AIzaSyAoVR5Y_O4AROiCMNK9DRZnAH1dO2-rfe4",
  authDomain: "xpenses-app-743ac.firebaseapp.com",
  databaseURL: "https://xpenses-app-743ac.firebaseio.com",
  projectId: "xpenses-app-743ac",
  storageBucket: "xpenses-app-743ac.appspot.com",
  messagingSenderId: "699810314283"
}

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }





// database.ref('expenses').on('child_removed', snapshot => {
//   console.log('removed:',snapshot.key, snapshot.val())
// })
// database.ref('expenses').on('child_added', snapshot => {
//   console.log('added:',snapshot.key, snapshot.val())
// })
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log('changed:',snapshot.key, snapshot.val())
// })
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []

//   snapshot.forEach(element => { expenses.push({
//       ...element.val(),
//       id: element.key
//     })
//   })

//   console.log(expenses)
// })


// database.ref('notes').push({
//   title: 'topics',
//   body: 'take better notes'
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const person = snapshot.val()
//   console.log(`${person.name} is a ${person.job.title} at ${person.job.company}`)
// }, (e)=>{
//   console.log('Error :', e)
// })


// database.ref().once('value').then((snapshot)=> {
//   const val = snapshot.val()
//   console.log(val)
// }).catch((e)=>{
//   console.log('Error fetching data:', e)
// })


// database.ref().set({
//   name: 'Benjamin Geyer',
//   age: 28,
//   isSingle: true,
//   stressLevel: 6,
//   job: {
//     title: 'Softdev',
//     company: 'Google'
//   },
//   location: {
//     city: 'Pittsburgh',
//     country: 'USA'
//   }
// }).then(() => {
//   console.log('Data is saved')
// }).catch((e) => {
//   console.log('This failed ', e)
// })
// setTimeout(()=>{
//   database.ref().update({'job/company':'PIND','location/city':'west coast'})
// }, 3000)
// setTimeout(()=>{
//   database.ref().update({'job/company':'Google ','job/title':'software tester'})
//   database.ref().off('value', onValueChange)
// }, 7000)
// setTimeout(()=>{
//   database.ref().update({'job/company':'PIND','location/city':'west coast'})
// }, 10000)
// let x = database.ref('attributes').set({height:123,weight:100})

// x.then(() => {
//   console.log('Data is saved')
// }).catch((e) => {
//   console.log('This failed :', e)
// database.ref('isSingle').remove()
//   .then(() => {
//     console.log("Remove succeeded.")
//   })
//   .catch((error) => {
//     console.log("Remove failed: " + error.message)
//   });// })

// database.ref().set(null)
