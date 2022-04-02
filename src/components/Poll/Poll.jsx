import React from "react";
import './style.css'

const Poll = props => {
    return (
        <section className="poll">
            <main className="header">
                <h1 className="poll-title">
                    Quantos gatos você tem em sua residência?
                </h1>
            </main>

            <article className="content">
                <h2>Informações</h2>
                <div className="content-desc">
                    <div>
                        <span className="content-desc-text">
                            Status: <strong>Ativa</strong> <div className="status" ></div>
                        </span>
                        <span className="content-desc-text">
                            Votos: <strong>99</strong>
                        </span>
                    </div>

                    <div>
                        <span className="content-desc-text">
                            Início: <strong>01/01/2022</strong>
                        </span>
                        <span className="content-desc-text">
                            Fim: <strong>12/12/2022</strong>
                        </span>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Poll