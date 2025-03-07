
// "use client"

// import { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
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
//   RadialLinearScale,
//   BarElement,
// } from "chart.js"
// import { Doughnut, Line, PolarArea, Bar } from "react-chartjs-2"
// import {
//   Factory,
//   Wind,
//   Droplets,
//   Thermometer,
//   AlertTriangle,
//   ArrowLeft,
//   ArrowRight,
//   Info,
//   Cloud,
//   Sun,
// } from "lucide-react"
// import confetti from "canvas-confetti"

// // Register ChartJS components
// ChartJS.register(
//   ArcElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   RadialLinearScale,
//   BarElement,
// )

// // Factory data with unique IDs

// const factoriesData = [
//   { id: "factory-1", industry: "Steel Manufacturing", materials_used: ["Iron Ore", "Coal", "Limestone"], AQI_impact: 65, icon: "factory" },
//   { id: "factory-2", industry: "Cement Factory", materials_used: ["Limestone", "Clay", "Gypsum"], AQI_impact: 68, icon: "factory" },
//   { id: "factory-3", industry: "Textile Industry", materials_used: ["Cotton", "Polyester", "Dyes", "Chemicals"], AQI_impact: 50, icon: "factory" },
//   { id: "factory-4", industry: "Paper Mill", materials_used: ["Wood Pulp", "Water", "Bleaching Chemicals"], AQI_impact: 55, icon: "factory" },
//   { id: "factory-5", industry: "Plastic Manufacturing", materials_used: ["Petroleum", "Polymers", "Dyes"], AQI_impact: 60, icon: "factory" },
//   { id: "factory-6", industry: "Oil Refinery", materials_used: ["Crude Oil", "Catalysts", "Chemicals"], AQI_impact: 70, icon: "factory" },
//   { id: "factory-7", industry: "Car Manufacturing", materials_used: ["Steel", "Plastic", "Glass", "Rubber"], AQI_impact: 58, icon: "factory" },
//   { id: "factory-8", industry: "Electronics Factory", materials_used: ["Silicon", "Copper", "Lithium", "Gold"], AQI_impact: 45, icon: "factory" },
//   { id: "factory-9", industry: "Chemical Industry", materials_used: ["Petrochemicals", "Solvents", "Acids"], AQI_impact: 66, icon: "factory" },
//   { id: "factory-10", industry: "Coal Power Plant", materials_used: ["Coal", "Water", "Steam"], AQI_impact: 69, icon: "factory" },
//   { id: "factory-11", industry: "Automobile Plant", materials_used: ["Steel", "Glass", "Rubber"], AQI_impact: 57, icon: "factory" },
//   { id: "factory-12", industry: "Shipbuilding Industry", materials_used: ["Steel", "Aluminum", "Welding Materials"], AQI_impact: 63, icon: "factory" },
//   { id: "factory-13", industry: "Aerospace Industry", materials_used: ["Titanium", "Carbon Fiber", "Aluminum"], AQI_impact: 52, icon: "factory" },
//   { id: "factory-14", industry: "Battery Manufacturing", materials_used: ["Lithium", "Nickel", "Graphite"], AQI_impact: 47, icon: "factory" },
//   { id: "factory-15", industry: "Pharmaceuticals", materials_used: ["Active Ingredients", "Chemicals", "Solvents"], AQI_impact: 53, icon: "factory" },
//   { id: "factory-16", industry: "Fertilizer Industry", materials_used: ["Ammonia", "Phosphate", "Potash"], AQI_impact: 64, icon: "factory" },
//   { id: "factory-17", industry: "Solar Panel Manufacturing", materials_used: ["Silicon", "Glass", "Aluminum"], AQI_impact: 42, icon: "factory" },
//   { id: "factory-18", industry: "Wind Turbine Factory", materials_used: ["Steel", "Fiberglass", "Copper"], AQI_impact: 40, icon: "factory" },
//   { id: "factory-19", industry: "Hydroelectric Components", materials_used: ["Steel", "Turbine Blades", "Concrete"], AQI_impact: 39, icon: "factory" },
//   { id: "factory-20", industry: "Food Processing", materials_used: ["Grains", "Dairy", "Preservatives"], AQI_impact: 44, icon: "factory" },
//   { id: "factory-21", industry: "Meat Processing", materials_used: ["Livestock", "Water", "Preservatives"], AQI_impact: 60, icon: "factory" },
//   { id: "factory-22", industry: "Beverage Production", materials_used: ["Water", "Sugar", "Flavors"], AQI_impact: 35, icon: "factory" },
//   { id: "factory-23", industry: "Dairy Industry", materials_used: ["Milk", "Bacteria Cultures", "Enzymes"], AQI_impact: 38, icon: "factory" },
//   { id: "factory-24", industry: "Baking Industry", materials_used: ["Flour", "Sugar", "Yeast"], AQI_impact: 33, icon: "factory" },
//   { id: "factory-25", industry: "Fishing Industry", materials_used: ["Fish", "Ice", "Water"], AQI_impact: 41, icon: "factory" },
//   { id: "factory-26", industry: "Furniture Manufacturing", materials_used: ["Wood", "Metal", "Glue"], AQI_impact: 55, icon: "factory" },
//   { id: "factory-27", industry: "Rubber Processing", materials_used: ["Natural Rubber", "Sulfur", "Carbon Black"], AQI_impact: 58, icon: "factory" },
//   { id: "factory-28", industry: "Glass Manufacturing", materials_used: ["Silica", "Sodium Carbonate", "Lime"], AQI_impact: 48, icon: "factory" },
//   { id: "factory-29", industry: "Brick Manufacturing", materials_used: ["Clay", "Water", "Heat"], AQI_impact: 50, icon: "factory" },
//   { id: "factory-30", industry: "Ceramics Industry", materials_used: ["Clay", "Glazes", "Heat"], AQI_impact: 46, icon: "factory" },
//   { id: "factory-31", industry: "Jewelry Manufacturing", materials_used: ["Gold", "Silver", "Gems"], AQI_impact: 39, icon: "factory" },
//   { id: "factory-32", industry: "Textile Dyeing", materials_used: ["Dyes", "Water", "Chemicals"], AQI_impact: 59, icon: "factory" },
//   { id: "factory-33", industry: "Pesticide Manufacturing", materials_used: ["Chemicals", "Solvents", "Preservatives"], AQI_impact: 67, icon: "factory" },
//   { id: "factory-34", industry: "Leather Tanning", materials_used: ["Hides", "Tannins", "Dyes"], AQI_impact: 62, icon: "factory" },
//   { id: "factory-35", industry: "Printing Industry", materials_used: ["Ink", "Paper", "Solvents"], AQI_impact: 43, icon: "factory" },
//   { id: "factory-36", industry: "Toy Manufacturing", materials_used: ["Plastic", "Paint", "Metal"], AQI_impact: 51, icon: "factory" },
//   { id: "factory-37", industry: "Packaging Industry", materials_used: ["Plastic", "Paper", "Cardboard"], AQI_impact: 45, icon: "factory" },
//   { id: "factory-38", industry: "Biotechnology", materials_used: ["Cells", "Reagents", "Nutrients"], AQI_impact: 50, icon: "factory" },
//   { id: "factory-39", industry: "3D Printing", materials_used: ["Polymers", "Resin", "Metal Powders"], AQI_impact: 36, icon: "factory" },
//   { id: "factory-40", industry: "Nanotechnology", materials_used: ["Nanoparticles", "Chemicals", "Metals"], AQI_impact: 48, icon: "factory" },
//   { id: "factory-41", industry: "Pharmaceutical Packaging", materials_used: ["Plastic", "Glass", "Aluminum"], AQI_impact: 49, icon: "factory" },
//   { id: "factory-42", industry: "Renewable Energy Components", materials_used: ["Steel", "Silicon", "Copper"], AQI_impact: 38, icon: "factory" },
//   { id: "factory-43", industry: "Textile Recycling", materials_used: ["Cotton", "Polyester", "Dyes"], AQI_impact: 35, icon: "factory" },
//   { id: "factory-44", industry: "Waste Management", materials_used: ["Plastic", "Metal", "Electronics"], AQI_impact: 42, icon: "factory" },
//   { id: "factory-45", industry: "Agricultural Equipment", materials_used: ["Steel", "Rubber", "Hydraulics"], AQI_impact: 53, icon: "factory" },
//   { id: "factory-46", industry: "Medical Equipment", materials_used: ["Plastic", "Metal", "Electronics"], AQI_impact: 40, icon: "factory" },
//   { id: "factory-47", industry: "Sports Equipment", materials_used: ["Carbon Fiber", "Rubber", "Plastic"], AQI_impact: 46, icon: "factory" },
//   { id: "factory-48", industry: "Railway Manufacturing", materials_used: ["Steel", "Concrete", "Electronics"], AQI_impact: 60, icon: "factory" },
//   { id: "factory-49", industry: "Electric Vehicle Battery Plant", materials_used: ["Lithium", "Nickel", "Graphite"], AQI_impact: 55, icon: "factory" }
// ];


