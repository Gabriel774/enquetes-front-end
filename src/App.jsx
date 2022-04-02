import './App.css';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div id="app">
      <NavBar />
      <div className="polls-container">
        <header className="header">
          <h1 className="title">Enquetes</h1>
          <h2 className="desc">
            Bem-vindo(a) ao YourPolls! aqui você pode criar
            e responder enquetes de uma forma intuitiva.
          </h2>
        </header>
        
      </div>
    </div>
  );
}

export default App
