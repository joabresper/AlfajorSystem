import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage';
import ABM from './pages/ABM/abm';
import RTO from './pages/RTO/RTO';
import MenuATT from './pages/Turnos/MenuATT';
import Turnos from './pages/Turnos/Turnos';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/abm" element={<ABM />} />
          <Route path="/rto" element={<RTO />} />
          <Route path="/turnos" element={<Turnos />} />
          <Route path="/menuatt" element={<MenuATT />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App