import React from "react";
import "../styles/Footer.css";
export default function Footer() {
    return (
        <div className="footer">
            <div className="part1">
                <p>Contact Us:</p>
                <ul className="contact-list">
                    <li><a href="https://www.instagram.com/"><img src="/assets/images/insta.png" alt="Instagram" /></a></li>
                    <li><a href="https://twitter.com/"><img src="/assets/images/x.png" alt="Twitter" /></a></li>
                    <li><a href="https://linkedin.com/"><img src="/assets/images/linkedin.png" alt="LinkedIn" /></a></li>
                    <li><a href="https://mailto:krishagarwal1673@gmail.com/"><img src="/assets/images/gmail.png" alt="Email" /></a></li>
                </ul>
            </div>
            <div className="part2">&#169; CopyRights Reserved 2024</div>
        </div>
    );
}
