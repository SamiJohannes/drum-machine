import React from 'react'
import PropTypes from 'prop-types'
import './DrumPad.css'

function DrumPad (props) {
  const data = props.innerKey
  const keyPads = data.map((x, index) =>
    <button className='drum-pad' id={x.desc} onClick={() => props.onClick(x.pad)} key={x.pad.toString()}>
      {x.pad}
      <audio id={x.pad} className='clip' src={props.clip[index]} onPlay={() => props.onPlay(x.desc)} />
    </button>
  )

  return <div className='drum-pads'>{keyPads}</div>
}

DrumPad.propTypes = {
  id: PropTypes.string,
  onPlay: PropTypes.func,
  innerKey: PropTypes.array,
  clip: PropTypes.array,
  onClick: PropTypes.func
}
export default DrumPad
