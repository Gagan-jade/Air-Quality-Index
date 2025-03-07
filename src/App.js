"use client"

import { useState } from "react"
import LocationPage from "./LocationPage"

function App() {
  const [selectedLocation, setSelectedLocation] = useState("Koramangala")
  const [showLocationPage, setShowLocationPage] = useState(false)

  const popularLocations = [
    { name: "Whitefield", id: "Whitefield" },
    { name: "Electronic City", id: "Electronic City" },
    { name: "Indiranagar", id: "Indiranagar" },
    { name: "Koramangala", id: "Koramangala" },
    { name: "Jayanagar", id: "Jayanagar" },
    { name: "Hebbal", id: "Hebbal" },
    { name: "Yelahanka", id: "Yelahanka" },
    { name: "Marathahalli", id: "Marathahalli" },
    { name: "BTM Layout", id: "BTM Layout" },
    { name: "MG Road", id: "MG Road" },
    { name: "Rajajinagar", id: "Rajajinagar" },
    { name: "Basavanagudi", id: "Basavanagudi" },
    { name: "Malleshwaram", id: "Malleshwaram" },
    { name: "Hennur", id: "Hennur" },
    { name: "Banashankari", id: "Banashankari" },
    { name: "KR Puram", id: "KR Puram" },
    { name: "Majestic", id: "Majestic" },
    { name: "Ulsoor", id: "Ulsoor" },
    { name: "Vijayanagar", id: "Vijayanagar" },
    { name: "Sarjapur", id: "Sarjapur" },
    { name: "Peenya", id: "Peenya" },
    { name: "Bommanahalli", id: "Bommanahalli" }
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    const searchInput = document.getElementById("location-search")
    if (searchInput.value.trim()) {
      setSelectedLocation(searchInput.value)
      setShowLocationPage(true)
    }
  }

  const handleLocationSelect = (locationId) => {
    setSelectedLocation(locationId)
    setShowLocationPage(true)
  }

  if (showLocationPage) {
    return (
      <div>
        <button
          className="absolute top-4 left-4 z-50 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg hover:bg-opacity-70"
          onClick={() => setShowLocationPage(false)}
        >
          Back to Home
        </button>
        <LocationPage location={selectedLocation} />
      </div>
    )
  }

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white bg-opacity-10"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Air Quality Prediction</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore future air quality predictions for different locations in Bangalore and understand the environmental
            impact over time.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              id="location-search"
              type="text"
              placeholder="Search for a location..."
              className="flex-1 px-4 py-2 rounded-lg bg-white bg-opacity-20 border-0 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white flex items-center gap-2"
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
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              Search
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white text-center mb-6">Popular Locations</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {popularLocations.map((location) => (
              <div
                key={location.id}
                className="bg-white bg-opacity-10 hover:bg-opacity-20 transition-all cursor-pointer rounded-lg"
                onClick={() => handleLocationSelect(location.id)}
              >
                <div className="p-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-400 mr-3"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-white text-lg">{location.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


