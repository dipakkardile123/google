import React from 'react'
import "./Note.css"

const Note = (props) => {
  const deletnote=()=>{
    props.deleten(props.id)
  }
  return (
        <div className='note_div'>
        <div className='sub_div'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className='delet' onClick={deletnote}>delete</button>
        </div>
    </div>
  )
}

export default Note