import { React, useState, useEffect } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Home from './views/Home/Home'
import NoRoute from './views/NoRoute/NoRoute'
import Modal from './components/Modal/Modal'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import axios from 'axios'

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [polls, setPolls] = useState(null)

  const fetchData = async () => {
    const res = await axios.get('http://localhost:5000/polls')
    setPolls(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div id="app">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home polls={polls} setPolls={setPolls} />} />
          <Route path="*" element={<NoRoute />} />
        </Routes>

        <NavBar setShowModal={setShowModal} />
        <Modal fetchData={fetchData} showModal={showModal} setShowModal={setShowModal} />

      </BrowserRouter>
    </div>
  );
}

export default App