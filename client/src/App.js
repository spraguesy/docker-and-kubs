import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          To become a boss at{" "}
          <a
            className="App-link"
            href="https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docker and Kubernentes
          </a>
          , take Stephen Grider's class.
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn to Code
        </a>
      </header>
    </div>
  );
}

export default App;
