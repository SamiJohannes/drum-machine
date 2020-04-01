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

/* function DrumPad (props) {
  const data = props.innerKey
  const keyPads = data.map((x, index) =>
    <button className='drum-pad' id={x.desc} onClick={() => props.onClick(x.pad)} key={x.pad.toString()}>
      {x.pad}
      <audio id={x.pad} className='clip' src={props.clip[index]} onPlay={() => props.onPlay(x.desc)} />
    </button>
  )

  return <div className='drum-pads'>{keyPads}</div>
} */

DrumPad.propTypes = {
  desc: PropTypes.string,
  onClick: PropTypes.func,
  pad: PropTypes.string
}

export default DrumPad
