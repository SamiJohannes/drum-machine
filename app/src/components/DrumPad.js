import React from 'react'
import PropTypes from 'prop-types'
import './DrumPad.css'

function DrumPad (props) {
  const keys = props.innerKey
  console.log(keys)
  const keyPads = keys.map((x) =>
    <button className='drum-pad' id={props.description} onclick={props.keydown} key={x.toString()}>
      {x}
      <audio id={keys[0]} className='clip' src={props.clip} />
    </button>
  )

  return <div className='drum-pads'>{keyPads}</div>
}

DrumPad.propTypes = {
  id: PropTypes.string,
  onclick: PropTypes.func,
  innerKey: PropTypes.array,
  clip: PropTypes.string
}
export default DrumPad
