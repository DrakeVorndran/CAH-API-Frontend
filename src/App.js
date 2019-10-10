import React from 'react';
import './App.css';
import './theme.css';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home'
import Key from './pages/Key'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li className="title"><Link to="/">
              <h1>CAH API</h1>
            </Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/key">My Key</Link></li>
          </ul>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/out">Log Out</Link></li>
          </ul>
        </nav>
        <div className='container' >
          <Route exact path='/' component={Home} /> 
          <Route exact path='/key' component={Key} /> 
          <Route exact path='/login' component={LogIn} /> 
          <Route exact path='/signup' component={SignUp} /> 
        </div>
      </div>
    </Router>
  );
}

export default App;
