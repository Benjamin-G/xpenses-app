import { createStore } from 'redux'

const incCount = ({ by = 1 } = {}) => ({ type: 'INCREMENT', by })
const decCount = ({ by = 1 } = {}) => ({ type: 'DECREMENT', by })
const set = ({ by = 0 } = {}) => ({ type: 'SET' , by })

const countReducer =  (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count : state.count + action.by}
    case 'DECREMENT':
      return {count : state.count - action.by}
    case 'SET':
      return {count : action.by}
    default:
      return state
  }
}

const store = createStore(countReducer)

const unsub = store.subscribe(() => console.log(store.getState()))

store.dispatch(incCount({by : 25}))
store.dispatch(decCount())
store.dispatch(incCount())
store.dispatch(decCount({ by: 10 }))
store.dispatch(set({ by : 440 }))
store.dispatch(set())