// function FactoryCard({ factory, onDragStart, onDragEnd, isDragging }) {
//   // Calculate color based on impact
//   const getImpactColor = (impact) => {
//     if (impact > 80) return "from-red-500 to-red-700"
//     if (impact > 60) return "from-yellow-500 to-yellow-700"
//     return "from-green-500 to-green-700"
//   }

//   return (
//     <motion.div
//       className={`relative cursor-grab active:cursor-grabbing p-4 rounded-lg mb-3 shadow-lg ${
//         isDragging ? "z-50 shadow-xl" : ""
//       } bg-gradient-to-r ${getImpactColor(factory.AQI_impact)}`}
//       whileHover={{ scale: 1.02 }}
//       whileTap={{ scale: 0.98 }}
//       drag
//       dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
//       onDragStart={onDragStart}
//       onDragEnd={onDragEnd}
//       animate={{
//         boxShadow: isDragging
//           ? "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
//           : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
//       }}
//     >
//       <div className="flex items-center gap-3">
//         <div className="bg-white bg-opacity-20 p-2 rounded-full">
//           <Factory className="w-5 h-5 text-white" />
//         </div>
//         <div className="flex-1">
//           <h3 className="font-bold text-white">{factory.industry}</h3>
//           <div className="flex items-center mt-1">
//             <div className="h-2 bg-black bg-opacity-20 rounded-full w-full">
//               <div className="h-2 bg-white rounded-full" style={{ width: `${factory.AQI_impact}%` }} />
//             </div>
//             <span className="ml-2 text-xs font-bold text-white">{factory.AQI_impact}%</span>
//           </div>
//         </div>
//       </div>
//       <div className="mt-2 text-xs text-white">
//         <p>
//           Materials: {factory.materials_used.slice(0, 2).join(", ")}
//           {factory.materials_used.length > 2 ? "..." : ""}
//         </p>
//       </div>
//     </motion.div>
//   )
// }

// function LocationPage({ location = "Koramangala" }) {
//   const [year, setYear] = useState(2026)
//   const [pollutionData, setPollutionData] = useState(null)
//   const [isLoading, setIsLoading] = useState(true)
//   const [historicalData, setHistoricalData] = useState(null)
//   const [showInfo, setShowInfo] = useState(false)
//   const [availableFactories, setAvailableFactories] = useState(factoriesData)
//   const [selectedFactories, setSelectedFactories] = useState([])
//   const [draggedFactory, setDraggedFactory] = useState(null)
//   const [isDraggingOver, setIsDraggingOver] = useState(false)
//   const dropZoneRef = useRef(null)
//   const [chartType, setChartType] = useState("doughnut")
//   const [trendChartType, setTrendChartType] = useState("line")

//   // Fetch pollution data
//   useEffect(() => {
//     setIsLoading(true)

//     // Calculate pollution based on selected factories
//     const factoryImpact = selectedFactories.reduce((sum, factory) => sum + factory.AQI_impact, 0) / 100
//     const baseMultiplier = 1 + factoryImpact * 0.5

//     // Simulate API call
//     setTimeout(() => {
//       // Generate data based on selected factories
//       setPollutionData({
//         CO: Math.random() * 10 * baseMultiplier,
//         NO2: Math.random() * 150 * baseMultiplier,
//         SO2: Math.random() * 100 * baseMultiplier,
//         O3: Math.random() * 200 * baseMultiplier,
//         PM2_5: Math.random() * 300 * baseMultiplier,
//         PM10: Math.random() * 500 * baseMultiplier,
//       })

//       // Generate historical data with impact from factories
//       setHistoricalData({
//         labels: [year - 5, year - 4, year - 3, year - 2, year - 1, year],
//         datasets: [
//           {
//             label: "PM2.5",
//             data: Array(6)
//               .fill(0)
//               .map((_, i) => {
//                 // Base value increases with year
//                 const baseValue = 50 + i * 10
//                 // Add factory impact
//                 return baseValue * (1 + factoryImpact * 0.5)
//               }),
//             borderColor: "rgba(255, 99, 132, 1)",
//             backgroundColor: "rgba(255, 99, 132, 0.2)",
//           },
//           {
//             label: "PM10",
//             data: Array(6)
//               .fill(0)
//               .map((_, i) => {
//                 // Base value increases with year
//                 const baseValue = 100 + i * 15
//                 // Add factory impact
//                 return baseValue * (1 + factoryImpact * 0.5)
//               }),
//             borderColor: "rgba(54, 162, 235, 1)",
//             backgroundColor: "rgba(54, 162, 235, 0.2)",
//           },
//           {
//             label: "AQI Index",
//             data: Array(6)
//               .fill(0)
//               .map((_, i) => {
//                 // Base AQI starts at 100 and increases with year
//                 const baseAqi = 100 + i * 20
//                 // Add factory impact (more factories = higher AQI)
//                 return Math.min(300, baseAqi * (1 + factoryImpact * 0.3))
//               }),
//             borderColor: "rgba(75, 192, 192, 1)",
//             backgroundColor: "rgba(75, 192, 192, 0.2)",
//             borderDash: [5, 5],
//           },
//         ],
//       })

//       setIsLoading(false)
//     }, 1000)
//   }, [location, year, selectedFactories])

//   // Handle drag start
//   const handleDragStart = (factory) => {
//     setDraggedFactory(factory)
//   }

//   // Handle drag end
//   const handleDragEnd = (e, factory) => {
//     if (!dropZoneRef.current) return

//     const dropZoneRect = dropZoneRef.current.getBoundingClientRect()

