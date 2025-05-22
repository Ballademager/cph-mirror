import { useEffect, useState } from "react";
import "./Contact.css";

function Contact() {
  const [phoneOpen, setPhoneOpen] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();

      if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
        setPhoneOpen(true);
      } else {
        setPhoneOpen(false);
      }
    };
    checkTime();
  }, []);

  return (
    <div className="contact-box">
      <div className="phones-open">
        <h3>Kontakt os</h3>
        <div className="phone-flex">
          {phoneOpen ? <p>Åben</p> : <p>Lukket</p>}
          <div className={`${phoneOpen ? "open" : "close"}`}>
            <img src="/phone-white.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="opening-hours">
        <img src="/clock.svg" alt="" />
        <div>
          <p className="darker">Åbningstider</p>
          <p>Mandag-Fredag: 9-17</p>
        </div>
        <p>Lørdag-Søndag: Lukket</p>
      </div>
      <div className="line">
        <div className="line">
          <img src="/email.svg" alt="" />
          <a target="_blank" href="mailto:kundeservice@cph.dk">
            kundeservice@cph.dk
          </a>
        </div>
        <div className="line">
          <img src="/at.svg" alt="" />
          <a target="_blank" href="https://twitter.com/cphairports">
            @kundeservice
          </a>
        </div>
        <div className="line">
          <img src="/phone.svg" alt="" />
          <a target="_blank" href="tel:+4561318424">
            +45 23 11 93 04
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
