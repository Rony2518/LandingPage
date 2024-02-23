import udaanLogo from "/Udaan-removebg-preview.png";
import "./App.css";
import Confetti from "react-confetti";
import React from "react";

function App() {
  const [state, setState] =React.useState(false)

  return (
    <div>
      <div className="section1">
      {state && <Confetti />}
        <video
          src="/abstract_-_26011 (1440p).mp4"
          autoPlay
          loop
          muted
          preload="auto"
        />
        <div className="main">
          <a href="" target="_blank">
            <img src={udaanLogo} className="logo" alt="React logo" />
          </a>
          <h1>UDAAN TECH FEST - 2024</h1>
          <button className="btn" onClick={() => setState(!state)}>
            CELEBRATE WITH US
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
