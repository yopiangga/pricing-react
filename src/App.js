import React from "react";

import './assets/css/css-reset.css';
import './assets/scss/desktop-style.css';
import './assets/scss/tablet-style.css';
import './assets/scss/mobileLandscape-style.css';
import './assets/scss/mobile-style.css';
import { Pricing } from "./pages/Pricing";


function App() {
  return (
    <div className="App">
      <Pricing />
    </div>
  );
}

export default App;