//     // Check if dragged over drop zone
//     if (
//       e.clientX >= dropZoneRect.left &&
//       e.clientX <= dropZoneRect.right &&
//       e.clientY >= dropZoneRect.top &&
//       e.clientY <= dropZoneRect.bottom
//     ) {
//       // Move factory from available to selected
//       if (!selectedFactories.some((f) => f.id === factory.id)) {
//         setSelectedFactories([...selectedFactories, factory])
//         setAvailableFactories(availableFactories.filter((f) => f.id !== factory.id))

//         // Trigger confetti effect when dropping a factory
//         confetti({
//           particleCount: 100,
//           spread: 70,
//           origin: {
//             x: e.clientX / window.innerWidth,
//             y: e.clientY / window.innerHeight,
//           },
//         })
//       }
//     }

//     setDraggedFactory(null)
//     setIsDraggingOver(false)
//   }

//   // Handle removing a factory from selected
//   const handleRemoveFactory = (factory) => {
//     setSelectedFactories(selectedFactories.filter((f) => f.id !== factory.id))
//     setAvailableFactories([...availableFactories, factory])
//   }

//   // Check if dragging over drop zone
//   const handleDragOver = (e) => {
//     if (!dropZoneRef.current || !draggedFactory) return

//     const dropZoneRect = dropZoneRef.current.getBoundingClientRect()

//     if (
//       e.clientX >= dropZoneRect.left &&
//       e.clientX <= dropZoneRect.right &&
//       e.clientY >= dropZoneRect.top &&
//       e.clientY <= dropZoneRect.bottom
//     ) {
//       if (!isDraggingOver) setIsDraggingOver(true)
//     } else {
//       if (isDraggingOver) setIsDraggingOver(false)
//     }
//   }

//   // Determine Air Quality Effect
//   const getAirQualityLevel = () => {
//     if (!pollutionData) return { level: "loading", color: "bg-gray-500" }

//     if (pollutionData.PM2_5 > 250 || pollutionData.PM10 > 400) {
//       return { level: "Severe", color: "bg-red-600" }
//     } else if (pollutionData.PM2_5 > 150 || pollutionData.PM10 > 300) {
//       return { level: "Moderate", color: "bg-yellow-500" }
//     } else {
//       return { level: "Good", color: "bg-green-500" }
//     }
//   }

//   const airQuality = getAirQualityLevel()

//   // Calculate AQI index based on selected factories and pollution data
//   const calculateAQIIndex = () => {
//     if (!pollutionData) return { value: 0, category: "Unknown", color: "text-gray-500" }

//     // Base calculation from pollution data
//     const pm25Factor = (pollutionData.PM2_5 / 250) * 100
//     const pm10Factor = (pollutionData.PM10 / 400) * 100
//     const o3Factor = (pollutionData.O3 / 200) * 100
//     const no2Factor = (pollutionData.NO2 / 150) * 100
//     const so2Factor = (pollutionData.SO2 / 100) * 100
//     const coFactor = (pollutionData.CO / 10) * 100

//     // Factory impact
//     const factoryImpact =
//       selectedFactories.length > 0
//         ? selectedFactories.reduce((sum, factory) => sum + factory.AQI_impact, 0) / selectedFactories.length
//         : 0

//     // Calculate base AQI that increases with year
//     const yearFactor = (year - 2026) * 5
//     const baseAqi = 100 + yearFactor

//     // Calculate weighted AQI value with factory impact
//     let AQIValue =
//       (baseAqi +
//         (pm25Factor * 0.3 + pm10Factor * 0.25 + o3Factor * 0.15 + no2Factor * 0.1 + so2Factor * 0.1 + coFactor * 0.1)) *
//       (1 + factoryImpact * 0.01)

//     // Keep within 100-300 range
//     AQIValue = Math.max(100, Math.min(300, Math.round(AQIValue)))

//     // Determine category and color
//     let category, color
//     if (AQIValue <= 150) {
//       category = "Moderate"
//       color = "text-yellow-500"
//     } else if (AQIValue <= 200) {
//       category = "Unhealthy"
//       color = "text-red-500"
//     } else if (AQIValue <= 250) {
//       category = "Very Unhealthy"
//       color = "text-purple-500"
//     } else {
//       category = "Hazardous"
//       color = "text-red-700"
//     }

//     return { value: AQIValue, category, color }
//   }

//   const AQIIndex = calculateAQIIndex()

//   // Chart data for pollution distribution
//   const chartData = {
//     labels: ["CO", "NO2", "SO2", "O3", "PM2.5", "PM10"],
//     datasets: [
//       {
//         data: pollutionData
//           ? [
//               pollutionData.CO,
//               pollutionData.NO2,
//               pollutionData.SO2,
//               pollutionData.O3,
//               pollutionData.PM2_5,
//               pollutionData.PM10,
//             ]
//           : [],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.7)",
//           "rgba(54, 162, 235, 0.7)",
//           "rgba(255, 206, 86, 0.7)",
//           "rgba(75, 192, 192, 0.7)",
//           "rgba(153, 102, 255, 0.7)",
//           "rgba(255, 159, 64, 0.7)",
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   }

//   // Chart options
//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "right",
//         labels: {
//           color: "white",
//         },
//       },
//       tooltip: {
//         backgroundColor: "rgba(0, 0, 0, 0.7)",
//       },
//     },
//   }

//   // Line chart options
//   const lineChartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//         labels: {
//           color: "white",
//         },
//       },
//       title: {
//         display: true,
//         text: "Historical Pollution Trends",
//         color: "white",
//       },
//       tooltip: {
//         backgroundColor: "rgba(0, 0, 0, 0.7)",
//       },
//     },
//     scales: {
//       y: {
//         ticks: { color: "white" },
//         grid: { color: "rgba(255, 255, 255, 0.1)" },
//       },
//       x: {
//         ticks: { color: "white" },
//         grid: { color: "rgba(255, 255, 255, 0.1)" },
//       },
//     },
//   }

//   // Bar chart options (for trend alternative)
//   const barChartOptions = {
//     ...lineChartOptions,
//     scales: {
//       ...lineChartOptions.scales,
//       x: {
//         ...lineChartOptions.scales.x,
//         stacked: false,
//       },
//       y: {
//         ...lineChartOptions.scales.y,
//         stacked: false,
//       },
//     },
//   }

//   // Render the appropriate chart based on selected type
//   const renderPollutionChart = () => {
//     if (isLoading) {
//       return (
//         <div className="flex items-center justify-center h-64">
//           <div className="h-64 w-64 rounded-full bg-gray-700 animate-pulse"></div>
//         </div>
//       )
//     }

//     switch (chartType) {
//       case "doughnut":
//         return <Doughnut data={chartData} options={chartOptions} />
//       case "polar":
//         return <PolarArea data={chartData} options={chartOptions} />
//       default:
//         return <Doughnut data={chartData} options={chartOptions} />
//     }
//   }

//   // Render the appropriate trend chart
//   const renderTrendChart = () => {
//     if (isLoading || !historicalData) {
//       return <div className="h-64 w-full bg-gray-700 rounded-lg animate-pulse"></div>
//     }

//     switch (trendChartType) {
//       case "line":
//         return <Line data={historicalData} options={lineChartOptions} />
//       case "bar":
//         return <Bar data={historicalData} options={barChartOptions} />
//       default:
//         return <Line data={historicalData} options={lineChartOptions} />
//     }
//   }

