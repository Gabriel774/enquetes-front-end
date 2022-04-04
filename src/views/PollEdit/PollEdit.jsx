import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import NoRoute from "../NoRoute/NoRoute";
import './style.css'

const PollEdit = props => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const params = useParams('id')
    const navigate = useNavigate()

    const handleChange = (value, key, type) => {
        const aux = { ...data }
        if (type === 'array') aux.options[key].title = value
        else if (type === 'color') aux.color[key] = value
        else aux[key] = value
        setData(aux)
    }

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const res = await axios.get(`https://enquete-back-end.herokuapp.com/polls/${params.id}`)
            setData(res.data)
        } catch (error) {
            setError(true)
        }
    }

    const submitData = async () => {
        const res = await axios.patch('https://enquete-back-end.herokuapp.com/poll/edit', data)
        props.fetchData()
        alert(res.data.msg)
        navigate('/')
    }

    const addOption = () => {
        const aux = { ...data }
        aux.options.push({ title: '', votes: 0 })
        setData(aux)
    }

    const removeOption = () => {
        if (data.options.length <= 3) return
        const aux = { ...data }
        aux.options.pop()
        setData(aux)
    }

    const checkDisable = () => {
        if (data.name.trim() === '') return true
        if (!data.options.every((option) => option.title !== '')) return true
        if (data.start === '' || data.end === '' || data.start > data.end) return true

        return false
    }

    if (!error) {

        return (
            data !== null ? (
                <div id="poll-edit" >
                <h1 className="center">Editar Enquete</h1>

                <p className="inp-container">
                    <label className="inp-label">
                        Nome da enquete:
                    </label>
                    <input
                        value={data.name}
                        onChange={e => handleChange(e.target.value, 'name')}
                        type="text"
                        required
                        className="inp"
                        />
                </p>

                <h2 className="center">Opções da enquete</h2>
                <h4 className="center">(Mínimo de três opções)</h4>

                <div className="options">
                    {data.options.map((option, i) => {
                        return (
                            <p className="inp-container" key={i}>
                                <label className="inp-label">
                                    opção {i + 1}:
                                </label>
                                <input
                                    value={option.title}
                                    onChange={e => handleChange(e.target.value, i, 'array')}
                                    type="text"
                                    required
                                    className="inp"
                                />
                            </p>
                        )
                    })}
                </div>

                <div className="buttons">

                    <button
                        className="circle"
                        onClick={() => addOption()}
                    >
                        +
                    </button>

                    <button
                        disabled={data.options.length <= 3}
                        className="circle"
                        onClick={() => removeOption()}
                        >
                        -
                    </button>
                </div>

                <h2 className="center">Prazo da enquete</h2>

                <div className="date-container">
                    <span>
                        <label className="inp-label">Início:</label>
                        <input
                            value={data.start}
                            onChange={(e) => handleChange(e.target.value, 'start')}
                            type="date"
                            className="date"
                            />
                    </span>

                    <span>
                        <label className="inp-label">Fim:</label>
                        <input
                            value={data.end}
                            onChange={(e) => handleChange(e.target.value, 'end')}
                            type="date"
                            className="date"
                            />
                    </span>
                </div>

                {data.start > data.end && (
                    <p className="center warning">
                        A data de inicio não pode ser posterior a data do fim.
                    </p>
                )
                }

                {
                    data.start === '' || data.end === '' ? (
                        <p className="center warning">
                            Preencha os campos.
                        </p>
                    ) : false
                }

                <h2 className="center">Cor da enquete</h2>
                <h4 className="center">Defina as cores que serão exibidas no cabeçalho da enquete</h4>

                <div className="color-container">
                    <span>
                        <label className="inp-label">Fundo:</label>
                        <input
                            value={data.color.background}
                            onChange={e => handleChange(e.target.value, 'background', 'color')}
                            type="color"
                            className="color center"
                        />
                    </span>

                    <span>
                        <label className="inp-label">Texto:</label>
                        <select
                            className="color select"
                            value={data.color.text}
                            onChange={e => handleChange(e.target.value, 'text', 'color')}
                        >
                            <option value="#000000">Preto</option>
                            <option value="#FFFFFF">Branco</option>
                        </select>
                    </span>

                </div>

                <button
                    disabled={checkDisable()}
                    onClick={() => submitData()}
                    className="btn">
                    {checkDisable() ? 'Preencha todos os campos corretamente' : 'Editar Enquete'}
                </button>
            </div >
        ) : <h2 className="loading">Carregando...</h2>
        )
    } else return <NoRoute />
}

export default PollEdit