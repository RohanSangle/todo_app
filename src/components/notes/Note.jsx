import React,{useState} from 'react'
import './notes.css'

import neonCircleWhite from '../../images/neon-circle-white.png'
import neonCircleDark from '../../images/neon-circle-dark.png'
import checkWhite from '../../images/check-fill-white.png'
import checkDark from '../../images/check-fill-dark.png'
import cross from '../../images/icon-cross.svg'

const Note = (props) => {

    const [checked, setChecked] = useState(false);

    const contentClassName = checked ? 'strike' : 'normal';

    function handleClick() {
        props.onDelete(props.id);
    }

    const togglechecked =() => {
        setChecked(!checked)
    }

    function togglecircle(){
        if(!checked && props.theme === 'light'){
            return neonCircleWhite;
        }
        else if(!checked && props.theme === 'dark'){
            return neonCircleDark;
        }
        else if(checked && props.theme === 'light'){
            return checkWhite;
        }
        else if(checked && props.theme === 'dark'){
            return checkDark;
        }
    }

    return (
        <div className='standardNote'>
            {/* <article className='circle'></article> */}
            <img 
                className='circle' 
                src={togglecircle()} 
                alt='' 
                onClick={togglechecked}
            />
            <p className={contentClassName}>{props.content}</p>
            {/* <button onClick={handleClick}>X</button> */}
            <img
                className='cross' 
                src={cross} 
                alt='' 
                onClick={handleClick} 
            />
            
        </div>
    )
}

export default Note