// "use client"

// import { useState, useEffect } from "react"
// import { motion } from "framer-motion"
// import { ArrowRight, ArrowLeft, Info } from "lucide-react"
// import { Doughnut, Line } from "react-chartjs-2"
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
// } from "chart.js"
// import { Button } from "../../../components/ui/Button"; // Material UI

// import { Card } from "@/components/ui/card"
// import { Skeleton } from "@/components/ui/skeleton"
// import { Badge } from "../../../components/ui/Badge"

// // Register ChartJS components
// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title)

// export default function LocationPage({ params }) {
//   const { location } = params
//   const [year, setYear] = useState(2026)
//   const [pollutionData, setPollutionData] = useState(null)
//   const [isLoading, setIsLoading] = useState(true)
//   const [historicalData, setHistoricalData] = useState(null)
//   const [showInfo, setShowInfo] = useState(false)

//   // Fetch pollution data
//   useEffect(() => {
//     setIsLoading(true)

//     // Simulate API call
//     setTimeout(() => {
//       setPollutionData({
//         CO: Math.random() * 10,
//         NO2: Math.random() * 150,
//         SO2: Math.random() * 100,
//         O3: Math.random() * 200,
//         PM2_5: Math.random() * 300,
//         PM10: Math.random() * 500,
//       })

//       setHistoricalData({
//         labels: [year - 5, year - 4, year - 3, year - 2, year - 1, year],
//         datasets: [
//           {
//             label: "PM2.5",
//             data: Array(6).fill(0).map(() => Math.random() * 300),
//             borderColor: "rgba(255, 99, 132, 1)",
//             backgroundColor: "rgba(255, 99, 132, 0.2)",
//           },
//           {
//             label: "PM10",
//             data: Array(6).fill(0).map(() => Math.random() * 500),
//             borderColor: "rgba(54, 162, 235, 1)",
//             backgroundColor: "rgba(54, 162, 235, 0.2)",
//           },
//         ],
//       })

//       setIsLoading(false)
//     }, 1000)
//   }, [location, year])

//   return (
//     <div className="relative min-h-screen flex flex-col items-center text-white">
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden" />

//       <div className="container mx-auto px-4 py-8 relative z-20">
//         <header className="text-center mb-8">
//           <motion.h1 className="text-5xl font-bold mb-2" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//             {decodeURIComponent(location)}
//           </motion.h1>
//           <p className="text-xl text-gray-300">Bangalore, India</p>

//           <div className="flex items-center justify-center mt-4 gap-2">
//             <Badge className="bg-green-500 text-white px-3 py-1">Air Quality: Good</Badge>
//             <Button variant="ghost" size="icon" onClick={() => setShowInfo(!showInfo)}>
//               <Info size={18} />
//             </Button>
//           </div>
//         </header>
//       </div>
//     </div>
//   )
// }



"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../../../components/ui/Button";
import { Card } from "@/components/ui/card";
import { Badge } from "../../../components/ui/Badge";

export default function LocationPage({ location }) {
  const [year, setYear] = useState(2027);
  const [factories, setFactories] = useState(3);
  const [pollutionData, setPollutionData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ year, factories }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPollutionData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, [location, year]);

  return (
    <div className="relative min-h-screen flex flex-col items-center text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden" />

      <div className="container mx-auto px-4 py-8 relative z-20">
        <header className="text-center mb-8">
          <motion.h1 className="text-5xl font-bold mb-2">{decodeURIComponent(location)}</motion.h1>
          <p className="text-xl text-gray-300">Bangalore, India</p>
          <div className="flex items-center justify-center mt-4 gap-2">
            <Badge className="bg-green-500 text-white px-3 py-1">
              Air Quality: {pollutionData ? "Fetched" : "Loading..."}
            </Badge>
          </div>
        </header>

        {isLoading ? (
          <p className="text-gray-300">Loading pollution data...</p>
        ) : (
          <Card className="p-6 bg-opacity-10">
            <h2 className="text-2xl font-semibold mb-4">Pollution Levels</h2>
            <p>CO: {pollutionData.CO}</p>
            <p>NO2: {pollutionData.NO2}</p>
            <p>O3: {pollutionData.O3}</p>
            <p>SO2: {pollutionData.SO2}</p>
            <p>PM2.5: {pollutionData["PM2.5"]}</p>
            <p>PM10: {pollutionData.PM10}</p>
          </Card>
        )}
      </div>
    </div>
  );
}
