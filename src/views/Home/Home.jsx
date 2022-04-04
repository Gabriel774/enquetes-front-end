import React from 'react'
import Poll from '../../components/Poll/Poll'
import './style.css'

const Home = props => {
    return (
        <div id="home-container">
            <header className="header">
                <h1 className="home-title">Enquetes</h1>
                <h2 className="home-desc">
                    Bem-vindo(a) ao YourPoll! aqui você pode criar
                    e responder enquetes de uma forma simples e intuitiva.
                </h2>
            </header>
            {props.polls ? props.polls.map((poll) => {
                let totVotes = 0
                poll.options.map((op) => totVotes += op.votes)

                return <Poll
                    title={poll.name}
                    key={poll._id}
                    start={poll.start}
                    end={poll.end}
                    color={poll.color}
                    votes={totVotes}
                />
            })
                : <h2>Carregando...</h2>}
        </div>
    )
}

export default Home