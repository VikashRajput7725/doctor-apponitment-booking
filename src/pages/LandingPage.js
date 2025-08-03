import { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import "../index.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Alita Smith",
    specialization: "Cardiologist",
    status: "Available today",
    image: "/images/dr-2.jpeg",
  },
  {
    id: 2,
    name: "Dr. Bob Lee",
    specialization: "Dermatologist",
    status: "Fully booked",
    image: "/images/dr-3.jpeg",
  },
  {
    id: 3,
    name: "Dr. Carol White",
    specialization: "Pediatrician",
    status: "On leave",
    image: "/images/dr-4.webp",
  },
  {
    id: 4,
    name: "Dr. Maria whatson",
    specialization: "Neurologist",
    status: "Available today",
    image: "/images/dr-5.webp",
  },
  {
    id: 5,
    name: "Dr. Eva Green",
    specialization: "orthopedist",
    status: "Available today",
    image: "/images/dr-6.jpeg",
  },
  {
    id: 6,
    name: "Dr. Eve Johnson",
    specialization: "gynecologist",
    status: "On leave",
    image: "/images/dr-7.jpeg",
  },
  {
    id: 7,
    name: "Dr. Frank Wilson",
    specialization: "Ophthalmologist",
    status: "Fully booked",
    image: "/images/dr-1.jpg",
  },
];

export default function LandingPage() {
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="langing-page">
      <h1 className="langing-page-heading">Find a Doctor</h1>
      <div>
        <input
          type="text"
          placeholder="Search by name or specialization"
          className="landing-page-search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <CiSearch className="landing-page-search-icon" />
      </div>
      <div className="langing-page-doctor-list">
        {filteredDoctors.map((doc) => (
          <div>
            <img
              src={doc.image}
              alt={doc.name}
              className="landing-page-doctor-image"
            />
            <Link
              to={`/doctor/${doc.id}`}
              key={doc.id}
              className="landing-page-doctor-card-link"
            >
              <h2 className="landing-page-h2-heading">{doc.name}</h2>
            </Link>
            <p className="landing-page-specilazation">{doc.specialization}</p>
            {doc.status === "Available today" && (
              <p className="landing-page-status available">{doc.status}</p>
            )}
            {doc.status === "On leave" && (
              <p className="landing-page-status on-leave">{doc.status}</p>
            )}
            {doc.status === "Fully booked" && (
              <p className="landing-page-status fully-booked">{doc.status}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
