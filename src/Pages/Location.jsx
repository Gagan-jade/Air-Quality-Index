import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For animations
import { ArrowRight } from "lucide-react"; // For navigation arrow
import backgroundImage from "../assets/image.png"; // Replace with your image

export default function LocationPage() {
  const { location } = useParams();
  const [year, setYear] = useState(2026);
  const [pollutionData, setPollutionData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch pollution data from Python server (POST request - to be implemented later)
  useEffect(() => {
    setIsLoading(true);

    // Placeholder: Replace with actual API call to fetch pollution data
    // fetch("/api/predict", { method: "POST", body: JSON.stringify({ location, year }) })
    //   .then((res) => res.json())
    //   .then((data) => { setPollutionData(data); setIsLoading(false); });

    setTimeout(() => {
      // Fake Data (Replace with actual API response)
      setPollutionData({
        CO: Math.random() * 10,
        NO2: Math.random() * 150,
        SO2: Math.random() * 100,
        O3: Math.random() * 200,
        PM2_5: Math.random() * 300,
        PM10: Math.random() * 500,
      });
      setIsLoading(false);
    }, 1000);
  }, [location, year]);

  // Determine Air Quality Effect
  const airQualityLevel = pollutionData
    ? pollutionData.PM2_5 > 250 || pollutionData.PM10 > 400
      ? "severe"
      : pollutionData.PM2_5 > 150 || pollutionData.PM10 > 300
      ? "moderate"
      : "good"
    : "loading";

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark Overlay to Enhance Visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Background Smoke Effect */}
      {airQualityLevel === "severe" && (
        <div className="absolute inset-0 bg-black opacity-50 animate-pulse"></div>
      )}

      <h1 className="text-4xl font-bold relative">{location}</h1>
      <p className="text-lg mt-2 relative">Welcome to {location}, Bangalore</p>
      <p className="text-md relative">Predicted Pollution for {year}</p>

      {isLoading ? (
        <p className="text-gray-400 mt-5 relative">Loading Pollution Data...</p>
      ) : (
        <div className="mt-5 grid grid-cols-3 gap-4 text-center text-lg relative">
          <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            CO: {pollutionData.CO.toFixed(2)}
          </motion.div>
          <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            NO2: {pollutionData.NO2.toFixed(2)}
          </motion.div>
          <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            SO2: {pollutionData.SO2.toFixed(2)}
          </motion.div>
          <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            O3: {pollutionData.O3.toFixed(2)}
          </motion.div>
          <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            PM2.5: {pollutionData.PM2_5.toFixed(2)}
          </motion.div>
          <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            PM10: {pollutionData.PM10.toFixed(2)}
          </motion.div>
        </div>
      )}

      {/* Next Year Button */}
      <button
        className="mt-10 flex items-center gap-2 bg-gray-800 px-5 py-3 rounded-lg hover:bg-gray-600 transition relative"
        onClick={() => setYear(year + 1)}
      >
        Next Year ({year + 1}) <ArrowRight />
      </button>
    </div>
  );
}
