import React from "react";
import "../styles/confirmation.css";

export default function Confirmation({ element, onClose }) {

    return (
        <div className="popup">
            <div className="product-container">
                <div className="product-image-container">
                    <img
                        className="product-image"
                        src="/assets/images/mapapi.png"
                        style={{ width: "100%" }}
                        alt=""
                    />
                </div>
                <div className="product-description-container">
                    <div className="description">
                        Description: {element.description}
                    </div>
                    <div className="serves">Serves: {element.serves}</div>
                    <div className="date">
                        Date: {new Date(element.date).toLocaleDateString("en-GB")}
                    </div>
                    <div className="addresspro">
                        Address: {element.addressFrom.street}
                    </div>
                    <div className="citypro">City: {element.addressFrom.city}</div>
                </div>
            </div>
        </div>
    );
}
