
import './App.css';
import React, { useState, useRef } from 'react';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [baseFlavor, setBaseFlavor] = useState(-1);
  const [additionalFlavor, setAdditionalFlavor] = useState(-1);
  const [loadingIndicator, setLoadingIndicator] = useState("");
  const loadingCount = useRef(0);


  function think() {
    setBaseFlavor(0);
    setAdditionalFlavor(0);
    if (loadingCount.current === 4) {
      loadingCount.current = 0;
      setLoadingIndicator("");
      chance();
    } else {
      loadingCount.current++;
      setLoadingIndicator(".".repeat(loadingCount.current))
      setTimeout(() => think(), 1000);
    }
  }
  function chance() {
    setBaseFlavor(getRandomInt(5) + 1);
    setAdditionalFlavor(getRandomInt(7) + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1><img src="/moon.png" className="App-logo" alt="logo" />Moonshake</h1>
      </header>
      {(loadingIndicator !== "") && <div>{loadingIndicator}</div>}
      {(baseFlavor === 1) && <div><b>Base:</b> Strawberry <br /><img src="/strawberry.jpg" className="selection"/ ></div> }
      {(baseFlavor === 2) && <div><b>Base:</b> Chocolate <br /><img src="/chocolate.jpg" className="selection"/ ></div> }
      {(baseFlavor === 3) && <div><b>Base:</b> Vanilla <br /><img src="/vanilla-home.jpg" className="selection"/ ></div> }
      {(baseFlavor === 4) && <div><b>Base:</b> Player's Choice</div> }
      {(baseFlavor === 5) && <div><b>Base:</b> House's Choice</div> }
      <br/>
      {(additionalFlavor === 1) && <div><b>Add:</b> Balsamic Vinegar  <br /><img src="/vinegar-home.jpg" className="selection"/ ></div> }
      {(additionalFlavor === 2) && <div><b>Add:</b> Tuna <br /><img src="/tuna-home1.jpg" className="selection"/ ></div> }
      {(additionalFlavor === 3) && <div><b>Add:</b> Boiled Egg <br /><img src="/egg.jpg" className="selection"/ ></div> }
      {(additionalFlavor === 4) && <div><b>Add:</b> Cheese <br /><img src="/cheese.jpg" className="selection"/ ></div> }
      {(additionalFlavor === 5) && <div><b>Add:</b> Ketchup <br /><img src="/ketchup.jpg" className="selection"/ ></div> }
      {(additionalFlavor === 6) && <div><b>Add:</b> Player's Choice </div> }
      {(additionalFlavor === 7) && <div><b>Add:</b> House's Choice</div> }
      <br/>
      <button onClick={() => think()}>Chance</button>
    </div>
  );
}

export default App;
