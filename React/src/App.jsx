import Register from "./components/Register"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import React from "react"
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

function App() {

  return (
    <div>
      
    <Router>
      <Routes>
        
          <Route path='/register' element={<Register/>} />
          <Route path="/" element={<Login/>} />
          <Route 
            path='/dashboard'
            render={() => <Dashboard userName={localStorage.getItem('userName')} />}
          />
      </Routes>
    </Router>
    </div>
  )
  }

export default App

