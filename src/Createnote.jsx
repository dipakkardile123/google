import React, {useState } from 'react'
import "./Createnote.css"
const Createnote = (props) => {
  const [note,setnote]=useState({
    title:"",
    content:"",

  })
  


  const inpvalue=(e)=>{
    
    const{name,value}=e.target
    setnote((olddata)=>{
      return {
        ...olddata,
        [name]:value,
      }
      
    })
    


  }
  const addevent=()=>{    
    
    props.passnote(note)
    setnote({
      title:"",
      content:"",
    })
  
  }
  return (
    <div className='container'>
      <div className='main_div'>
        <input type="text"
         placeholder='Title..' 
         name='title'
         onChange={inpvalue} 
         value={note.title}
         />
        <textarea cols="" 
        rows=""placeholder='Your note......'
        name='content'
        onChange={inpvalue} 
        value={note.content}>
        </textarea>
        <button onClick={addevent}>add</button>
      </div>
    </div>
  )
}

export default Createnote