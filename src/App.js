import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Helper from './components/Helper';
import Settings from './components/Settings';
import User from './components/User';
import Home from './components/Home'
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
      <div className="App" >
        
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/helper">Helper</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/user">User</Link></li>
          </ul>
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/helper" element={<Helper />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/user" element={<User />} />
        </Routes>
        
      </div>
  );
}

export default App;
