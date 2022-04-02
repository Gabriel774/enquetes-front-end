import React from 'react'
import { BiError } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './style.css'


const NoRoute = () => {
    return (
        <div id="no-route">
            <h1 id="error-message">
                Ops... Parece que esta página não existe <BiError id="warning" />
            </h1>
            <h3>
                <Link to="/">Clique aqui</Link> para ser redirecionado para a página principal.
            </h3>
        </div>
    )
}

export default NoRoute