import React from 'react';
import './style.css'
import logo from '../../assets/img/logo.png'
import { HiPlus } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const NavBar = props => {
    return (
        <nav id="nav-bar">
            <Link to='/'>
                <img className="logo" src={logo} alt="Logo YourPoll" />
            </Link>
            <button className="btn" onClick={() => props.setShowModal(true)}>
                <span>Criar Enquete</span>
                <HiPlus />
            </button>
        </nav>
    )
}

export default NavBar