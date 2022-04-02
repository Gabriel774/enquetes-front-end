import './App.css';
import NavBar from './components/NavBar/NavBar'
import Poll from './components/Poll/Poll'

function App() {
  return (
    <div id="app">
      <NavBar />
      <div className="polls-container">
        <header className="header">
          <h1 className="title">Enquetes</h1>
          <h2 className="desc">
            Bem-vindo(a) ao YourPoll! aqui você pode criar
            e responder enquetes de uma forma intuitiva.
          </h2>
        </header>
        <Poll></Poll>
      </div>
    </div>
  );
}

export default App
