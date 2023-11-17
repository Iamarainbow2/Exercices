
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Welcome from './Welcome'
import Counter from './Counter';
import ShowGithubUser from './ShowGithubUser';

const App = () => {
  return (
    <Router>
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
              <Link to="/users/octocat">Show Github User</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Welcome name="Ahmet" />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
