import React, { useState } from 'react'


// import Header from './Header'
// import Footer from './Footer'
import Createnote from './Createnote'
import Note from './Note'

function App() {
  const[additem,setadditem]=useState([])
  const addnote=(note)=>{
  setadditem((pre)=>{
    return [...pre,note]
  })

  }
  const dnote=(id)=>{
    setadditem((old)=>old.filter((cur,index)=>{
      return index !==id;
    }))
  }
  return (
    <div className='maindiv'>
      
      <Createnote passnote={addnote}/>
    
      {
        additem.map((val,index)=>{
          return(
            <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleten={dnote}
            />
          )
        })
      }
      

    </div>
  )
}

export default App