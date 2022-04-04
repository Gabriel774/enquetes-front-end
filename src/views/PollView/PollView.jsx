import React, { useEffect, useState } from 'react'
import NoRoute from '../NoRoute/NoRoute'
import PollCard from '../../components/PollCard/PollCard'
import './style.css'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'
import axios from 'axios'

const PollView = props => {
    const [poll, setPoll] = useState(null)
    const [error, setError] = useState(false)
    const params = useParams('id')
    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const res = await axios.get(`https://enquete-back-end.herokuapp.com/polls/${params.id}`)
            setPoll(res.data)
        } catch (e) {
            setError(true)
        }
    }

    const deletePoll = async () => {
        const option = window.confirm("Você tem certeza de que deseja excluir esta enquete")
        if (!option) return
        const res = await axios.delete(`https://enquete-back-end.herokuapp.com/poll/delete/${params.id}`)
        props.fetchData()
        alert(res.data.msg)
        navigate('/')
    }

    if (!error) return (
        <div id="poll-view">
            <div className="options">
                <Link className="return" to="/">
                    <BsArrowLeftCircleFill />
                    <span className="return-text">Voltar</span>
                </Link>

                <Link className="return" to={`/poll/edit/${params.id}`}>
                    <span className="return-text">Editar enquete</span>
                    <FiEdit />
                </Link>
            </div>
            {poll ? (
                <PollCard fetchData={props.fetchData} poll={poll} setPoll={setPoll} />
                )
                : <h2>Carregando</h2>
            }
            {poll && <button onClick={() => deletePoll()} className="btn-delete">Deletar enquete</button>}
        </div>
    )
    else return <NoRoute />
}

export default PollView