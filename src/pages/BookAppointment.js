// import { useParams } from "react-router-dom";
import { useState } from "react";
import "../index.css";

export default function BookAppointment() {
  // const { id } = useParams();
  const [form, setForm] = useState({ name: "", email: "", datetime: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="book-appointment-container">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="book-appointment-form">
          <h2 className="book-appointment-heading">Book Appointment</h2>
          <lable id="name" className="patient-name-label">
            Patient Name
          </lable>
          <input
            name="name"
            id="name"
            placeholder="Patient Name"
            value={form.name}
            onChange={handleChange}
            required
            className="book-appointment-name-input"
          />
          <lable id="email" className="patient-name-label">
            E-mail
          </lable>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="book-appointment-email-input"
          />
          <lable id="datetime" className="patient-name-label">
            Time
          </lable>
          <input
            type="datetime-local"
            name="datetime"
            id="datetime"
            value={form.datetime}
            onChange={handleChange}
            required
            className="book-appointment-datetime-input"
          />
          <button type="submit" className="book-appointment-submit-button">
            Confirm Appointment
          </button>
        </form>
      ) : (
        <div className="booked-appointment-message-container">
          <h3 className="booked-appoinment-heading">Appointment Confirmed!</h3>
          <p className="booked-apointment-paragraph">
            Thank you,{" "}
            <span className="booked-appointment-person-name">{form.name}</span>.
            We have scheduled your appointment.
          </p>
        </div>
      )}
    </div>
  );
}
