
import { BrowserRouter as Router, Routes, Route, Link, SWRConfig } from 'react-router-dom';
import Welcome from './Components/Welcome';
import GithubUserList from './Components/GithubUserList';
import GithubUser from './Components/GithubUser';
import NotFound from './NotFound';
import { fetcher } from './Components/useGithubUser';
const App = () => {
  const githubUsernames = ['user1', 'user2', 'user3'];

  return (
    <Router>
      <SWRConfig value={{ fetcher }}>
        <div>
          
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Github Users</Link>
              </li>
            </ul>
          </nav>

          
          <Routes>
            <Route path="/" element={<Welcome name="YourName" />} />
            <Route path="/users" element={<GithubUserList usernames={githubUsernames} />} />
            <Route path="/users/:username" element={<GithubUser />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SWRConfig>
    </Router>
  );
};

export default App;
