import React from 'react'
import Poll from '../../components/Poll/Poll'
import './style.css'

const Home = () => {
    return (
        <div id="home-container">
            <header className="header">
                <h1 className="home-title">Enquetes</h1>
                <h2 className="home-desc">
                    Bem-vindo(a) ao YourPoll! aqui você pode criar
                    e responder enquetes de uma forma intuitiva.
                </h2>
            </header>
            <Poll
                title="Quantos gatos você tem em sua residência?"
                votes={99}
            />
            <Poll
                title="Quantos gatos você tem em sua residência?"
                votes={99}
            />
            <Poll
                title="Quantos gatos você tem em sua residência?"
                votes={99}
            />
        </div>
    )
}

export default Home