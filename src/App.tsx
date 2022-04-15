import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/home';
import Login from './views/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
