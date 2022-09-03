import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import { Routes, Route, Outlet } from "react-router-dom";
import Dashboard from './mycomponents/Dashboard';
import Login from './mycomponents/Login';
import Register from './mycomponents/Register';
import Header from './mycomponents/Header';

function App() {
  return (
    <>
      <div className="App">
      {/* <Header /> */}
        <Routes>          
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <ToastContainer />
    </>
    
  );
}

export default App;
