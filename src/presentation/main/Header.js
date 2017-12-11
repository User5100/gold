import React from 'react'
import { string } from 'prop-types'

const Header = props => (
  <h1>{props.title}</h1>
)

Header.propTypes = {
  title: string
}

export default Header
