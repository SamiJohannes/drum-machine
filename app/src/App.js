import React from 'react'
import './App.css'
import DrumPad from './components/DrumPad'
import Display from './components/Display'
import AudioTag from './components/AudioTag'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state =
    {
      audioPlaying: 'Drum-Machine'
    }
    function importAll (r) {
      return r.keys().map(r)
    }
    this.data = [{ pad: 'Q', desc: 'hat-2' },
      { pad: 'W', desc: 'hat-open-3' },
      { pad: 'E', desc: 'kick-light' },
      { pad: 'A', desc: 'kick' },
      { pad: 'S', desc: 'perc-1' },
      { pad: 'D', desc: 'perc-2' },
      { pad: 'Z', desc: 'sidetick' },
      { pad: 'X', desc: 'snare-2' },
      { pad: 'C', desc: 'snare-roll-short' }
    ]
    this.soundfiles = importAll(require.context('./assets', false, /\.wav$/))
    this.handleClick = this.handleClick.bind(this)
  }

  playClip (desc, target) {
    const clip = document.getElementById(target)
    clip.currentTime = 0
    this.setState({ audioPlaying: desc })
    clip.play()
  }

  handleClick (e) {
    this.playClip(e.target.id, e.target.children[0].id)
  }

  render () {
    const keyPads = this.data
    const pads = keyPads.map((x, index) =>
      <DrumPad
        desc={x.desc}
        pad={x.pad}
        key={x.pad.toString()}
        onClick={() => this.handleClick}
      >
        <AudioTag pad={x.pad} clip={this.soundfiles[index]} />
      </DrumPad>
    )
    return (
      <div
        id='drum-machine'
        tabIndex='-1'
        onKeyDown={e => document.getElementById(e.key)
          ? this.playClip(document.getElementById(e.key).parentElement.id, e.key)
          : document.getElementById(e.key.toUpperCase())
            ? this.playClip(document.getElementById(e.key.toUpperCase()).parentElement.id, e.key.toUpperCase())
            : null}
      >
        <Display id='display' playedClip={this.state.audioPlaying} />
        {pads}
      </div>
    )
  }
}

export default App
