import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";
import { useTranslation } from "react-i18next";
import { showMessage } from "../../services/Alerts";

import america from "./vectors/America.png";
import eurasia from "./vectors/Eurasia-Africa.png";
import antartic from "./vectors/Antartic.png";
import americaisland1 from "./vectors/America-island1.png";
import americaisland2 from "./vectors/America-island2.png";
import americaisland3 from "./vectors/America-island3.png";
import japan from "./vectors/Japan.png";
import australia from "./vectors/Australia.png";
import australia1 from "./vectors/Australia1.png";
import australia2 from "./vectors/Australia2.png";
import newzealand1 from "./vectors/NewZealand1.png";
import newzealand2 from "./vectors/NewZealand2.png";

export default function Form() {
  const form = useRef();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [number, setNumber] = useState();
  const [name, setName] = useState();

  console.log(email, "dasdasdasda");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dycfhht",
        "template_8hlqog5",
        form.current,
        "CPNttltCH3VdQN8BG"
      )
      .then(
        (result) => {
          setName("");
          setEmail("");
          setMessage("");
          setNumber("");
          console.log(result, "dsada");
          if (result) {
            showMessage(
              "Callback successfully created.",
              "success",
              "center",
              1000
            );
          } else {
            showMessage("Title or content are empty", "error", "center", 3000);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const { t } = useTranslation();
  return (
    <div className="form-section">
      <div className="background-animation">
        <img src={antartic} alt="Antartic" className="antartic vector" />
        <img
          src={americaisland1}
          alt="america-island1"
          className="america-island1 vector"
        />
        <img
          src={americaisland2}
          alt="america-island2"
          className="america-island2 vector"
        />
        <img
          src={americaisland3}
          alt="america-island3"
          className="america-island3 vector"
        />
        <img src={america} alt="America" className="america vector" />
        <img src={eurasia} alt="Eurasia-Africa" className="eurasia vector" />
        <img src={japan} alt="japan" className="japan vector" />
        <img src={australia} alt="australia" className="australia vector" />
        {/* <img src={australia1} alt="australia1" className="australia1 vector" />
        <img src={australia2} alt="australia2" className="australia2 vector" />
        <img
          src={newzealand1}
          alt="newzealand1"
          className="newzealand1 vector"
        />
        <img
          src={newzealand2}
          alt="newzealand2"
          className="newzealand2 vector"
        /> */}
      </div>

      <div className="form-container">
        <div className="form-header">
          <h1>{t("Request a Call Back")}</h1>
        </div>

        <form className="form-inputs" ref={form} onSubmit={sendEmail}>
          <input
            type="name"
            name="user_name"
            placeholder={t("Full Name")}
            onChange={(e) => setName(e.target.value)}
            required
            value={name}
          />
          <input
            type="email"
            name="user_email"
            placeholder={t("Email")}
            onChange={(e) => setEmail(e.target.value)}
            required
            value={email}
          />
          <input
            type="text"
            required
            name="message"
            placeholder={t("Message")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="text"
            required
            placeholder={t("Phone Number")}
          />
          <input className="form-button" type="submit" value={t("SEND")} />
        </form>
      </div>
    </div>
  );
}
