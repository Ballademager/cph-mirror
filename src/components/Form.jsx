import { useState } from "react";
import "./Form.css";

function Form() {
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    subject: "",
    description: "",
    firstName: "",
    surName: "",
    email: "",
    phone: "",
    emailOnly: false,
  });
  const [feedbackData, setFeedbackData] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSent(true);
    setFeedbackData(formData);
    setFormData({
      category: "",
      subject: "",
      description: "",
      firstName: "",
      surName: "",
      email: "",
      phone: "",
      emailOnly: false,
    });
  };

  const closeModal = () => {
    setIsSent(false);
  };

  return (
    <>
      <form className="kontakt-formular" onSubmit={handleSubmit}>
        <legend>Kontakt Kundeservice</legend>

        <div className="form-flex">
          <label htmlFor="category">Kategori</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Vælg emne</option>
            <option value="parkering">Parkering</option>
            <option value="feedback">Feedback/forslag</option>
            <option value="klager">Klager</option>
            <option value="persondata">Persondata</option>
            <option value="andet">Andet</option>
          </select>
          <label htmlFor="subject">Emne</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <label htmlFor="description">Beskrivelse</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
          <h4>Kontaktinformation</h4>
          <label htmlFor="firstName">
            Fornavn <span>*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <label htmlFor="surName">
            Efternavn <span>*</span>
          </label>
          <input
            type="text"
            id="surName"
            name="surName"
            value={formData.surName}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">
            E-mail <span>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">Telefon</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <div className="flex-contents">
            <label htmlFor="emailOnly">
              Kontakt mig venligst kun via email
            </label>
            <input
              type="checkbox"
              id="emailOnly"
              name="emailOnly"
              checked={formData.emailOnly}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">Send</button>
        {isSent && (
          <div className="modal">
            <div className="modal-content">
              <p>
                Tak for din henvendelse {feedbackData.firstName}. <br /> Vi
                vender tilbage hurtigst muligt på:
              </p>
              <p>{feedbackData.email}</p>
              <button onClick={closeModal}>Fortsæt</button>
            </div>
          </div>
        )}
      </form>
    </>
  );
}

export default Form;
