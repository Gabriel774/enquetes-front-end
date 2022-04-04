import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Option from '../Option/Option'
import './style.css'

const PollCard = props => {
    const [voted, setVoted] = useState(false)
    const [status, setStatus] = useState('a')
    const [selected, setSelected] = useState(null)
    const startDate = new Date(props.poll.start).toLocaleDateString()
    const endDate = new Date(props.poll.end).toLocaleDateString()

    const handleVote = () => {
        setVoted(true)
        vote()
    }

    const vote = async() => {
        const aux = props.poll
        aux.options[selected].votes = aux.options[selected].votes + 1
        await axios.patch('https://enquete-back-end.herokuapp.com/poll/edit', aux)
        props.setPoll(aux)
        alert('Voto enviado com sucesso');
    }

    useEffect(() => {
        const today = new Date().toISOString()
        if (today < props.poll.start) return setStatus('Não iniciada')
        if (today > props.poll.end) return setStatus('Finalizada')
        return setStatus('Ativa')
    }, [])

    return (
        <div id="poll-card">
            <main className="header">
                <h1
                    className="poll-title"
                    style={{ backgroundColor: props.poll.color.background, color: props.poll.color.text }}
                >
                    {props.poll.name}
                </h1>
            </main>

            <article className="content">
                <h2>Selecione uma opção</h2>
                <div className="options-container">
                    {props.poll.options.map((option, i) => {
                        return <Option option={option} id={i} key={option._id} selected={selected} setSelected={setSelected} />
                    })}

                </div>
                <div className="content-desc">
                    <span className="content-desc-text">
                        <span>Status:</span>
                        <strong>{status}</strong>
                        <div className={`status ${status === 'Não iniciada' && 'yellow'} ${status === 'Finalizada' && 'red'}`} />
                    </span>

                    <span className="content-desc-text">
                        <span>Início:</span>
                        <strong>{startDate}</strong>
                    </span>
                    <span className="content-desc-text">
                        <span>Fim:</span>
                        <strong>{endDate}</strong>
                    </span>
                </div>
                <button
                    disabled={selected === null || status !== 'Ativa' || voted}
                    className="btn vote"
                    onClick={() => handleVote()}
                >
                    {voted? 'Votado': "Votar"}
                </button>
            </article>
        </div>
    )
}

export default PollCard