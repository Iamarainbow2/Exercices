import  { useState, useEffect } from 'react';
import GithubUser from './GithubUser';

const GithubUsers = () => {
  const [usernames, setUsernames] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsernames = async () => {
      try {
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        const fetchedUsernames = data.map(user => user.login);
        setUsernames(fetchedUsernames);
      } catch (error) {
        console.error('Error fetching Github usernames:', error);
      }
    };

    fetchUsernames();
  }, []);

  const handleUserClick = (username) => {
    setSelectedUser(username);
  };

  return (
    <div>
      <h1>Github Users</h1>
      <ul>
        {usernames.map((username, index) => (
          <li key={index} onClick={() => handleUserClick(username)}>
            {username}
          </li>
        ))}
      </ul>

      {selectedUser && <GithubUser username={selectedUser} />}
    </div>
  );
};

export default GithubUsers;
