import { React, useState, useEffect } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Home from './views/Home/Home'
import NoRoute from './views/NoRoute/NoRoute'
import Modal from './components/Modal/Modal'
import PollView from './views/PollView/PollView';
import PollEdit from './views/PollEdit/PollEdit'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import axios from 'axios'

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [polls, setPolls] = useState(null)

  const fetchData = async () => {
    const res = await axios.get('https://enquete-back-end.herokuapp.com/polls')
    setPolls(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div id="app">
      <BrowserRouter>

        <Routes>
          <Route exact="true" path="/" element={<Home polls={polls} setPolls={setPolls} />} />
          <Route exact="true" path="/poll/:id" element={<PollView fetchData={fetchData} />} />
          <Route exact="true" path="/poll/edit/:id" element={<PollEdit fetchData={fetchData} />} />
          <Route path="*" element={<NoRoute />} />
        </Routes>

        <NavBar setShowModal={setShowModal} />
        <Modal fetchData={fetchData} showModal={showModal} setShowModal={setShowModal} />

      </BrowserRouter>
    </div>
  );
}

export default App