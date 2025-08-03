import { useParams, useNavigate } from "react-router-dom";

export default function DoctorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = {
    id,
    name: "Dr. Alice Smith",
    specialization: "Cardiologist",
    bio: "Experienced cardiologist with 10 years in clinical practice.",
    schedule: "Mon-Fri: 9am - 5pm",
    image: "/images/alice.jpg",
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {" "}
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-60 object-cover rounded"
      />{" "}
      <h1 className="text-2xl font-bold mt-4">{doctor.name}</h1>{" "}
      <p className="text-lg text-gray-700">{doctor.specialization}</p>{" "}
      <p className="mt-2">{doctor.bio}</p>{" "}
      <p className="mt-2 text-sm text-gray-600">
        Availability: {doctor.schedule}
      </p>{" "}
      <button
        onClick={() => navigate(`/book/${id}`)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {" "}
        Book Appointment{" "}
      </button>{" "}
    </div>
  );
}
