import React,{useState, useEffect} from 'react'
import './notes.css'

import neonCircleWhite from '../../images/neon-circle-white.png'
import neonCircleDark from '../../images/neon-circle-dark.png'
import checkWhite from '../../images/check-fill-white.png'
import checkDark from '../../images/check-fill-dark.png'
import cross from '../../images/icon-cross.svg'

const Note = ({ id, content, onDelete, theme, ifChecked, setIfChecked}) => {

    const [checked, setChecked] = useState(ifChecked[id] || false);

    useEffect(() => {
        setIfChecked((prev) => {
          const newChecked = [...prev];
          newChecked[id] = checked;
          return newChecked;
        });
    }, [checked, id, setIfChecked]);

    const contentClassName = checked ? 'strike' : 'normal';

    function handleClick() {
        onDelete(id);
    }

    const togglechecked = () => {
        setChecked((prev) => !prev);
    };

    function togglecircle(){
        if(!checked && theme === 'light'){
            return neonCircleWhite;
        }
        else if(!checked && theme === 'dark'){
            return neonCircleDark;
        }
        else if(checked && theme === 'light'){
            return checkWhite;
        }
        else if(checked && theme === 'dark'){
            return checkDark;
        }
    }

    return (
        <div className='standardNote' id={theme}>
            
            <img 
                className='circle' 
                src={togglecircle()} 
                alt='' 
                onClick={togglechecked}
                
            />
            
            <p className={contentClassName}>{content}</p>
            
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