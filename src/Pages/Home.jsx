import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";

const Home = () => {
  const locations = ["Koramangala", "Indiranagar", "Whitefield", "Electronic City", "Jayanagar", "HSR Layout"];
  const pollutionData = {
    CO: "1.91",
    NO2: "145.60",
    SO2: "84.85",
    O3: "186.13",
    PM2_5: "158.92",
    PM10: "128.80",
  };

  return (
    <div className="min-h-screen flex flex-col items-center text-center px-5 py-10">
      <h1 className="text-4xl font-bold text-white">Air Quality Prediction</h1>
      <p className="text-gray-300 mt-2 max-w-lg">
        Explore future air quality predictions for different locations in Bangalore.
      </p>

      {/* Search Bar */}
      <div className="mt-5 flex items-center space-x-3">
        <Input placeholder="Search for a location..." className="w-80" />
        <Button>Search</Button>
      </div>

      {/* Popular Locations */}
      <h2 className="text-2xl font-semibold mt-8">Popular Locations</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
        {locations.map((location, index) => (
          <Card key={index} className="p-4">{location}</Card>
        ))}
      </div>

      {/* Pollution Metrics */}
      <h2 className="text-2xl font-semibold mt-12">Pollution Metrics</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
        {Object.entries(pollutionData).map(([key, value], index) => (
          <Card key={index} className="text-center p-4">
            <p className="text-gray-400">{key}</p>
            <p className="text-2xl font-bold">{value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
