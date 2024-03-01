import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Signup from "./components/signup.jsx";
import Login from "./components/login";
import Annamitra from "./components/Home.jsx";
import Navbar from "./components/Navbar";
import DonationsList from "./components/donationList.jsx";
import AcceptorsList from "./components/collectionList.jsx";
import RequestList from "./components/recipientRequest.jsx";
import DonateList from "./components/donationRequest.jsx";


function App() {
    return (
        <div>
            <Navbar></Navbar>
            <BrowserRouter>
                <Routes>
                    <Route path="/Annamitra" element={<Annamitra />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/LogIn" element={<Login />} />
                    <Route path="/donation-list" element={<DonationsList />} />
                    <Route path="/acceptor-list" element={<AcceptorsList />} />
                    <Route path="/donationRequest" element={<DonateList />} />
                    <Route path="/recipientRequest" element={<RequestList />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
