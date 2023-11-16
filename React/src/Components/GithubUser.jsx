import React from 'react';
import useGithubUser from './useGithubUser';

const GithubUser = ({ username }) => {
  const { userData, loading, error } = useGithubUser(username);

  
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
