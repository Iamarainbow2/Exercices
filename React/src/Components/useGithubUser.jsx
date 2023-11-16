import { useState, useEffect } from 'react';

const useGithubUser = (username) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Github user data');
      }

      const data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError('Failed to fetch Github user data');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) {
      fetchUserData();
    }
  }, []); 

  return {
    userData,
    loading,
    error,
  };
};

export default useGithubUser;
