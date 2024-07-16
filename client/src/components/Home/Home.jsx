import React from "react";
import "./Home.css";
import mainVideo from "../../assets/Video.mov";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="typed-out">Plan Next Event</div>
          <a>With Us</a>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          src={mainVideo}
          className="playback-video"
        ></video>
      </div>
    </>
  );
};

export default Home;
