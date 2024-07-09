// import React from 'react';
// import { Link } from 'react-router-dom';
// import './App.css';
// import Help from './components/Help';
// import Settings from './components/Settings';
// import User from './components/User';
// import Home from './components/Home'
// import { Route,Routes } from 'react-router-dom';
// function App() {
//   return (
//       <div className="App" >

//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/help">Help</Link></li>
//             <li><Link to="/settings">Settings</Link></li>
//             <li><Link to="/user">User</Link></li>
//           </ul>
//           <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/help" element={<Help />} />
//           <Route path="/settings" element={<Settings />} />
//           <Route path="/user" element={<User />} />
//         </Routes>

//       </div>
//   );
// }

// export default App;
import React from "react";
import Home from "./components/Home";
import Help from "./components/Help";
import Settings from './components/Settings';
import User from './components/User';

import { Route, Routes, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/help">Helper</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/user">user</Link></li>
      </ul>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </div>
  )
}
export default App;