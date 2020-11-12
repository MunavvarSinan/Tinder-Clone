import React from "react";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    //BEM Class naming Convention
    <div className="app">
      {/* Header  */}
      <Header />
      {/* TinderCard  */}
      <TinderCards />
      {/* SwipeButtons  */}
      <SwipeButtons />
    </div>
  );
}

export default App;
