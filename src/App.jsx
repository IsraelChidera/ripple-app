import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './page/LandingPage'
import Dashboard from './page/Dashboard';
import EmployeeList from './page/EmployeeList';

function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/employees" element={<EmployeeList />} />
      </Routes>
    </Router>

  )
}

export default App
