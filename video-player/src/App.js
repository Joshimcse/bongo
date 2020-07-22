import React, { useState, useRef, useEffect } from "react";
import { MdForward10, MdReplay10, MdPlayArrow, MdPause } from "react-icons/md";

import "./App.css";
import video from "./sample.mp4";

function App() {
  const [isPlay, setIsPlay] = useState(false);
  const [playbackRate, setplaybackRate] = useState(1);

  const videoRef = useRef();

  const togglePlay = () => {
    isPlay ? videoRef.current.pause() : videoRef.current.play();
    setIsPlay(!isPlay);
  };

  const forward = () => {
    if (videoRef.current.duration - videoRef.current.currentTime < 10) {
      videoRef.current.currentTime = videoRef.current.duration;
    } else videoRef.current.currentTime += 10;
  };

  const rewind = () => {
    if (videoRef.current.currentTime < 10) videoRef.current.currentTime = 0;
    else videoRef.current.currentTime -= 10;
  };

  const endedHandler = () => {
    setIsPlay(false);
    setplaybackRate(1);
  };

  useEffect(() => {
    videoRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  return (
    <div className="App">
      <div className="title">Bongo's Video Player</div>

      <div className="v-player-container">
        <video
          className="v-player"
          ref={videoRef}
          onClick={togglePlay}
          onEnded={endedHandler}
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="v-control">
          <div className="v-control-left">
            <button className="rewind" onClick={rewind}>
              <MdReplay10 />
            </button>
            <button className="play-pause" onClick={togglePlay}>
              {isPlay ? <MdPause /> : <MdPlayArrow />}
            </button>
            <button className="forward" onClick={forward}>
              <MdForward10 />
            </button>
          </div>

          <div className="v-control-right">
            Playback Speed:
            <input
              name="playbackRate"
              type="number"
              step="0.25"
              min="0.25"
              max="3.0"
              value={playbackRate.toFixed(2)}
              onKeyPress={(e) => {
                e.preventDefault();
              }}
              onChange={(e) => setplaybackRate(parseFloat(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
