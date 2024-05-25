import React from 'react'
import './card.css'

const Card = () => {
  return (
    <>
        <div className='noteList'>
            
        </div>
        {/* <hr className='lastline'></hr> */}
        <div className='footer'>
            
            <p>5 items left</p>

            <button>All</button>
            <button>Active</button>
            <button>Completed</button>

            <button>Clear Completed</button>
        </div>
    </>
  )
}

export default Card