import React, { useState } from 'react'

const Formsubmition = () => {
    const [entry,setentry]=useState('');

    const handleSubmit =(event:React.FormEvent)=>{
       event.preventDefault();
       alert(entry);
       setentry("")
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <input type='text' value={entry} placeholder='enter something' onChange={(event)=>setentry(event.target.value)}></input>
    <button>Submit</button>


    </form>
    </>
  )
}

export default Formsubmition