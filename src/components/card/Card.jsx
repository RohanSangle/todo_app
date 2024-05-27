import React from 'react'
import './card.css'

import Note from '../notes/Note.jsx'

const Card = ({notes, setNotes, theme}) => {


  const deleteNote = (id) => {
    setNotes(prevNotes=>{
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
        <div className='noteList-container'>
          <div className='noteList-content'>
            {notes.map((noteItem, index)=>{
              return (
              <Note
                key={index}
                id={index}
                content={noteItem} 
                onDelete={deleteNote}
                theme={theme}
              />)
            })} 
          </div>
        </div>
        {/* <hr className='lastline'></hr> */}
        <div className='footer'>
            
            <p>{notes.length} items left</p>

            <button>All</button>
            <button>Active</button>
            <button>Completed</button>

            <button>Clear Completed</button>
        </div>
    </>
  )
}

export default Card