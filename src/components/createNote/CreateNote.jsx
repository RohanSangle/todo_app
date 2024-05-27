import React, { useState } from 'react'
import './createNote.css'

const CreateNote = ({onAdd, theme}) => {

  const [note, setNote] = useState("");

  const handleEnter = (e)=>{
    if(e.key === "Enter"){
      onAdd(note);
      setNote("");
    }
  }

  return (
    <div className='createNote' id={theme}>
        <input 
          value={note} 
          placeholder='Create a new todo...'
          onChange={(e)=>setNote(e.target.value)} 
          onKeyDown={handleEnter}
        />
    </div>
  )
}

export default CreateNote