import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Signup from "./components/signup.jsx";
import Login from "./components/login";
import Annamitra from "./components/Home.jsx";
import Navbar from "./components/Navbar";
import DonationsList from "./components/donationsList.jsx";
import RecipientsList from "./components/recipientsList.jsx";
import RecipientRequest from "./components/recipientRequest.jsx";
import DonationRequest from "./components/donationRequest.jsx";

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <BrowserRouter>
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
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
