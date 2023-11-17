
import React from 'react';
import { useGithubUser } from './useGithubUser';

const GithubUser = ({ match }) => {
  const { username } = match.params;
  const { userData, loading, error, refetch } = useGithubUser(username);

  const handleRefetch = () => {
    
    refetch(username);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={handleRefetch}>Try Again</button>
      </div>
    );
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
