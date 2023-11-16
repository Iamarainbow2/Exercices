import React from 'react';
import useCurrentLocation from './Components/useCurrentLocation';

const App = () => {
  const { currentLocation, loading, error } = useCurrentLocation();

  if (loading) {
    return <p>Loading current location...</p>;
  }

  if (error) {
    return <p>Error fetching current location: {error}</p>;
  }

  if (!currentLocation) {
    return null;
  }

  const { latitude, longitude } = currentLocation;
  return (
    <div>
      <h1>Current Location</h1>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
    </div>
  );
};

export default App;
