import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import throttle from 'lodash/throttle'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()
const store = createStore(
	rootReducer,
	persistedState,
	compose(
		applyMiddleware(thunk),
		typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
	)
)

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000))

export default store
