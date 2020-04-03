import React from 'react'
import PropTypes from 'prop-types'
import './DrumPad.css'

const DrumPad = (props) =>
  <button
    type='button'
    className='drum-pad'
    id={props.desc}
    onClick={props.onClick()}
  >
    {props.children}
    {props.pad}
  </button>

DrumPad.propTypes = {
  desc: PropTypes.string,
  onClick: PropTypes.func,
  pad: PropTypes.string
}

export default DrumPad
