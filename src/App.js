import React from "react";
import { ComA } from "./components/ComA";
import { ComB } from "./components/ComB";
import "./components/common.css";
function App() {
  return (
    <div className="main">
      <div className="first">
        <ComB />
        <ComA />
        <ComB />
        <ComA />
        <ComB />
      </div>
      <div className="second">
        <ComA />
        <ComB />
        <ComA />
        <ComB />
        <ComA />
      </div>
    </div>
  );
}

export default App;
