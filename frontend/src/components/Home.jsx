import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Annamitra() {
    const navigate = useNavigate();
    // Typing effect function
    function typeWriter(text, i, fnCallback) {
        const typingTextElement = document.getElementById("typingText");

        if (typingTextElement) {
            if (i < text.length) {
                typingTextElement.innerHTML =
                    text.substring(0, i + 1) +
                    '<span aria-hidden="true"></span>';

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
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet"
            />

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
                        style={{ fontSize: "50px" }}
                    >
                        {/* <!-- Live typing effect--> */}
                    </h1>

                    <p>
                        Join us in fighting hunger and food insecurity by
                        bridging the gap between surplus food and those in need.
                        Together, we can make a difference one meal at a time
                        <br />
                        <br />
                        Your contribution matters; let's create a world where no
                        one goes to bed hungry.
                    </p>
                    <br />
                    <br />
                    <div className="bottom-buttons">
                        <button
                            className="btn-3"
                            onClick={() => {
                                navigate("/Signup");
                            }}
                        >
                            <span>Sign Up</span>
                        </button>
                        &nbsp;&nbsp;
                        <button
                            className="btn-3"
                            onClick={() => {
                                navigate("/Login");
                            }}
                        >
                            <span>Login</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Annamitra;
