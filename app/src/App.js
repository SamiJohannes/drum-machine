import React from 'react'
import './App.css'
import DrumPad from './components/DrumPad'
import Display from './components/Display'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { audioMounted: false }
    function importAll (r) {
      return r.keys().map(r)
    }
    this.data = [{ pad: 'q', desc: 'hat-2' },
      { pad: 'w', desc: 'hat-open-3' },
      { pad: 'e', desc: 'kick-light' },
      { pad: 'a', desc: 'kick' },
      { pad: 's', desc: 'perc-1' },
      { pad: 'd', desc: 'perc-2' },
      { pad: 'z', desc: 'sidetick' },
      { pad: 'x', desc: 'snare-2' },
      { pad: 'c', desc: 'snare-roll-short' }
    ]
    this.soundfiles = importAll(require.context('./assets', false, /\.wav$/))
    this.handleClick = this.handleClick.bind(this)
    this.audioMounted = this.audioMounted.bind(this)
  }

  audioMounted () {
    this.setState({ audioMounted: true })
  }

  handleClick (id) {
  //  const playClip = document.getElementById()
  //  console.log(playClip)
    document.getElementById(id).play()
  }

  render () {
    const keyPads = this.data
    return (
      <div id='drum-machine'>
        <Display id='display' playedClip='' />
        <DrumPad handleMounted={this.audioMounted} handleClick={this.state.audioMounted ? this.handleClick : null} innerKey={keyPads} clip={this.soundfiles} />
      </div>
    )
  }
}

export default App
