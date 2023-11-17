
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Counter from './Components/Counter';
import ShowGithubUser from './Components/ShowGithubUser';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome name="mehmet" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </Router>
  );
};

export default App;
