import { useParams } from "react-router-dom";
import { useState } from "react";

export default function BookAppointment() {
  const { id } = useParams();
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
    <div className="p-6 max-w-xl mx-auto">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-semibold">Book Appointment</h2>{" "}
          <input
            name="name"
            placeholder="Patient Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="datetime-local"
            name="datetime"
            value={form.datetime}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Confirm Appointment
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h3 className="text-xl font-bold">Appointment Confirmed!</h3>{" "}
          <p>Thank you, {form.name}. We have scheduled your appointment.</p>{" "}
        </div>
      )}
    </div>
  );
}
