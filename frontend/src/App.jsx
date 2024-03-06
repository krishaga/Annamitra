// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login";
import Annamitra from "./components/Home.jsx";
import Navbar from "./components/Navbar";
import Navbar_2 from "./components/Navbar_2";
import DonationsList from "./components/DonationsList.jsx";
import RecipientsList from "./components/RecipientsList.jsx";
import RecipientRequest from "./components/RecipientRequest.jsx";
import DonationRequest from "./components/DonationRequest.jsx";
import Dashboard from "./components/Dashboard.jsx";

function App() {
    const isHomeOrAuthPage =
        location.pathname === "/Annamitra" ||
        location.pathname === "/Signup" ||
        location.pathname === "/Login";
    return (
        <BrowserRouter>
            <div>
                {/* Your conditionally rendered Navbar here */}
                {isHomeOrAuthPage ? <Navbar /> : <Navbar_2 />}
                <Routes>
                    <Route path="/Annamitra" element={<Annamitra />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/LogIn" element={<Login />} />
                    <Route path="/donations-list" element={<DonationsList />} />
                    <Route
                        path="/recipients-list"
                        element={<RecipientsList />}
                    />
                    <Route
                        path="/donationRequest"
                        element={<DonationRequest />}
                    />
                    <Route
                        path="/recipientRequest"
                        element={<RecipientRequest />}
                    />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
