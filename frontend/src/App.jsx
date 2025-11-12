import React from 'react'
import Signup from './components/Signup'
import Users from './components/Users'
import { Routes, Route } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </div>
  )
}
