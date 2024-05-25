import React from 'react'
import './notes.css'

const Note = (props) => {

    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className='standardNote'>
            <p>{props.content}</p>
            <button onClick={handleClick}>X</button>
            {console.log(props.content)}
        </div>
    )
}

export default Note