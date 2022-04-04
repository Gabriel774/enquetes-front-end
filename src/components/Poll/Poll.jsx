import React, { useEffect, useState } from "react";
import './style.css'

const Poll = props => {
    const startDate = new Date(props.start).toLocaleDateString()
    const endDate = new Date(props.end).toLocaleDateString()
    const [status, setStatus] = useState(null)

    useEffect(() => {
        const today = new Date().toISOString()
        if (today < props.start) return setStatus('Não iniciada')
        if (today > props.end) return setStatus('Finalizada')
        return setStatus('Ativa')
    }, [])

    return (
        <section className="poll">
            <main className="header">
                <h1
                    className="poll-title"
                    style={{ backgroundColor: props.color.background, color: props.color.text }}
                >
                    {props.title}
                </h1>
            </main>

            <article className="content">
                <h2>Informações</h2>
                <div className="content-desc">
                    <div>
                        <span className="content-desc-text">
                            <span>Status:</span>
                            <strong>{status}</strong>
                            <div className={`status ${status === 'Não iniciada' && 'yellow'} ${status === 'Finalizada' && 'red'}`} />
                        </span>
                        <span className="content-desc-text">
                            <span>Total de Votos:</span>
                            <strong>{props.votes}</strong>
                        </span>
                    </div>

                    <div>
                        <span className="content-desc-text">
                            <span>Início:</span>
                            <strong>{startDate}</strong>
                        </span>
                        <span className="content-desc-text">
                            <span>Fim:</span>
                            <strong>{endDate}</strong>
                        </span>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Poll