import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import styled from 'styled-components'
import SidebarContainer from './container/SidebarContainer'
import MainContainer from './container/MainContainer'

export default class App extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <BrowserRouter>
        <Provider
          store={store} >
          <AppContainer>
            <SidebarContainer />
            <MainContainer />
          </AppContainer>
        </Provider>
      </BrowserRouter>
    )
  }
}

const AppContainer = styled.div`
	display: grid;
	height: 100vh;
	grid-gap: 0;
	grid-template: [app-top] "sidebar main" [app-bottom]
									/200px 3fr;
`
