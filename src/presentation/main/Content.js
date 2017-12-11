import React from 'react'
import Feed from './Feed'
import { array } from 'prop-types'

const Content = props => (
  <section>
    {props.feeds.map((feed, i) => (
      <Feed
        key={Object.keys(props.feeds)[i]}
        {...feed}
			/>
		))}
  </section>
)

Content.propTypes = {
  feeds: array
}

export default Content