//   return (
//     <div className="relative min-h-screen flex flex-col items-center text-white" onMouseMove={handleDragOver}>
//       {/* Background with gradient and particles */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
//         {/* Animated particles */}
//         <div className="absolute inset-0">
//           {Array.from({ length: 20 }).map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute rounded-full bg-white bg-opacity-10"
//               style={{
//                 width: Math.random() * 10 + 5,
//                 height: Math.random() * 10 + 5,
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, Math.random() * -100 - 50],
//                 opacity: [0, 0.5, 0],
//               }}
//               transition={{
//                 duration: Math.random() * 10 + 10,
//                 repeat: Number.POSITIVE_INFINITY,
//                 ease: "linear",
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Pollution effect overlay */}
//       {airQuality.level === "Severe" && (
//         <div className="absolute inset-0 bg-red-900 bg-opacity-20 animate-pulse z-10"></div>
//       )}

//       {/* Main content */}
//       <div className="container mx-auto px-4 py-8 relative z-20">
//         <header className="text-center mb-8">
//           <motion.h1
//             className="text-5xl font-bold mb-2"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             {location}
//           </motion.h1>
//           <p className="text-xl text-gray-300">Bangalore, India</p>

//           {/* AQI Index Display */}
//           <motion.div
//             className="mt-6 mb-4 flex flex-col items-center"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             <h2 className="text-xl font-semibold mb-2">Air Quality Index (AQI)</h2>
//             <div className="relative w-40 h-40 flex items-center justify-center mb-2">
//               <svg className="w-full h-full" viewBox="0 0 100 100">
//                 <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
//                 <circle
//                   cx="50"
//                   cy="50"
//                   r="45"
//                   fill="none"
//                   stroke="url(#AQIGradient)"
//                   strokeWidth="10"
//                   strokeDasharray={`${Math.min(283, (283 * AQIIndex.value) / 500)} 283`}
//                   strokeDashoffset="0"
//                   transform="rotate(-90 50 50)"
//                 />
//                 <defs>
//                   <linearGradient id="AQIGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor="#4ade80" />
//                     <stop offset="25%" stopColor="#facc15" />
//                     <stop offset="50%" stopColor="#f97316" />
//                     <stop offset="75%" stopColor="#ef4444" />
//                     <stop offset="100%" stopColor="#7f1d1d" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//               <div className="absolute inset-0 flex flex-col items-center justify-center">
//                 <span className={`text-4xl font-bold ${AQIIndex.color}`}>{AQIIndex.value}</span>
//                 <span className="text-xs text-gray-300">AQI Index</span>
//               </div>
//             </div>
//             <div className={`text-lg font-semibold ${AQIIndex.color}`}>{AQIIndex.category}</div>
//             <div className="flex items-center mt-2 gap-2">
//               <span className={`${airQuality.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
//                 Air Quality: {airQuality.level}
//               </span>
//               <button className="p-1 text-gray-300 hover:text-white" onClick={() => setShowInfo(!showInfo)}>
//                 <Info className="w-5 h-5" />
//               </button>
//             </div>
//           </motion.div>

//           <AnimatePresence>
//             {showInfo && (
//               <motion.div
//                 className="mt-4 bg-black bg-opacity-50 p-4 rounded-lg max-w-md mx-auto"
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//               >
//                 <h3 className="font-semibold mb-2">About Air Quality Index (AQI):</h3>
//                 <ul className="text-sm text-left">
//                   <li>
//                     <span className="text-green-400 font-bold">0-50 (Good):</span> Air quality is satisfactory, poses
//                     little or no risk.
//                   </li>
//                   <li>
//                     <span className="text-yellow-400 font-bold">51-100 (Moderate):</span> Air quality is acceptable but
//                     may cause moderate health concerns for sensitive individuals.
//                   </li>
//                   <li>
//                     <span className="text-orange-400 font-bold">101-150 (Unhealthy for Sensitive Groups):</span> Members
//                     of sensitive groups may experience health effects.
//                   </li>
//                   <li>
//                     <span className="text-red-400 font-bold">151-200 (Unhealthy):</span> Everyone may begin to
//                     experience health effects.
//                   </li>
//                   <li>
//                     <span className="text-purple-400 font-bold">201-300 (Very Unhealthy):</span> Health alert: everyone
//                     may experience more serious health effects.
//                   </li>
//                   <li>
//                     <span className="text-red-700 font-bold">301+ (Hazardous):</span> Health warnings of emergency
//                     conditions. The entire population is likely to be affected.
//                   </li>
//                 </ul>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </header>

//         <div className="flex flex-col lg:flex-row gap-8 mb-8">
//           {/* Year selector */}
//           <div className="bg-black bg-opacity-50 p-6 rounded-xl flex-1 flex flex-col items-center justify-center">
//             <h2 className="text-2xl font-semibold mb-4">Prediction Year</h2>
//             <div className="flex items-center gap-4">
//               <button
//                 className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
//                 onClick={() => setYear(year - 1)}
//                 disabled={year <= 2026}
//               >
//                 <ArrowLeft className="w-5 h-5" />
//                 Previous
//               </button>

//               <span className="text-3xl font-bold">{year}</span>

//               <button
//                 className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
//                 onClick={() => setYear(year + 1)}
//                 disabled={year >= 2050}
//               >
//                 Next
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//             </div>
//           </div>

//           {/* Chart with type selector */}
//           <div className="bg-black bg-opacity-50 p-6 rounded-xl flex-1">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-2xl font-semibold">Pollution Distribution</h2>
//               <div className="flex gap-2">
//                 <button
//                   className={`px-2 py-1 rounded text-xs ${chartType === "doughnut" ? "bg-purple-600" : "bg-gray-700"}`}
//                   onClick={() => setChartType("doughnut")}
//                 >
//                   Doughnut
//                 </button>
//                 <button
//                   className={`px-2 py-1 rounded text-xs ${chartType === "polar" ? "bg-purple-600" : "bg-gray-700"}`}
//                   onClick={() => setChartType("polar")}
//                 >
//                   Polar
//                 </button>
//               </div>
//             </div>
//             <div className="h-96">{renderPollutionChart()}</div>
//           </div>
//         </div>

//         {/* Pollution metrics */}
//         <div className="bg-black bg-opacity-50 p-6 rounded-xl mb-8">
//           <h2 className="text-2xl font-semibold mb-6 text-center">Pollution Metrics</h2>

