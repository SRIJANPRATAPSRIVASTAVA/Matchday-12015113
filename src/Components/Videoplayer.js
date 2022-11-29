import React from "react";
import '../App.css'

const Videoplayer = () => {
  return (
    <div className="videoplayer">
      <header id="analytics"><h1>Video Analytics</h1></header>
      <div className="video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/YH0UKYWvpyQ?controls=0?rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
    );
};

export default Videoplayer;
