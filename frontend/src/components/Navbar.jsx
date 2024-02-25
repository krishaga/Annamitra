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
            <div>Coursera</div>
            <div style={{ display: "flex" }}>
                <div style={{ marginRight: 10 }}>
                    <div
                        variant={"contained"}
                        onClick={() => {
                            window.location = "/SignUp";
                        }}
                    >
                        SignUp
                    </div>
                </div>
                <div>
                    <div
                        variant={"contained"}
                        onClick={() => {
                            window.location = "/Login";
                        }}
                    >
                        LogIn
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
