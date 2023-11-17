
import React, { useState, useEffect } from 'react';
import useGithubUser from './useGithubUser';

const GithubUser = ({ username }) => {
    const { userData, loading, error } = useGithubUser(username);
  
  

  useEffect(() => {
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

    fetchUserData();
  }, [username]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!userData) {
    return null; 
  }

  const { avatar_url, name, login } = userData;

  return (
    <div>
      <img src={avatar_url} alt={`${username}'s avatar`} />
      <h2>{name}</h2>
      <p>{login}</p>
    </div>
  );
};

export default GithubUser;
