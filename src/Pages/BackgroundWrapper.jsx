import { useLocation } from "react-router-dom";
import backgroundImage from "../assets/image.png"; // Add your image path

export default function BackgroundWrapper({ children }) {
  const location = useLocation();
  
  // Show background on all pages EXCEPT "/"
  const showBackground = location.pathname !== "/";

  return (
    <div
      className={`w-screen h-screen ${showBackground ? "bg-cover bg-center bg-fixed" : ""}`}
      style={showBackground ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {children}
    </div>
  );
}
