import React from 'react'
import { string, array } from 'prop-types'

const Feed = props => (
  <article>
    <h1>{props.title}</h1>
    <time
      dateTime={props.pubDate[0]}>{props.pubDate[0]}
    </time>
    <section>
      <p>{props.description[0]}</p>
    </section>
  </article>
)

Feed.propTypes = {
	title: array,
	pubDate: array,
	description: array
}

export default Feed
