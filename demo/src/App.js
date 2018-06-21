import React, { Component } from 'react';
import { DefaultPlayer as Video } from './assets/player';

import './assets/player/styles.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="videoContainer">
        <Video autoPlay loop
          controls={['PlayPause', 'Seek', 'Fullscreen', 'Volume', 'Time']}
          poster="/react-html5video/8a3f5d49e7907f77fc7348aef42e422e.png"
          onCanPlayThrough={() => {
            // Do stuff
          }}>
          <source src="https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4" type="video/mp4" />
        </Video>
      </div>
    );
  }
}

export default App;
