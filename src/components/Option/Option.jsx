import React, { useEffect, useState } from 'react'
import './style.css'

const Option = props => {
    return (
        <div
         className={`${'option'} ${props.selected === props.id && 'option-active'}`}
         onClick={() => props.setSelected(props.id)}
         >
            <span>
                {props.option.title}
            </span>
            <span>
                Votos: {props.option.votes}
            </span>
        </div>
    )
}

export default Option