import React from 'react'
import './App.css'
import DrumPad from './components/DrumPad'
import Display from './components/Display'

class App extends React.Component {
/*  constructor (props) {
    super (props)
    this.state = {display: }
  } */
  render () {
    return (
      <div id='drum-machine'>
        <Display id='display' playedClip='' />
        <div className='drumpads'>
          <DrumPad keydown='' description='' innerKey='' clip='' />
        </div>
      </div>
    )
  }
}

export default App
