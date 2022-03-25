import "./App.css";
import {
  WaveformVisualizer,
  WaveformVisualizerTheme,
} from "react-audio-visualizers";

import { useState } from "react";
import noTime from "./NO_TIME.mp3";

function App() {
  const answer = "m0R3T1mE4M3";
  const [response, setResponse] = useState("");
  const [codeCracked, setCodeCracked] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const handleChange = (e) => {
    setResponse(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer === response) {
      setCodeCracked(true);
    } else {
      setErrorMsg("TRY AGAIN");
    }
  };

  const mainActionRender = ({ play, _ }) => ({
    id: "mainActionContainer",
    node: <button onClick={play}>Play</button>,
  });
  return (
    <div className="App">
      <div className="question">
        <h3 id="question">
          WHAT'S THE <br />
          SECRET CODE?
        </h3>
        <form onSubmit={handleSubmit}>
          <input type="password" name="answer" onChange={handleChange} />
          {errorMsg && <p className="error">{errorMsg}</p>}
          <input type="submit" id="submit" value="SUBMIT" />
        </form>
        {codeCracked && (
          <div className="visualizer">
            <WaveformVisualizer
              className="visualizer"
              audio={noTime}
              theme={WaveformVisualizerTheme.line}
              colors={["#933"]}
              iconsColor="#933"
              showMainActionIcon
              showLoaderIcon
              mainActionRender={mainActionRender}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
