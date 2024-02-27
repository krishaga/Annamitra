import React from "react";

function Navbar() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 4,
                marginLeft: 10,
                marginRight: 10,
                height: 40,
            }}
        >
            <div
                onClick={()=>{
                    window.location="/Annamitra";                    
                }}>
                Annamitra
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ marginRight: 10 }}>
                    <button
                        variant={"contained"}
                        onClick={() => {
                            window.location = "/SignUp";
                        }}
                    >
                        SignUp
                    </button>
                </div>
                <div>
                    <button
                        variant={"contained"}
                        onClick={() => {
                            window.location = "/Login";
                        }}
                    >
                        LogIn
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
