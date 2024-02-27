import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Signup from "./components/Signup";
import DonationsList from "./components/donationList";
import Login from "./components/Login";
import Annamitra from "./components/Home.jsx";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </div>
    );
}

function AppRoutes() {
    const location = useLocation();

    // Conditionally render the Navbar except for the '/Annamitra' route
    const renderNavbar = location.pathname !== '/Annamitra';

    return (
        <div>
            {renderNavbar && <Navbar />}
            <Routes>
                <Route path='/Annamitra' element={<Annamitra/>}/>
                <Route path="/signup" element={<Signup />} />
                <Route path='/LogIn' element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;
