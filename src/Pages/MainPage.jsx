import { Link } from "react-router-dom";

const locations = [
  "Whitefield", "Electronic City", "Indiranagar", "Koramangala", "Jayanagar",
  "Hebbal", "Yelahanka", "Marathahalli", "BTM Layout", "MG Road",
  "Rajajinagar", "Basavanagudi", "Malleshwaram", "Hennur", "Banashankari",
  "KR Puram", "Majestic", "Ulsoor", "Vijayanagar", "Sarjapur", "Peenya",
  "Bommanahalli"
];

export default function LocationGrid() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6">
      <h1 className="text-4xl text-white font-bold mb-8">Bangalore Locations</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {locations.map((location, index) => (
          <Link
            key={index}
            to={`/${location.replace(/\s+/g, "")}`}
            className="bg-gradient-to-r from-green-600 to-blue-500 p-4 rounded-xl shadow-lg transform transition hover:scale-105 text-white text-center font-semibold text-lg"
          >
            {location}
          </Link>
        ))}
      </div>
    </div>
  );
}
