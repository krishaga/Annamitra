import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import DonationsList from "./components/donationList";
// import Login from "./Login.jsx";
// import Home from "./Home.jsx";

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <DonationsList></DonationsList>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#eeeeee",
                    paddingBottom: "200px",
                }}
            >
                <BrowserRouter>
                    <Routes>
                        {/* <Route path='/' element={<Home/>}/> */}
                        <Route path="/signup" element={<Signup />} />
                        {/* <Route path='/LogIn' element={<Login/>}/> */}
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
