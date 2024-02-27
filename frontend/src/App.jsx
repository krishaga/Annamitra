import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import DonationsList from "./components/donationList";
import Login from "./components/Login";
// import Home from "./Home.jsx";

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <BrowserRouter>
                    <Routes>
                        {/* <Route path='/' element={<Home/>}/> */}
                        <Route path="/signup" element={<Signup />} />
                        <Route path='/LogIn' element={<Login/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
