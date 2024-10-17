import { createContext, useState } from "react";

export const ThisContext = createContext();

export const ThisProvider = ({ children }) => {


  const superIndex=0;
    const [data, setData] = useState([{ review: "new review", id: 1 }]);
    // logical function to send data to backend
    const sendReview=(index,positiveReview,negativeReview,neutralReview)=>{

        fetch(`http://localhost:5000/phones/${index}/reviews`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({positiveReview,negativeReview,neutralReview}),
        })
          .then(res => {
            console.log('Phone rated:', res);
          })
          .catch(error => console.error('Error rating phone:', error));
        
      }
      
    //   function ends---
// managing state of each accessed index of data
     const[backendData,setBackendData]=useState([]);
      const[inde, setInde]=useState(0);
    const[counter, setCounter] = useState(1);
    const addData = (element) => {
        setData((prev) => [...prev, { review: element, id: Date.now() }]);
    };

    return (
        <ThisContext.Provider value={{ superIndex,data, setData, addData,counter,setCounter,sendReview,inde, setInde,backendData,setBackendData }}>
            {children}
        </ThisContext.Provider>
    );
};
