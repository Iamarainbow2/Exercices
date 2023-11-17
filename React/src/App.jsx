
import { Routes, Route, Link } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Counter from './Components/Counter';
import ShowGithubUser from './Components/ShowGithubUser';

const App = () => {
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
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Routes>
      </div>
  );
};

export default App;
