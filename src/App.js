import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserStorage } from './context/UserContext';
import Routes from './routes/routes';

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
