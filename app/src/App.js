import React from 'react'
import './App.css'
import DrumPad from './components/DrumPad'
import Display from './components/Display'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c']
  }

  render () {
    const keyPads = this.state
    return (
      <div id='drum-machine'>
        <Display id='display' playedClip='' />
        <DrumPad keydown='' description='' innerKey={keyPads} clip='' />
      </div>
    )
  }
}

export default App
