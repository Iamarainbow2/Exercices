
import { Routes, Route, Link } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Counter from './Components/Counter';
import ShowGithubUser from './Components/ShowGithubUser';
import NotFound from './NotFound';
import GithubUser from './Components/GithubUser';
import GithubUserList from './Components/GithubUserList';

const App = () => {
  const githubUsernames = ['user1', 'user2', 'user3'];

  return (
   
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            
            <li>
              <Link to="/users/:username">Show Github User</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Welcome name="YourName" />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<GithubUserList usernames={githubUsernames} />}>
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>
          <Route
            path="/github-user/:username"
            element={<GithubUser />} 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
  );
};

export default App;
