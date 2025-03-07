// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { Search, MapPin } from "lucide-react";
// import { Button } from "../components/ui/Button";
// import { Input } from "../components/ui/Input";
// import { Card } from "../components/ui/Card";

// export default function HomePage() {
//   const router = useRouter();
//   const [searchQuery, setSearchQuery] = useState("");

//   const popularLocations = [
//     { name: "Koramangala", id: "koramangala" },
//     { name: "Indiranagar", id: "indiranagar" },
//     { name: "Whitefield", id: "whitefield" },
//     { name: "Electronic City", id: "electronic-city" },
//     { name: "Jayanagar", id: "jayanagar" },
//     { name: "HSR Layout", id: "hsr-layout" },
//   ];

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       router.push(`/location/${encodeURIComponent(searchQuery)}`);
//     }
//   };

//   const handleLocationSelect = (locationId) => {
//     router.push(`/location/${locationId}`);
//   };

//   return (
//     <div className="min-h-screen relative flex flex-col items-center justify-center">
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
//         {/* Animated particles */}
//         <div className="absolute inset-0">
//           {Array.from({ length: 30 }).map((_, i) => (
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

//       {/* Content */}
//       <div className="container mx-auto px-4 py-12 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//             Air Quality Prediction
//           </h1>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Explore future air quality predictions for different locations in
//             Bangalore and understand the environmental impact over time.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="max-w-md mx-auto mb-12"
//         >
//           <form onSubmit={handleSearch} className="flex gap-2">
//             <Input
//               type="text"
//               placeholder="Search for a location..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="bg-white bg-opacity-20 border-0 text-white placeholder:text-gray-400"
//             />
//             <Button type="submit" variant="default">
//               <Search className="mr-2" size={16} />
//               Search
//             </Button>
//           </form>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <h2 className="text-2xl font-semibold text-white text-center mb-6">
//             Popular Locations
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {popularLocations.map((location, index) => (
//               <motion.div
//                 key={location.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <Card
//                   className="bg-white bg-opacity-10 hover:bg-opacity-20 transition-all cursor-pointer"
//                   onClick={() => handleLocationSelect(location.id)}
//                 >
//                   <div className="p-6 flex items-center">
//                     <MapPin className="text-primary mr-3" size={24} />
//                     <span className="text-white text-lg">{location.name}</span>
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const popularLocations = [
    { name: "Koramangala", id: "koramangala" },
    { name: "Indiranagar", id: "indiranagar" },
    { name: "Whitefield", id: "whitefield" },
    { name: "Electronic City", id: "electronic-city" },
    { name: "Jayanagar", id: "jayanagar" },
    { name: "HSR Layout", id: "hsr-layout" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/location/${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-white">Air Quality Prediction</h1>
        <p className="text-xl text-gray-300">Search or select a location to view predictions.</p>
      </div>
    </div>
  );
}
