import React from 'react'
import PropTypes from 'prop-types'
import './DrumPad.css'

const DrumPad = (props) =>
  <div className='drum-pad' id={this.props.description} onclick={this.props.keydown}>
    {this.props.innerKey}
    <audio id={this.props.innerKey} className='clip' src={this.props.clip} />
  </div>

DrumPad.propTypes = {
  id: PropTypes.string,
  onclick: PropTypes.func,
  innerKey: PropTypes.string,
  clip: PropTypes.string
}
export default DrumPad
