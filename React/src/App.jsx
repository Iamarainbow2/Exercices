import React from 'react';
import useGithubUser from './Components/useGithubUser';

const App = () => {
  const username = 'Iamarainbow2';
  const { userData, loading, error } = useGithubUser(username);

  return (
    <div>
      <h1>Github User Information</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={`${username}'s avatar`} />
          <h2>{userData.name}</h2>
          <p>{userData.login}</p>
        </div>
      )}
    </div>
  );
};

export default App;
