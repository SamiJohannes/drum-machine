import React from 'react'
import './App.css'
import DrumPad from './components/DrumPad'
import Display from './components/Display'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = [{ pad: 'q', desc: 'hat-2' },
      { pad: 'w', desc: 'hat-open-3' },
      { pad: 'e', desc: 'kick-light' },
      { pad: 'a', desc: 'kick' },
      { pad: 's', desc: 'perc-1' },
      { pad: 'd', desc: 'perc-2' },
      { pad: 'z', desc: 'sidetick' },
      { pad: 'x', desc: 'snare-2' },
      { pad: 'c', desc: 'snare-roll-short' }]
    function importAll (r) {
      return r.keys().map(r)
    }
    this.soundfiles = importAll(require.context('./assets', false, /\.wav$/))
  }

  render () {
    const keyPads = this.state
    return (
      <div id='drum-machine'>
        <Display id='display' playedClip='' />
        <DrumPad keydown='keyPads' description='' innerKey={keyPads} clip={this.soundfiles} />
      </div>
    )
  }
}

export default App
