import React, { useContext } from 'react'
import { ThisContext } from './context/context';
import { ThisProvider } from './context/context';

import { useState } from 'react';
function ReviewSection( {index}) {


    const [reviews,setReview]=useState('');
const {addData,counter,setCounter} = useContext(ThisContext);

const SendMessage=(index,message)=>{
  

  fetch(`http://localhost:5000/phones/${index}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({text: message, id:Date.now()}),
  })

}

const handleClick =()=>{
    addData(reviews);
    setCounter(counter+1);
    SendMessage(index,reviews)
    setReview('');
}

// const send message to backend



  return (
    < >
    
    <div className="reviewEntry">
      <input type="text"  placeholder='write reviews here' value={reviews} onChange={
     (e)=>{setReview(e.target.value)}
      }/>
      <button onClick={handleClick}> Submit Review</button>
      </div>
     
     
    </>
  )
}

export default ReviewSection
