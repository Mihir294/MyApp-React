import React from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [mail, setMail] = useState();
  const [tc, settc] = useState(false);

  const myStyle = {
    width: "10%",
    cursor: "pointer",
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !mail || !phone) {
      alert("Please fill in all required fields.");
      return;
    }

    if (tc === false) {
      alert("Please accept the terms and conditions.");
      return;
    }

    navigate("/submit");
  };

  return (
    <div className="booking">
      <p id="booking" className="para-1">
        BOOKING
      </p>

      <p className="let">
        Here at Burgers Point we provide amazing experiences with best interiors
        & Master level Chef
      </p>

      <form id="bookingForm">
        <div className="second">
          <div className="namePara make">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              value={props.valueName || name}
              placeholder="Patel Vansh"
              name="name"
              id="mail"
              onChange={(e) => {
                setName(e.target.value);
                props.setvalueName(e.target.value);
              }}
            />
          </div>

          <div className="phonePara make">
            <label htmlFor="phone">Phone No:</label>
            <input
              type="text"
              name="phone"
              id="mail"
              value={phone}
              placeholder="9898900000"
              min="10"
              max="10"
              onChange={(e) => {
                let valuePhone = e.target.value;
                setPhone(e.target.value);
              }}
            />
          </div>

          <div className="mailPara make">
            <label htmlFor="mail">E-mail:</label>
            <input
              type="text"
              name="mail"
              id="mail"
              value={mail}
              placeholder="maggie@burgerpt.com"
              onChange={(e) => {
                let valueMail = e.target.value;
                setMail(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="second">
          <label htmlFor="date">Booking Date:</label>
          <input type="date" name="date" id="mail" required />

          <label htmlFor="num">Number of People:</label>
          <input
            type="number"
            name="num"
            id="mail"
            min="0"
            max="49"
            defaultValue="1"
            required
          />
        </div>

        <div className="second make">
          <label htmlFor="slots">Slots:</label>
          <select name="slots" id="mail">
            <option value="mornig">10am-1pm</option>
            <option value="evening">2pm-5pm</option>
            <option value="night">7pm-11pm</option>
          </select>
        </div>

        <div className="second">
          <label htmlFor="Check">T&C:</label>
          <input
            type="checkbox"
            name="Check"
            id="Check"
            onChange={() => {
              settc(!tc);
            }}
          />
        </div>

        <div className="second">
          <button
            id="sub"
            style={myStyle}
            className="make"
            onClick={handleSubmit}
            type="button"
          >
            Submit
          </button>
          <button id="clr" className="make" style={myStyle}>
            Clear
          </button>
        </div>
      </form>
      <p className="let">
        After Submit Confirmation Mail & Call will be conducted by our Team
      </p>
    </div>
  );
}
