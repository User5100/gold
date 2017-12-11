import React from 'react'
import { func, string } from 'prop-types'

const Search = props => (
  <form
    onSubmit={props.handleSubmit}>
    <input
      type='text'
      value={props.searchValue}
      onChange={props.handleChange} />
    <input
      type='submit' />
  </form>
)

Search.propTypes = {
  handleSubmit: func,
  handleChange: func,
  searchValue: string
}

export default Search
