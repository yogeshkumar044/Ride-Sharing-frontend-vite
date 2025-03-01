import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Start from './pages/Start';
import Home from './pages/Home';
import CaptainHome from './pages/CaptainHome';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import UserProtectWrapper from './pages/UserProtectWrapper';
import UserLogout from './pages/UserLogout';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';
import CaptainLogout from './pages/CaptainLogout';
import Riding from './pages/Riding';
import CaptainRiding from './pages/CaptainRiding';


const App = () => {
  return (
    <div className="max-w-4xl mx-auto flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path='/riding' element={<Riding />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/Home" element={<UserProtectWrapper> <Home /> </UserProtectWrapper>} />  
        <Route path="/captain-Home" element={<CaptainProtectWrapper> <CaptainHome /> </CaptainProtectWrapper>} />
        <Route path="/captain-riding" element={<CaptainProtectWrapper> <CaptainRiding /> </CaptainProtectWrapper>} />

        <Route path='/user/logout' element={<UserProtectWrapper> <UserLogout /> </UserProtectWrapper>} /> 
        <Route path='/captain/logout' element={<CaptainProtectWrapper> <CaptainLogout /> </CaptainProtectWrapper>}/>
        
      </Routes>
    </div>
  )
}

export default App
