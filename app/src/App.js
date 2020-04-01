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
  }

  playClip (desc, target) {
    const clip = document.getElementById(target)
    clip.currentTime = 0
    this.setState({ audioPlaying: desc })
    clip.play()
  }

  handleClick (e) {
    console.log(e.type, e.target.id, e.target.children[0].id)
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
        onKeyPress={e => document.getElementById(e.key)
          ? this.playClip(document.getElementById(e.key).parentElement.id, e.key)
          : null}
      >
        <Display id='display' playedClip={this.state.audioPlaying} />
        {pads}
      </div>
    )
  }
}

export default App
