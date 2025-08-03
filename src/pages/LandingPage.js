import { useState } from "react";
import { Link } from "react-router-dom";

const doctors = [
  {
    id: 1,
    name: "Dr. Alice Smith",
    specialization: "Cardiologist",
    status: "Available today",
    image: "/images/alice.jpg",
  },
  {
    id: 2,
    name: "Dr. Bob Lee",
    specialization: "Dermatologist",
    status: "Fully booked",
    image: "/images/bob.jpg",
  },
  {
    id: 3,
    name: "Dr. Carol White",
    specialization: "Pediatrician",
    status: "On leave",
    image: "/images/carol.jpg",
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
    <div className="p-6">
      {" "}
      <h1 className="text-3xl font-bold mb-4">Find a Doctor</h1>{" "}
      <input
        type="text"
        placeholder="Search by name or specialization"
        className="border p-2 w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {" "}
        {filteredDoctors.map((doc) => (
          <Link
            to={`/doctor/${doc.id}`}
            key={doc.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg"
          >
            {" "}
            <img
              src={doc.image}
              alt={doc.name}
              className="w-full h-40 object-cover rounded"
            />{" "}
            <h2 className="text-xl font-semibold mt-2">{doc.name}</h2>{" "}
            <p>{doc.specialization}</p>{" "}
            <p className="text-sm text-gray-500">{doc.status}</p>{" "}
          </Link>
        ))}{" "}
      </div>{" "}
    </div>
  );
}
