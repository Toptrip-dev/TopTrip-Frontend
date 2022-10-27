import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Plan from './components/pages/Plan';
import SignUp from './components/pages/SignUp';
import Places from './components/pages/Places';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/plan' component={Plan} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/places' component={Places}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
