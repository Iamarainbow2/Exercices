import { useState, useEffect } from 'react';

const useGithubUser = (username) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
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
      fetchData();
    }
  }, [username]);

  return {
    userData,
    loading,
    error,
    fetchData, 
  };
};

export default useGithubUser;
