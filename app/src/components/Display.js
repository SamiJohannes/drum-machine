import React from 'react'
import PropTypes from 'prop-types'
import './Display.css'

const Display = (props) =>
  <div className='display'>
    {props.playedClip}
  </div>

Display.propTypes = {
  playedClip: PropTypes.string
}
export default Display
