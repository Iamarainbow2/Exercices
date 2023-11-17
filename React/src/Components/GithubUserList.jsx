
import { Link, Outlet } from 'react-router-dom';

const GithubUserList = ({ usernames }) => {
  return (
    <div>
      <h1>Github User List</h1>
      <ul>
        {usernames.map((username) => (
          <li key={username}>
            <Link to={`/users/${username}`}>{username}</Link>
          </li>
        ))}
      </ul>

      
      <Outlet />

      
      <RouteIndexMessage />
    </div>
  );
};

export default GithubUserList;


const RouteIndexMessage = () => {
  return (
    <div>
      <p>Add a user and select it</p>
    </div>
  );
};
