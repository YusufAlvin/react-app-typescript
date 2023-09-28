import React from "react";
import './Global.scss';
import { Counter } from "./contents/Counter";

const App = () : JSX.Element => {
  return (
    <div className="app-container">
      <Counter />
    </div>
  );
}

export default App;
