import React from 'react';
import './style.css'
import logo from '../../assets/img/logo.png'
import { HiPlus } from 'react-icons/hi'

const NavBar = () => {
    return (
        <nav id="nav-bar">
            <img className="logo" src={logo} alt="Logo YourPoll" />
            <button className="btn">
                <span>Criar Enquete</span>
                <HiPlus />
            </button>
        </nav>
    )
}

export default NavBar