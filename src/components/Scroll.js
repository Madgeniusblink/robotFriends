import React from 'react'
import '../styles/components/Scroll.css'


const Scroll = (props) => {
    return (
        <div className='sec'>
            {props.children}
        </div>
    )
}

export default Scroll;