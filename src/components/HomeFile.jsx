import React, { Children, useContext, useEffect } from 'react'
//  import nlp from 'compromise'

import Sentiment from 'sentiment'
import { useState } from 'react'
import { ThisContext } from './context/context'


function HomeFile({index}) {
 
console.log("paisa",index)
    const{ data , counter,sendReview}= useContext(ThisContext);
    const[positive, setPositive] = useState(0);
const[ negative , setNegative] = useState(0);
const[neutral,setNeutral] = useState(0);
 
 const[localData,setLocalData]=useState([])
const sentiment = new Sentiment();





// comment analysis

const findSentiment = (arr) => {
  let posCount = 0;
  let negCount = 0;
  let neuCount = 0;

  arr.forEach((curr) => {
      let score = sentiment.analyze(curr).score;
      console.log(score, curr);
      if (score < 0) {
          negCount++;
      } else if (score === 0) {
          neuCount++;
      } else {
          posCount++;
      }
  });

  setPositive(posCount);
  setNegative(negCount);
  setNeutral(neuCount);
 };

 // finding percentage
 const getPercentage = (localCount)=>{
  if(counter === 0){
    return 0;
  }
  else{
    return (localCount/counter)*100; 
  }
 }
  
 


 // data loading
 
 useEffect(()=>{
 if(data && data.length>0){
  console.log(data)
 let insta = data.map((currData)=>( currData.review))
  setLocalData(insta);
  findSentiment(insta);
  
 }

 },[data])

 useEffect(()=>{
  if (data && data.length>0){
    const BackPositiveReview = getPercentage(positive);
    const BackNegativeReview = getPercentage(negative);
    const BackNeutralReview = getPercentage(neutral);
    console.log("dar",BackNeutralReview );
 
     sendReview(index,BackPositiveReview,BackNegativeReview,BackNeutralReview )

  }
  
 },[positive,negative,neutral])

 


  return (
    <>
      <div className="container">
 <div className="getReviews">
  <h1>total reviews : {counter} </h1>
 
  
 </div>
 <div className="percentageShower">
  <h2> Positive review :{getPercentage(positive)}%</h2>
  <h2> Neutral review :{getPercentage(neutral)}%</h2>
  <h2> Negative review :{getPercentage(negative)}%</h2>
 </div>

      </div>

    </>
  )
}

export default HomeFile
