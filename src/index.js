import React from "react";
import ReactDOM from "react-dom";
//import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import appHTML from "components/appHTML.js";
import "./styles.css";

function App() {
  return (
    <div className="container-fluid">
      <appHTML />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