//           {isLoading ? (
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               {Array.from({ length: 6 }).map((_, i) => (
//                 <div key={i} className="h-20 bg-gray-700 rounded-lg animate-pulse"></div>
//               ))}
//             </div>
//           ) : (
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//               {Object.entries(pollutionData).map(([key, value]) => {
//                 // Determine icon based on pollutant type
//                 let Icon = AlertTriangle
//                 if (key === "CO" || key === "NO2" || key === "SO2") Icon = Wind
//                 if (key === "O3") Icon = Thermometer
//                 if (key.includes("PM")) Icon = Droplets

//                 return (
//                   <motion.div
//                     key={key}
//                     className="bg-white bg-opacity-10 p-4 rounded-lg"
//                     whileHover={{ scale: 1.05 }}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: (Number.parseInt(key.charCodeAt(0)) % 6) * 0.1 }}
//                   >
//                     <div className="flex items-center gap-3">
//                       <div className="p-2 rounded-full bg-white bg-opacity-10">
//                         <Icon className="w-5 h-5" />
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-medium text-gray-300">{key.replace("_", ".")}</h3>
//                         <p className="text-2xl font-bold">{value.toFixed(2)}</p>
//                       </div>
//                     </div>
//                     <div className="mt-2 w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
//                       <motion.div
//                         className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
//                         initial={{ width: 0 }}
//                         animate={{ width: `${Math.min(100, value / 5)}%` }}
//                         transition={{ duration: 1, delay: 0.5 }}
//                       />
//                     </div>
//                   </motion.div>
//                 )
//               })}
//             </div>
//           )}
//         </div>

//         {/* Historical trend chart with type selector */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
//           {/* Historical trend chart */}
//           <div className="lg:col-span-2 bg-black bg-opacity-50 p-6 rounded-xl">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-2xl font-semibold">Historical Trends</h2>
//               <div className="flex gap-2">
//                 <button
//                   className={`px-2 py-1 rounded text-xs ${trendChartType === "line" ? "bg-purple-600" : "bg-gray-700"}`}
//                   onClick={() => setTrendChartType("line")}
//                 >
//                   Line
//                 </button>
//                 <button
//                   className={`px-2 py-1 rounded text-xs ${trendChartType === "bar" ? "bg-purple-600" : "bg-gray-700"}`}
//                   onClick={() => setTrendChartType("bar")}
//                 >
//                   Bar
//                 </button>
//               </div>
//             </div>
//             <div className="h-96">{renderTrendChart()}</div>
//           </div>

//           {/* Weather Information Card */}
//           <div className="bg-black bg-opacity-50 p-6 rounded-xl">
//             <h2 className="text-2xl font-semibold mb-6">Current Weather</h2>
//             <div className="space-y-6">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   <div className="p-3 bg-white bg-opacity-10 rounded-lg">
//                     <Cloud className="w-8 h-8" />
//                   </div>
//                   <div>
//                     <span className="text-4xl font-bold">25°C</span>
//                     <p className="text-gray-400">Mist</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 gap-4">
//                 <div className="flex items-center justify-between p-4 bg-white bg-opacity-5 rounded-lg">
//                   <div className="flex items-center gap-3">
//                     <Droplets className="w-5 h-5 text-blue-400" />
//                     <span>Humidity</span>
//                   </div>
//                   <span className="font-semibold">51%</span>
//                 </div>

//                 <div className="flex items-center justify-between p-4 bg-white bg-opacity-5 rounded-lg">
//                   <div className="flex items-center gap-3">
//                     <Wind className="w-5 h-5 text-gray-400" />
//                     <span>Wind Speed</span>
//                   </div>
//                   <span className="font-semibold">9 km/h</span>
//                 </div>

//                 <div className="flex items-center justify-between p-4 bg-white bg-opacity-5 rounded-lg">
//                   <div className="flex items-center gap-3">
//                     <Sun className="w-5 h-5 text-yellow-400" />
//                     <span>UV Index</span>
//                   </div>
//                   <span className="font-semibold">3</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Factories Drag and Drop Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//           {/* Available Factories */}
//           <div className="bg-black bg-opacity-50 p-6 rounded-xl">
//             <h2 className="text-2xl font-semibold mb-6">Available Factories</h2>
//             <div className="max-h-96 overflow-y-auto pr-2 factory-list">
//               <AnimatePresence>
//                 {availableFactories.map((factory) => (
//                   <motion.div
//                     key={factory.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, scale: 0.8 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <FactoryCard
//                       factory={factory}
//                       onDragStart={() => handleDragStart(factory)}
//                       onDragEnd={(e) => handleDragEnd(e, factory)}
//                       isDragging={draggedFactory?.id === factory.id}
//                     />
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Drop Zone for Factories */}
//           <div
//             ref={dropZoneRef}
//             className={`bg-black bg-opacity-50 p-6 rounded-xl relative overflow-hidden transition-all duration-300 ${
//               isDraggingOver ? "ring-4 ring-purple-500 ring-opacity-70" : ""
//             }`}
//           >
//             {/* This div will be replaced with your background image */}
//             <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 z-0">
//               {/* Your background image will go here */}
//             </div>

//             <div className="relative z-10">
//               <h2 className="text-2xl font-semibold mb-6">Selected Factories</h2>

//               {/* Drag indicator */}
//               {isDraggingOver && (
//                 <motion.div
//                   className="absolute inset-0 bg-purple-500 bg-opacity-20 z-0 pointer-events-none"
//                   animate={{ opacity: [0.2, 0.3, 0.2] }}
//                   transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
//                 />
//               )}

//               {/* Empty state */}
//               {selectedFactories.length === 0 && !isDraggingOver && (
//                 <div className="flex flex-col items-center justify-center h-64 text-center text-gray-400">
//                   <Factory className="w-16 h-16 mb-4 opacity-50" />
//                   <p className="text-lg">Drag factories here to see their impact</p>
//                 </div>
//               )}

//               {/* Selected factories */}
//               <div className="max-h-96 overflow-y-auto pr-2">
//                 <AnimatePresence>
//                   {selectedFactories.map((factory) => (
//                     <motion.div
//                       key={factory.id}
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, x: 100 }}
//                       className="relative"
//                     >
//                       <FactoryCard
//                         factory={factory}
//                         onDragStart={() => handleDragStart(factory)}
//                         onDragEnd={(e) => handleDragEnd(e, factory)}
//                         isDragging={draggedFactory?.id === factory.id}
//                       />
//                       <button
//                         className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-70 hover:opacity-100"
//                         onClick={() => handleRemoveFactory(factory)}
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16"
//                           height="16"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         >
//                           <line x1="18" y1="6" x2="6" y2="18"></line>
//                           <line x1="6" y1="6" x2="18" y2="18"></line>
//                         </svg>
//                       </button>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </div>

//               {/* Impact summary */}
//               {selectedFactories.length > 0 && (
//                 <motion.div
//                   className="mt-4 p-3 bg-white bg-opacity-10 rounded-lg"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                 >
//                   <h3 className="font-semibold mb-2">Factory Impact</h3>
//                   <div className="flex items-center mb-2">
//                     <div className="w-full bg-gray-700 h-2 rounded-full">
//                       <div
//                         className="h-2 rounded-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"
//                         style={{
//                           width: `${Math.min(100, selectedFactories.reduce((sum, f) => sum + f.AQI_impact, 0) / selectedFactories.length)}%`,
//                         }}
//                       />
//                     </div>
//                     <span className="ml-2 text-sm font-bold">
//                       {selectedFactories.length > 0
//                         ? Math.round(
//                             selectedFactories.reduce((sum, f) => sum + f.AQI_impact, 0) / selectedFactories.length,
//                           )
//                         : 0}
//                       %
//                     </span>
//                   </div>
//                   <div className="text-sm">
//                     <div className="flex justify-between">
//                       <span>AQI Contribution:</span>
//                       <span className={AQIIndex.color}>
//                         +{Math.round(AQIIndex.value * (selectedFactories.length / 40))} points
//                       </span>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LocationPage



"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  RadialLinearScale,
  BarElement,
} from "chart.js"
import { Doughnut, Line, PolarArea, Bar } from "react-chartjs-2"
import {
  Factory,
  Wind,
  Droplets,
  Thermometer,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Info,
  Cloud,
  Sun,
} from "lucide-react"
import confetti from "canvas-confetti"

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  RadialLinearScale,
  BarElement,
)

