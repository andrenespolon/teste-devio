import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import socket from "./socket";
import "./App.css";

function App() {
  const [socketOn, setSocketOn] = useState(null);

  useEffect(() => {
    setSocketOn(socket);
  }, [socketOn]);

  return (
    <div className="main fade-in">
      {socketOn ? (
        <Router>
          <Routes />
        </Router>
      ) : (
        <div>connecting...</div>
      )}
    </div>
  );
}

export default App;
