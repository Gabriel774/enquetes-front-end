import './App.css';
import NavBar from './components/NavBar/NavBar'
import Home from './views/Home/Home'
import NoRoute from './views/NoRoute/NoRoute'
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoRoute />} />
        </Routes>
      </BrowserRouter>
      <NavBar />
    </div>
  );
}

export default App
