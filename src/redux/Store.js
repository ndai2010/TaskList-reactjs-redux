import { createStore } from 'redux'
import { reducer } from './reducers/Reducer'

export let store = createStore(reducer)