import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Header from '../presentation/main/Header'
import Content from '../presentation/main/Content'
import { string, object } from 'prop-types'

class MainContainer extends Component {
  constructor () {
    super()
  }

  get dataForSelectedUrl () {
    var { selectedUrl, urls } = this.props

    if (selectedUrl) {
      return urls[selectedUrl]
    } else {
      return {
        title: [''],
        item: []
      }
    }
  }

  render () {
    return (
      <Main>
        <Header
          title={this.dataForSelectedUrl.title[0]}
        />
        <Content
          feeds={this.dataForSelectedUrl.item}
        />
      </Main>
    )
  }
}

const Main = styled.main`
	grid-area: main;
	background-color: grey;
`

const mapState = state => state

MainContainer.propTypes = {
  urls: object,
  selectedUrl: string
}

export default connect(mapState)(MainContainer)
