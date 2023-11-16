import { useState, useEffect } from 'react';

const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCurrentLocation = async () => {
    setLoading(true);

    try {
      const location = await navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
          setLoading(false);
        },
        (error) => {
          setError(error.message);
          setLoading(false);
        }
      );
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      getCurrentLocation();
    } else {
      setError('Geolocation is not supported in this browser');
      setLoading(false);
    }
  }, []);

  return {
    currentLocation,
    loading,
    error,
    getCurrentLocation, 
  };
};

export default useCurrentLocation;
