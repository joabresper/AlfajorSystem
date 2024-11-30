import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage';
import ABM from './pages/ABM/abm';
import VehicleList from './pages/RTO/VehicleList';
import Turnos from './pages/Turnos/Turnos';
import "bootstrap/dist/css/bootstrap.min.css";
import VehiclePage from './pages/RTO/VehiclePage';
import VehicleControl from './pages/RTO/VehicleControl';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/abm" element={<ABM />} />
          <Route path="/Vehiculos" element={<VehicleList />} />
          <Route path="/turnos" element={<Turnos />} />
          <Route path="/Vehiculos/:patente" element={<VehiclePage />} />
          <Route path="/Vehiculos/:patente/:control" element={<VehicleControl />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App