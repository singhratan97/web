import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useState, useEffect } from "react";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 12.87838013077902, // Latitude for New York
  lng: 80.22749859544302, // Longitude for New York
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const Maps = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCPZ0Ad58F_7BBOq1aqxg5yg9jerqWprx4", // Replace with your API key
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  // Function to handle click on the map
  const handleMapClick = (event) => {
    // const lat = event.latLng.lat();
    // const lng = event.latLng.lng();
    const lat = 12.87838013077902;
    const lng = 80.22749859544302;

    // Construct the Google Maps URL
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;

    // Redirect to Google Maps
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <GoogleMap
      mapContainerStyle={
        windowWidth > 795
          ? mapContainerStyle
          : {
              width: "100%",
              height: "300px",
            }
      }
      zoom={12}
      center={center}
      options={options}
      onClick={handleMapClick}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Maps;
