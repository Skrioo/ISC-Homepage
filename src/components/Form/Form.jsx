import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="form-section">
        <div className="form-container">
            <div className="form-header">
                <h1>Request a Call Back</h1>
            </div>
            <div className="form-inputs">
                <input type="text" placeholder="Full Name" />
                <input type="text" name="" id="" placeholder="Phone Number" />
                <input type="text" name="" id="" placeholder="Email" />
                <input type="text" name="" id="" placeholder="Message" />
            </div>
            <div>
                <button className="form-button">SEND</button>
            </div>
        </div>
    </div>
  );
}
