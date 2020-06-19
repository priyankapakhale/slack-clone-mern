import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'

function App() {
  return (
    <Router className="h-100 app">
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path='/register'>
        <Register />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