// Factory data with unique IDs
const factoriesData = [
  { id: "factory-1", industry: "Steel Manufacturing", materials_used: ["Iron Ore", "Coal", "Limestone"], AQI_impact: 65, icon: "factory" },
  { id: "factory-2", industry: "Cement Factory", materials_used: ["Limestone", "Clay", "Gypsum"], AQI_impact: 68, icon: "factory" },
  { id: "factory-3", industry: "Textile Industry", materials_used: ["Cotton", "Polyester", "Dyes", "Chemicals"], AQI_impact: 50, icon: "factory" },
  { id: "factory-4", industry: "Paper Mill", materials_used: ["Wood Pulp", "Water", "Bleaching Chemicals"], AQI_impact: 55, icon: "factory" },
  { id: "factory-5", industry: "Plastic Manufacturing", materials_used: ["Petroleum", "Polymers", "Dyes"], AQI_impact: 60, icon: "factory" },
  { id: "factory-6", industry: "Oil Refinery", materials_used: ["Crude Oil", "Catalysts", "Chemicals"], AQI_impact: 70, icon: "factory" },
  { id: "factory-7", industry: "Car Manufacturing", materials_used: ["Steel", "Plastic", "Glass", "Rubber"], AQI_impact: 58, icon: "factory" },
  { id: "factory-8", industry: "Electronics Factory", materials_used: ["Silicon", "Copper", "Lithium", "Gold"], AQI_impact: 45, icon: "factory" },
  { id: "factory-9", industry: "Chemical Industry", materials_used: ["Petrochemicals", "Solvents", "Acids"], AQI_impact: 66, icon: "factory" },
  { id: "factory-10", industry: "Coal Power Plant", materials_used: ["Coal", "Water", "Steam"], AQI_impact: 69, icon: "factory" },
];

