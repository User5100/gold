import {
	SELECT_URL,
	ADD_URL,
	REMOVE_URL
} from '../actions'

const intitalState = {
  urls: {},
  selectedUrl: ''
}

const rootReducer = (state = intitalState, action) => {
  switch (action.type) {
    case ADD_URL:
      return Object.assign(
              {},
              { urls: Object.assign({}, action.payload, state.urls) })
    case REMOVE_URL:
      let urls = Object.assign({}, state.urls)
      delete urls[action.payload]

      let newState = Object.assign(
        {},
        { urls },
        { selectedUrl: Object.keys(urls)[0] })

      return newState

    case SELECT_URL:
      return Object.assign(
              {},
              state,
              { selectedUrl: action.payload })
    default:
      return state
  }
}

export default rootReducer
