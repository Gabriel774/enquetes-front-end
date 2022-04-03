import { React, useState } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Home from './views/Home/Home'
import NoRoute from './views/NoRoute/NoRoute'
import Modal from './components/Modal/Modal'
import { Route, BrowserRouter, Routes } from 'react-router-dom';

const App = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div id="app">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoRoute />} />
        </Routes>

        <NavBar setShowModal={setShowModal} />
        <Modal showModal={showModal} setShowModal={setShowModal} />

      </BrowserRouter>
    </div>
  );
}

export default App