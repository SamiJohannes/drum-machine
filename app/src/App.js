import React from 'react'
import './App.css'
import DrumPad from './components/DrumPad'
import Display from './components/Display'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state =
    {
      audioPlaying: ''
    }
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
    this.handlePlay = this.handlePlay.bind(this)
  }

  handleClick (e) {
    const clip = document.getElementById(e)
    clip.currentTime = 0
    clip.currentTime === 0 ? clip.play() : clip.currentTime = 0
  }

  handlePlay (event) {
    const audioClip = event
    this.setState({ audioPlaying: audioClip })
  }

  render () {
    const keyPads = this.data
    return (
      <div id='drum-machine'>
        <Display id='display' playedClip={this.state.audioPlaying} />
        <DrumPad onPlay={this.handlePlay} innerKey={keyPads} clip={this.soundfiles} onClick={this.handleClick} />
      </div>
    )
  }
}

export default App
