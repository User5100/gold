import React from 'react'
import { array, func } from 'prop-types'
import styled from 'styled-components'

const History = props => (
  <HistoryList>
    {props.urlHistory.map(url => (
      <HistoryListItem
        key={url}>
        <Anchor
          onClick={() => props.selectUrl(url)}>{url}
        </Anchor>
        <button
          onClick={() => props.removeUrl(url)}>
					X
				</button>
      </HistoryListItem>
		))}
  </HistoryList>
)

History.propTypes = {
  urlHistory: array
}

const HistoryListItem = styled.li`
  &:hover {
    background-color: grey;
    cursor: pointer;
  }
`

const Anchor = styled.a`
  &:active {
    background-color: yellow;
  }
`

const HistoryList = styled.ul`
  list-style: none;
`

export default History
