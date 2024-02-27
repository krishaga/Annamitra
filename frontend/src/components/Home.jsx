import React, { useEffect } from "react";
import '../styles/Home.css';

function Annamitra() {
    // Typing effect function
    function typeWriter(text, i, fnCallback) {
        const typingTextElement = document.getElementById("typingText");

        if (typingTextElement) {
            if (i < text.length) {
                typingTextElement.innerHTML =
                    text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

                setTimeout(function () {
                    typeWriter(text, i + 1, fnCallback);
                }, 100);
            } else if (typeof fnCallback === "function") {
                setTimeout(fnCallback, 700);
            }
        }
    }

    // Start the typing effect on component mount
    useEffect(() => {
        var text = "Make a Difference, One Meal at a Time.";
        typeWriter(text, 0, function () {});
    }, []);

    return (
        <div>
            <div className="navbar">
                <img src="/assets/images/logo.png" alt="Logo" />
                <hr className="divider" />
            </div>

            <div className="content">
                <div className="left-section">
                    <img
                        src="/assets/images/side_image.png"
                        alt="Food Donation Image"
                        style={{ maxWidth: "95%" }}
                    />
                </div>
                <div className="right-section">
                    <h1
                        id="typingText"
                        className="h1-line-height"
                        style={{ fontSize: "45px" }}
                    >
                        {/* <!-- Live typing effect--> */}
                    </h1>

                    <p>
                        Join us in fighting hunger and food insecurity by bridging the gap
                        between surplus food and those in need. Together, we can make a
                        difference one meal at a time<br />
                        Your contribution matters; let's create a world where no one goes to
                        bed hungry.
                    </p>
                </div>
            </div>
            <div className="bottom-buttons">
                <button className="btn-3" onClick={() => { window.location.href = '/Signup' }}>
                    <span>Sign Up</span>
                </button>
                &nbsp;&nbsp;
                <button className="btn-3" onClick={() => { window.location.href = '/Login' }}>
                    <span>Login</span>
                </button>
            </div>
        </div>
    );
}

export default Annamitra;
