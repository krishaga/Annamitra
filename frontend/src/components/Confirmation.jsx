import React from "react";
import "../styles/confirmation.css";

export default function Confirmation({ element, onClose }) {
    const address = element.addressTo || element.addressFrom;

    return (
        <div className="popup">
            <h3>Are you Sure?</h3>
            <br />
            <p>Description : {element.description}</p>
            <br />
            <p>Serves : {element.serves || element.toserve}</p>
            <br />
            <p>
                Address : {address.street}, {address.city}, {address.state},{" "}
                {address.country}, {address.postalcode}
            </p>
            <br />
            <button onClick={onClose}>Close</button>
        </div>
    );
}
