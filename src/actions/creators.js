import axios from 'axios'
import { parseString } from 'xml2js'
import {
	ADD_URL,
	REMOVE_URL,
	SELECT_URL
} from './index'

export function createAddUrlAction (urlData) {
  return {
    type: ADD_URL,
    payload: urlData
  }
}
export function createRemoveUrlAction (url) {
  return {
    type: REMOVE_URL,
    payload: url
  }
}
export function createSelectUrlAction (url) {
  return {
    type: SELECT_URL,
    payload: url
  }
}

export function createGetApiDataAction (urlObject) {
  var urlKey = Object
								.keys(urlObject)
								.reduce((acc, curr) => curr, '')

  return dispatch => {
    axios
			.get(urlObject[urlKey])
			.then(response => {
  parseString(response.data, function (err, data) {
    var urlData = data.rss.channel[0]

    if (err) {
      console.error('Error parsing data', error)
    }

    dispatch(createAddUrlAction({ [urlKey]: urlData }))
    dispatch(createSelectUrlAction(urlKey))
  })
})
			.catch(err => {
  console.error('request error', err)
})
  }
}
