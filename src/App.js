import React from "react";
import "./App.css";
import { UserStorage } from "./context/UserContext";
import Routes from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <UserStorage>
          <Routes />
        </UserStorage>
      </Router>
    </div>
  );
}

export default App;
