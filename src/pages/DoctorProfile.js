import { useParams, useNavigate } from "react-router-dom";
import "../index.css";

export default function DoctorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = {
    id,
    name: "Dr. Bob Lee",
    specialization: "Dermatologist",
    bio: "Experienced Dermatologist with 10 years in clinical practice. A medical doctor who specializes in dermatologist, treating, and preventing diseases and conditions of the heart and blood vessels. This includes coronary artery disease, heart rhythm disorders, heart failure, and congenital heart defects. Cardiologists use diagnostic tools such as ECGs, echocardiograms, and stress tests to evaluate cardiovascular health. They may also perform or recommend procedures like angioplasty or catheterization. Cardiologists work in hospitals, clinics, or private practices and often collaborate with surgeons and other specialists to ensure comprehensive patient care.",
    schedule: "Mon-Fri: 9am - 5pm",
    image: "/images/dr-1.jpg",
  };

  return (
    <div className="doctor-profile-container">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="doctor-profile-image"
      />
      <h1 className="doctor-profile-heading">{doctor.name}</h1>
      <p className="doctor-profile-discription">{doctor.specialization}</p>
      <p className="doctor-profile-discription">{doctor.bio}</p>
      <p className="doctor-profile-discription1">
        Availability:
        <span className="doctor-profile-description1-span">
          {doctor.schedule}
        </span>
      </p>
      <button
        onClick={() => navigate(`/book/${id}`)}
        className="doctor-profile-book-button"
      >
        Book Appointment
      </button>
    </div>
  );
}
