
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Counter from './Components/Counter';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome name="Mehmet" />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
};

export default App;
