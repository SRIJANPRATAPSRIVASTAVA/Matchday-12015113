import { React, useState } from "react";
import "../App.css";
import YouTube from "react-youtube";
let event;
const Videoplayer = () => {
  const [frwd, setfrwd] = useState(false);
  const [bakwrd, setbakwrd] = useState(false);

  function onYouTubePlayerAPIReady(e) {
    event = e;
    console.log(e.target);
    play(e);
    e.target.playVideo();
  }
  function play(e) {
    console.log(e.target);
    e.target.playVideo();
  }
  function pause(e) {
    e.target.pauseVideo();
  }
  function forward(e) {
    console.log(e.target.getCurrentTime());
    setfrwd(true);
    if (frwd) {
      e.target.seekTo(e.target.getCurrentTime() + 5);
      setfrwd(false);
    }
  }
  function backwards(e) {
    console.log(e.target.getCurrentTime());
    setfrwd(true);
    if (bakwrd && e.target.getCurrentTime() > 0) {
      e.target.seekTo(e.target.getCurrentTime() - 5);
      setbakwrd(false);
    }
  }
  const opts = {
    width: "560",
    height: "315",
    playVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="videoplayer">
      <header id="analytics">
        <h1>Video Analytics</h1>
      </header>
      <div className="video" id="player">
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YH0UKYWvpyQ?controls=0?rel=0enablejsapi=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}

        <YouTube
          videoId="YH0UKYWvpyQ"
          opts={opts}
          onClick={(e) => console.log(e)}
          onReady={onYouTubePlayerAPIReady}
          onPlay={forward}
        ></YouTube>

        <div className="controls">
          <button className="control" id="play" onClick={(e) => play(event)}>
            <i className="fa-solid fa-play"></i>
          </button>
          <button className="control" id="pause" onClick={(e) => pause(event)}>
            <i className="fa-solid fa-pause"></i>
          </button>
          <button
            className="control"
            id="forward"
            onClick={(e) => forward(event)}
          >
            <i className="fa-solid fa-forward"></i>
          </button>
          <button
            className="control"
            id="backward"
            onClick={(e) => backwards(event)}
          >
            <i className="fa-solid fa-backward"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Videoplayer;
