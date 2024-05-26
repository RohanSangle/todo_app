import React,{useState, createContext} from 'react'
import './App.css'

import Card from './components/card/Card.jsx'
import CreateNote from './components/createNote/CreateNote.jsx'
// import Note from './components/notes/Note.jsx'

import bgLight from './images/bg-desktop-light.jpg';
import bgDark from './images/bg-desktop-dark.jpg';
// import sun from './images/icon-sun.svg';
// import moon from './images/icon-moon.svg';

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('light');
  const [notes, setNotes] = useState([]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    })
  }

  // const deleteNote = (id) => {
  //   setNotes(prevNotes=>{
  //     return prevNotes.filter((noteItem, index) => {
  //       return index !== id;
  //     })
  //   })
  // }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='main' id={theme}>
        <img className='bgHeader' src={theme === 'light' ? bgLight : bgDark} alt=''/>
        <h2 className='title'>TODO</h2>
        <article className='trial' onClick={toggleTheme}></article>
        {/* <img className='themeSwitch' onClick={toggleTheme} src={theme === 'light' ? sun : moon} alt=''/> */}

        <CreateNote onAdd={addNote}/>
        {/* <Card/> */}
        <Card notes={notes} setNotes={setNotes}/>
        {/* {notes.map((noteItem, index)=>{
          return (
          <Note
            key={index}
            id={index}
            content={noteItem} 
            onDelete={deleteNote}
          />)
        })} */}

        <p className='end'>Drag and drop to reorder list</p>
        
      </div>
    </ThemeContext.Provider>
  )
}

export default App