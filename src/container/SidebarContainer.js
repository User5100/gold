import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import styled from 'styled-components'
import Sidebar from '../presentation'
import {
	createGetApiDataAction,
	createRemoveUrlAction,
	createSelectUrlAction
} from '../actions/creators'

class SidebarContainer extends Component {
	constructor() {
		super()
	}

	state = {
		searchValue: ''
	}

	urls = {
		"url 1": "http://www.feedforall.com/sample.xml",
		"url 2": "http://www.feedforall.com/sample-feed.xml",
		"url 3": "http://www.feedforall.com/blog-feed.xml",
		"url 4": "http://www.rss-specifications.com/blog-feed.xml"
	}

	getHistoryFromUrlsObj(urlsObject) {
		if(urlsObject) {
			return Object.keys(urlsObject)
		} else {
			return []
		}
		
	}

	get urlHistory() {
		var { urls: urlObject } = this.props,
					urlHistory = this.getHistoryFromUrlsObj(urlObject)

    if(urlHistory) {
      return urlHistory
    } else {
      return {
        urlHistory: []
      }
    } 
  }

	resetSearchValue = () => {
		this.setState({ searchValue: '' })
	}

	handleUrlRequest(urlObject, urlKey) {
		if(urlObject[urlKey]) {
			this.props.getUrlData(urlObject)
		} else {
			console.log('Handle invalid input')
		}
	}

	handleSubmit = event => {
		event.preventDefault()
		var { searchValue: urlKey } = this.state,
					urlObject = Object.assign(
						{}, 
						{ [urlKey]: this.urls[urlKey.toLowerCase()]}
					)
		
		this.handleUrlRequest(urlObject, urlKey)
		this.resetSearchValue()
	}

	handleChange = event => {
		var { value: searchValue } = event.target
		this.setState({ searchValue })
	}

	render() {
		return (
			<Aside>
				<Sidebar.Search
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					searchValue={this.state.searchValue} />
				<Sidebar.History
					removeUrl={this.props.removeUrl}
					selectUrl={this.props.selectUrl}
					urlHistory={this.urlHistory} 
				/>
			</Aside> 
		)
	}
}

const Aside = styled.aside`
	grid-area: sidebar;
	background-color: lightblue;
`

const mapState = state => state

const mapDispatch = dispatch => ({
	getUrlData: urlObject => dispatch(createGetApiDataAction(urlObject)),
	removeUrl: url => dispatch(createRemoveUrlAction(url)),
	selectUrl: url => dispatch(createSelectUrlAction(url))
})

export default withRouter(connect(mapState, mapDispatch)(SidebarContainer))