import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Signup from "./components/Signup.jsx";
// import DonationsList from "./components/donationList";
import Login from "./components/Login";
import Annamitra from "./components/Home.jsx";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <BrowserRouter>
            <Routes>
                <Route path='/Annamitra' element={<Annamitra/>}/>
                <Route path="/signup" element={<Signup />} />
                <Route path='/LogIn' element={<Login/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}


export default App;
