import React,{useState} from 'react'
import './card.css'

import Note from '../notes/Note.jsx'

const Card = ({notes, setNotes, theme}) => {

  const [ifChecked, setIfChecked] = useState(new Array(notes.length).fill(false));
  const [displayMode, setDisplayMode] = useState('all'); // 'all' or 'completed'

  // const deleteNote = (id) => {
  //   setNotes(prevNotes=>{
  //     return prevNotes.filter((noteItem, index) => {
  //       return index !== id;
  //     })
  //   })
  // }

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
    setIfChecked((prevChecked) => prevChecked.filter((_, index) => index !== id));
  };

  const clearCompleted = () => {
    setNotes((prevNotes) =>
      prevNotes.filter((_, index) => !ifChecked[index])
    );
    setIfChecked((prevChecked) =>
      prevChecked.filter((checked) => !checked)
    );
  };

  const showAllNotes = () => {
    setDisplayMode('all');
  };

  const showCompletedNotes = () => {
    setDisplayMode('completed');
  };

  const showActiveNotes = () => {
    setDisplayMode('active');
  };

  const filteredNotes = displayMode === 'completed'
    ? notes.filter((_, index) => ifChecked[index])
    : displayMode === 'active'
    ? notes.filter((_, index) => !ifChecked[index])
    : notes;

  // const clearCompleted = () => {
  //   setNotes((prevNotes) =>
  //     prevNotes.filter((noteItem, index) => !ifChecked[index])
  //   );
  //   setIfChecked((prevState) =>
  //     prevState.filter((item, index) => !ifChecked[index])
  //   );
  // };

  return (
    <>
        <div className='noteList-container'>
          <div className='noteList-content'>
            {filteredNotes.map((noteItem, index)=>{
              return (
              <Note
                key={index}
                id={index}
                ifChecked={ifChecked}
                setIfChecked={setIfChecked}
                content={noteItem} 
                onDelete={deleteNote}
                theme={theme}
              />)
            })} 
          </div>
        </div>
        {/* <hr className='lastline'></hr> */}
        <div className='footer'>
            
          <p>{filteredNotes.length} items left</p>
          
          <div className='group'>
            <button onClick={showAllNotes}>All</button>
            <button onClick={showActiveNotes}>Active</button>
            <button onClick={showCompletedNotes}>Completed</button>
          </div>

          <button onClick={clearCompleted}>Clear Completed</button>
        </div>
    </>
  )
}

export default Card