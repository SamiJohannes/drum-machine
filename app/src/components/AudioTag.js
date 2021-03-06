import React from 'react'
import PropTypes from 'prop-types'

const AudioTag = (props) => <audio src={props.clip} id={props.pad} className='clip' />

AudioTag.propTypes = {
  clip: PropTypes.string,
  pad: PropTypes.string
}
export default AudioTag