function FactoryCard({ factory, onDragStart, onDragEnd, isDragging }) {
  // Calculate color based on impact
  const getImpactColor = (impact) => {
    if (impact > 80) return "from-red-500 to-red-700"
    if (impact > 60) return "from-yellow-500 to-yellow-700"
    return "from-green-500 to-green-700"
  }

  return (
    <motion.div
      className={`relative cursor-grab active:cursor-grabbing p-4 rounded-lg mb-3 shadow-lg ${isDragging ? "z-50 shadow-xl" : ""
        } bg-gradient-to-r ${getImpactColor(factory.AQI_impact)}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      animate={{
        boxShadow: isDragging
          ? "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div className="flex items-center gap-3">
        <div className="bg-white bg-opacity-20 p-2 rounded-full">
          <Factory className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-white">{factory.industry}</h3>
          <div className="flex items-center mt-1">
            <div className="h-2 bg-black bg-opacity-20 rounded-full w-full">
              <div className="h-2 bg-white rounded-full" style={{ width: `${factory.AQI_impact}%` }} />
            </div>
            <span className="ml-2 text-xs font-bold text-white">{factory.AQI_impact}%</span>
          </div>
        </div>
      </div>
      <div className="mt-2 text-xs text-white">
        <p>
          Materials: {factory.materials_used.slice(0, 2).join(", ")}
          {factory.materials_used.length > 2 ? "..." : ""}
        </p>
      </div>
    </motion.div>
  )
}

function LocationPage({ location = "Koramangala" }) {
  const [year, setYear] = useState(2026)
  const [pollutionData, setPollutionData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [historicalData, setHistoricalData] = useState(null)
  const [showInfo, setShowInfo] = useState(false)
  const [availableFactories, setAvailableFactories] = useState(factoriesData)
  const [selectedFactories, setSelectedFactories] = useState([])
  const [draggedFactory, setDraggedFactory] = useState(null)
  const [isDraggingOver, setIsDraggingOver] = useState(false)
  const dropZoneRef = useRef(null)
  const [chartType, setChartType] = useState("doughnut")
  const [trendChartType, setTrendChartType] = useState("line")

  // Fetch pollution data
  useEffect(() => {
    setIsLoading(true)

    // Calculate pollution based on selected factories
    const factoryImpact = selectedFactories.reduce((sum, factory) => sum + factory.AQI_impact, 0) / 100
    const baseMultiplier = 1 + factoryImpact * 0.5

    // Simulate API call
    setTimeout(() => {
      // Generate data based on selected factories
      setPollutionData({
        CO: Math.random() * 10 * baseMultiplier,
        NO2: Math.random() * 150 * baseMultiplier,
        SO2: Math.random() * 100 * baseMultiplier,
        O3: Math.random() * 200 * baseMultiplier,
        PM2_5: Math.random() * 300 * baseMultiplier,
        PM10: Math.random() * 500 * baseMultiplier,
      })

      // Generate historical data with impact from factories
      setHistoricalData({
        labels: [year - 5, year - 4, year - 3, year - 2, year - 1, year],
        datasets: [
          {
            label: "PM2.5",
            data: Array(6)
              .fill(0)
              .map((_, i) => {
                // Base value increases with year
                const baseValue = 50 + i * 10
                // Add factory impact
                return baseValue * (1 + factoryImpact * 0.5)
              }),
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
          },
          {
            label: "PM10",
            data: Array(6)
              .fill(0)
              .map((_, i) => {
                // Base value increases with year
                const baseValue = 100 + i * 15
                // Add factory impact
                return baseValue * (1 + factoryImpact * 0.5)
              }),
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
          },
          {
            label: "AQI Index",
            data: Array(6)
              .fill(0)
              .map((_, i) => {
                // Base AQI starts at 100 and increases with year
                const baseAqi = 100 + i * 20
                // Add factory impact (more factories = higher AQI)
                return Math.min(300, baseAqi * (1 + factoryImpact * 0.3))
              }),
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderDash: [5, 5],
          },
        ],
      })

      setIsLoading(false)
    }, 1000)
  }, [location, year, selectedFactories])

  // Handle drag start
  const handleDragStart = (factory) => {
    setDraggedFactory(factory)
  }

  // Handle drag end
  const handleDragEnd = (e, factory) => {
    if (!dropZoneRef.current) return

    const dropZoneRect = dropZoneRef.current.getBoundingClientRect()

    // Check if dragged over drop zone
    if (
      e.clientX >= dropZoneRect.left &&
      e.clientX <= dropZoneRect.right &&
      e.clientY >= dropZoneRect.top &&
      e.clientY <= dropZoneRect.bottom
    ) {
      // Move factory from available to selected
      if (!selectedFactories.some((f) => f.id === factory.id)) {
        setSelectedFactories([...selectedFactories, factory])
        setAvailableFactories(availableFactories.filter((f) => f.id !== factory.id))

        // Trigger confetti effect when dropping a factory
        confetti({
          particleCount: 100,
          spread: 70,
          origin: {
            x: e.clientX / window.innerWidth,
            y: e.clientY / window.innerHeight,
          },
        })
      }
    }

    setDraggedFactory(null)
    setIsDraggingOver(false)
  }

  // Handle removing a factory from selected
  const handleRemoveFactory = (factory) => {
    setSelectedFactories(selectedFactories.filter((f) => f.id !== factory.id))
    setAvailableFactories([...availableFactories, factory])
  }

  // Check if dragging over drop zone
  const handleDragOver = (e) => {
    if (!dropZoneRef.current || !draggedFactory) return

    const dropZoneRect = dropZoneRef.current.getBoundingClientRect()

    if (
      e.clientX >= dropZoneRect.left &&
      e.clientX <= dropZoneRect.right &&
      e.clientY >= dropZoneRect.top &&
      e.clientY <= dropZoneRect.bottom
    ) {
      if (!isDraggingOver) setIsDraggingOver(true)
    } else {
      if (isDraggingOver) setIsDraggingOver(false)
    }
  }

  const calculateAQIIndex = () => {
    if (!pollutionData) return { value: 0, category: "Unknown", color: "text-gray-500" }

    // Base calculation from pollution data
    const pm25Factor = (pollutionData.PM2_5 / 250) * 100
    const pm10Factor = (pollutionData.PM10 / 400) * 100
    const o3Factor = (pollutionData.O3 / 200) * 100
    const no2Factor = (pollutionData.NO2 / 150) * 100
    const so2Factor = (pollutionData.SO2 / 100) * 100
    const coFactor = (pollutionData.CO / 10) * 100

    // Factory impact
    const factoryImpact =
      selectedFactories.length > 0
        ? selectedFactories.reduce((sum, factory) => sum + factory.AQI_impact, 0) / selectedFactories.length
        : 0

    // Calculate base AQI that increases with year
    const yearFactor = (year - 2026) * 5
    const baseAqi = 100 + yearFactor

    // Calculate weighted AQI value with factory impact
    let AQIValue =
      (baseAqi +
        (pm25Factor * 0.3 + pm10Factor * 0.25 + o3Factor * 0.15 + no2Factor * 0.1 + so2Factor * 0.1 + coFactor * 0.1)) *
      (1 + factoryImpact * 0.01)

    // Keep within 100-300 range
    AQIValue = Math.max(100, Math.min(300, Math.round(AQIValue)))

    // Determine category and color
    let category, color
    if (AQIValue <= 150) {
      category = "Moderate"
      color = "text-yellow-500"
    } else if (AQIValue <= 200) {
      category = "Unhealthy"
      color = "text-red-500"
    } else if (AQIValue <= 250) {
      category = "Very Unhealthy"
      color = "text-purple-500"
    } else {
      category = "Hazardous"
      color = "text-red-700"
    }

    return { value: AQIValue, category, color }
  }
  // Determine Air Quality Effect
  const getAirQualityLevel = () => {
    if (!pollutionData) return { level: "loading", color: "bg-gray-500" }

    // Use AQI value to determine air quality level
    const AQIValue = calculateAQIIndex().value;

    if (AQIValue <= 50) {
      return { level: "Good", color: "bg-green-500" };
    } else if (AQIValue <= 100) {
      return { level: "Moderate", color: "bg-yellow-500" };
    } else if (AQIValue <= 150) {
      return { level: "Unhealthy", color: "bg-orange-500" };
    } else if (AQIValue <= 200) {
      return { level: "Unhealthy", color: "bg-red-500" };
    } else if (AQIValue <= 300) {
      return { level: "Very Unhealthy", color: "bg-purple-500" };
    } else {
      return { level: "Hazardous", color: "bg-red-700" };
    }
  }

  const airQuality = getAirQualityLevel()

  // Calculate AQI index based on selected factories and pollution data


  const AQIIndex = calculateAQIIndex()

  // Chart data for pollution distribution
  const chartData = {
    labels: ["CO", "NO2", "SO2", "O3", "PM2.5", "PM10"],
    datasets: [
      {
        data: pollutionData
          ? [
            pollutionData.CO,
            pollutionData.NO2,
            pollutionData.SO2,
            pollutionData.O3,
            pollutionData.PM2_5,
            pollutionData.PM10,
          ]
          : [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "white",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      },
    },
  }

  // Line chart options
  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white",
        },
      },
      title: {
        display: true,
        text: "Historical Pollution Trends",
        color: "white",
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      },
    },
    scales: {
      y: {
        ticks: { color: "white" },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
      x: {
        ticks: { color: "white" },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
    },
  }

  // Bar chart options (for trend alternative)
  const barChartOptions = {
    ...lineChartOptions,
    scales: {
      ...lineChartOptions.scales,
      x: {
        ...lineChartOptions.scales.x,
        stacked: false,
      },
      y: {
        ...lineChartOptions.scales.y,
        stacked: false,
      },
    },
  }

  // Render the appropriate chart based on selected type
  const renderPollutionChart = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="h-64 w-64 rounded-full bg-gray-700 animate-pulse"></div>
        </div>
      )
    }

    switch (chartType) {
      case "doughnut":
        return <Doughnut data={chartData} options={chartOptions} />
      case "polar":
        return <PolarArea data={chartData} options={chartOptions} />
      default:
        return <Doughnut data={chartData} options={chartOptions} />
    }
  }

  // Render the appropriate trend chart
  const renderTrendChart = () => {
    if (isLoading || !historicalData) {
      return <div className="h-64 w-full bg-gray-700 rounded-lg animate-pulse"></div>
    }

    switch (trendChartType) {
      case "line":
        return <Line data={historicalData} options={lineChartOptions} />
      case "bar":
        return <Bar data={historicalData} options={barChartOptions} />
      default:
        return <Line data={historicalData} options={lineChartOptions} />
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center text-white" onMouseMove={handleDragOver}>
      {/* Background with gradient and particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white bg-opacity-10"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -100 - 50],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Pollution effect overlay */}
      {airQuality.level === "Severe" && (
        <div className="absolute inset-0 bg-red-900 bg-opacity-20 animate-pulse z-10"></div>
      )}

      {/* Main content */}
      <div className="container mx-auto px-4 py-8 relative z-20">
        <header className="text-center mb-8">
          <motion.h1
            className="text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {location}
          </motion.h1>
          <p className="text-xl text-gray-300">Bangalore, India</p>

          {/* AQI Index Display */}
          <motion.div
            className="mt-6 mb-4 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-2">Air Quality Index (AQI)</h2>
            <div className="relative w-40 h-40 flex items-center justify-center mb-2">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#AQIGradient)"
                  strokeWidth="10"
                  strokeDasharray={`${Math.min(283, (283 * AQIIndex.value) / 500)} 283`}
                  strokeDashoffset="0"
                  transform="rotate(-90 50 50)"
                />
                <defs>
                  <linearGradient id="AQIGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4ade80" />
                    <stop offset="25%" stopColor="#facc15" />
                    <stop offset="50%" stopColor="#f97316" />
                    <stop offset="75%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#7f1d1d" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`text-4xl font-bold ${AQIIndex.color}`}>{AQIIndex.value}</span>
                <span className="text-xs text-gray-300">AQI Index</span>
              </div>
            </div>
            <div className={`text-lg font-semibold ${AQIIndex.color}`}>{AQIIndex.category}</div>
            <div className="flex items-center mt-2 gap-2">
              <span className={`${airQuality.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                Air Quality: {airQuality.level}
              </span>
              <button className="p-1 text-gray-300 hover:text-white" onClick={() => setShowInfo(!showInfo)}>
                <Info className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          <AnimatePresence>
            {showInfo && (
              <motion.div
                className="mt-4 bg-black bg-opacity-50 p-4 rounded-lg max-w-md mx-auto"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <h3 className="font-semibold mb-2">About Air Quality Index (AQI):</h3>
                <ul className="text-sm text-left">
                  <li>
                    <span className="text-green-400 font-bold">0-50 (Good):</span> Air quality is satisfactory, poses
                    little or no risk.
                  </li>
                  <li>
                    <span className="text-yellow-400 font-bold">51-100 (Moderate):</span> Air quality is acceptable but
                    may cause moderate health concerns for sensitive individuals.
                  </li>
                  <li>
                    <span className="text-orange-400 font-bold">101-150 (Unhealthy for Sensitive Groups):</span> Members
                    of sensitive groups may experience health effects.
                  </li>
                  <li>
                    <span className="text-red-400 font-bold">151-200 (Unhealthy):</span> Everyone may begin to
                    experience health effects.
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">201-300 (Very Unhealthy):</span> Health alert: everyone
                    may experience more serious health effects.
                  </li>
                  <li>
                    <span className="text-red-700 font-bold">301+ (Hazardous):</span> Health warnings of emergency
                    conditions. The entire population is likely to be affected.
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Year selector */}
          <div className="bg-black bg-opacity-50 p-6 rounded-xl flex-1 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-4">Prediction Year</h2>
            <div className="flex items-center gap-4">
              <button
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setYear(year - 1)}
                disabled={year <= 2026}
              >
                <ArrowLeft className="w-5 h-5" />
                Previous
              </button>

              <span className="text-3xl font-bold">{year}</span>

              <button
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setYear(year + 1)}
                disabled={year >= 2050}
              >
                Next
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chart with type selector */}
          <div className="bg-black bg-opacity-50 p-6 rounded-xl flex-1">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Pollution Distribution</h2>
              <div className="flex gap-2">
                <button
                  className={`px-2 py-1 rounded text-xs ${chartType === "doughnut" ? "bg-purple-600" : "bg-gray-700"}`}
                  onClick={() => setChartType("doughnut")}
                >
                  Doughnut
                </button>
                <button
                  className={`px-2 py-1 rounded text-xs ${chartType === "polar" ? "bg-purple-600" : "bg-gray-700"}`}
                  onClick={() => setChartType("polar")}
                >
                  Polar
                </button>
              </div>
            </div>
            <div className="h-96">{renderPollutionChart()}</div>
          </div>
        </div>

        {/* Pollution metrics */}
        <div className="bg-black bg-opacity-50 p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Pollution Metrics</h2>

          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-20 bg-gray-700 rounded-lg animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {Object.entries(pollutionData).map(([key, value]) => {
                // Determine icon based on pollutant type
                let Icon = AlertTriangle
                if (key === "CO" || key === "NO2" || key === "SO2") Icon = Wind
                if (key === "O3") Icon = Thermometer
                if (key.includes("PM")) Icon = Droplets

                return (
                  <motion.div
                    key={key}
                    className="bg-white bg-opacity-10 p-4 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (Number.parseInt(key.charCodeAt(0)) % 6) * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-white bg-opacity-10">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-300">{key.replace("_", ".")}</h3>
                        <p className="text-2xl font-bold">{value.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="mt-2 w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(100, value / 5)}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}
        </div>

        {/* Historical trend chart with type selector */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Historical trend chart */}
          <div className="lg:col-span-2 bg-black bg-opacity-50 p-6 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Historical Trends</h2>
              <div className="flex gap-2">
                <button
                  className={`px-2 py-1 rounded text-xs ${trendChartType === "line" ? "bg-purple-600" : "bg-gray-700"}`}
                  onClick={() => setTrendChartType("line")}
                >
                  Line
                </button>
                <button
                  className={`px-2 py-1 rounded text-xs ${trendChartType === "bar" ? "bg-purple-600" : "bg-gray-700"}`}
                  onClick={() => setTrendChartType("bar")}
                >
                  Bar
                </button>
              </div>
            </div>
            <div className="h-96">{renderTrendChart()}</div>
          </div>

          {/* Weather Information Card */}
          <div className="bg-black bg-opacity-50 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6">Current Weather</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white bg-opacity-10 rounded-lg">
                    <Cloud className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-4xl font-bold">25°C</span>
                    <p className="text-gray-400">Mist</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between p-4 bg-white bg-opacity-5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Droplets className="w-5 h-5 text-blue-400" />
                    <span>Humidity</span>
                  </div>
                  <span className="font-semibold">51%</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white bg-opacity-5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Wind className="w-5 h-5 text-gray-400" />
                    <span>Wind Speed</span>
                  </div>
                  <span className="font-semibold">9 km/h</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white bg-opacity-5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Sun className="w-5 h-5 text-yellow-400" />
                    <span>UV Index</span>
                  </div>
                  <span className="font-semibold">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Factories Drag and Drop Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Available Factories */}
          <div className="bg-black bg-opacity-50 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6">Available Factories</h2>
            <div className="max-h-96 overflow-y-auto pr-2 factory-list">
              <AnimatePresence>
                {availableFactories.map((factory) => (
                  <motion.div
                    key={factory.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FactoryCard
                      factory={factory}
                      onDragStart={() => handleDragStart(factory)}
                      onDragEnd={(e) => handleDragEnd(e, factory)}
                      isDragging={draggedFactory?.id === factory.id}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Drop Zone for Factories */}
          <div
            ref={dropZoneRef}
            className={`bg-black bg-opacity-50 p-6 rounded-xl relative overflow-hidden transition-all duration-300 ${isDraggingOver ? "ring-4 ring-purple-500 ring-opacity-70" : ""
              }`}
          >
            {/* This div will be replaced with your background image */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 z-0">
              {/* Your background image will go here */}
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl font-semibold mb-6">Selected Factories</h2>

              {/* Drag indicator */}
              {isDraggingOver && (
                <motion.div
                  className="absolute inset-0 bg-purple-500 bg-opacity-20 z-0 pointer-events-none"
                  animate={{ opacity: [0.2, 0.3, 0.2] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                />
              )}

              {/* Empty state */}
              {selectedFactories.length === 0 && !isDraggingOver && (
                <div className="flex flex-col items-center justify-center h-64 text-center text-gray-400">
                  <Factory className="w-16 h-16 mb-4 opacity-50" />
                  <p className="text-lg">Drag factories here to see their impact</p>
                </div>
              )}

              {/* Selected factories */}
              <div className="max-h-96 overflow-y-auto pr-2">
                <AnimatePresence>
                  {selectedFactories.map((factory) => (
                    <motion.div
                      key={factory.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="relative"
                    >
                      <FactoryCard
                        factory={factory}
                        onDragStart={() => handleDragStart(factory)}
                        onDragEnd={(e) => handleDragEnd(e, factory)}
                        isDragging={draggedFactory?.id === factory.id}
                      />
                      <button
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-70 hover:opacity-100"
                        onClick={() => handleRemoveFactory(factory)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Impact summary */}
              {selectedFactories.length > 0 && (
                <motion.div
                  className="mt-4 p-3 bg-white bg-opacity-10 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h3 className="font-semibold mb-2">Factory Impact</h3>
                  <div className="flex items-center mb-2">
                    <div className="w-full bg-gray-700 h-2 rounded-full">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"
                        style={{
                          width: `${Math.min(100, selectedFactories.reduce((sum, f) => sum + f.AQI_impact, 0) / selectedFactories.length)}%`,
                        }}
                      />
                    </div>
                    <span className="ml-2 text-sm font-bold">
                      {selectedFactories.length > 0
                        ? Math.round(
                          selectedFactories.reduce((sum, f) => sum + f.AQI_impact, 0) / selectedFactories.length,
                        )
                        : 0}
                      %
                    </span>
                  </div>
                  <div className="text-sm">
                    <div className="flex justify-between">
                      <span>AQI Contribution:</span>
                      <span className={AQIIndex.color}>
                        +{Math.round(AQIIndex.value * (selectedFactories.length / 40))} points
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationPage