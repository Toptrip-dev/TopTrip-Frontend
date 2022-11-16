import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Places from './components/pages/Places';
import Plan from './components/pages/Plan';
import Login from './components/pages/Login';


function App() {
  return (
  <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={ <Home/> } />
          <Route path='/services' element={ <Services/> } />
          <Route path='/plan' element={ <Plan/> }/>
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/places' element={<Places/>}/>
          <Route path='/login' element={ <Login/> }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
