import React from "react";
import Header from "./contents/Header";
import './Global.scss';

const App = () : JSX.Element => {
  return (
    <div className="app-container">
      <Header name="Header" />
    </div>
  );
}

export default App;
