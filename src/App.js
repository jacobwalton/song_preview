import "./App.css";
import {
  SpectrumVisualizer,
  SpectrumVisualizerTheme,
  WaveformVisualizer,
  WaveformVisualizerTheme,
} from "react-audio-visualizers";

import { useEffect, useState } from "react";
import noTime from "./NO_TIME.mp3";

// let noTime = "./assets/NO_TIME.mp3";
// let noTime = new Audio("/NO_TIME.mp3");

function App() {
  const answer = "m0R3T1mE4M3";
  const [response, setResponse] = useState("");
  const [codeCracked, setCodeCracked] = useState(false);
  const handleChange = (e) => {
    setResponse(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer === response) {
      setCodeCracked(true);
    }
  };
  return (
    <div className="App">
      <div className="question">
        <h3>WHAT'S THE SECRET CODE?</h3>
        <form onSubmit={handleSubmit}>
          <input type="password" name="answer" onChange={handleChange} />
          <input type="submit" id="submit" />
        </form>
        {codeCracked && (
          <div className="visualizer">
            <WaveformVisualizer
              audio={noTime}
              theme={WaveformVisualizerTheme.squaredBars}
              colors={["#900", "#933"]}
              iconsColor="#9353"
              // backgroundColor="white"
              showMainActionIcon
              showLoaderIcon
            />
            {/* <audio
              id="audio"
              src={noTime}
              autoPlay={true}
              // controls={true}
              // controlsList="nodownload noplaybackrate"
            >
              Your browser does not support the audio element.
            </audio> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
