
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome name="Nameless" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
