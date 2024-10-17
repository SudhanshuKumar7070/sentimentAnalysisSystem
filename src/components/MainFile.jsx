import React, { useContext, useEffect, useState } from 'react';
import { ThisContext } from './context/context';
import CommentDisplayer from './CommentDisplayer';
import "./ai.css"
// imports



function FirstPageBK() {
    const [mobiles, setMobiles] = useState([]);
    const{setBackendData,positive, negative , neutral}=useContext(ThisContext);
    const settingUrl = `http://localhost:5000/phones`;

    const fetchData = async () => {
        const res = await fetch(settingUrl);
        const result = await res.json();
        console.log(result);
        setBackendData(result);
        return result;

    };

    
  // handle click
  const toggleClassView=()=>{
    console.log(mcBc)
  }
  




    useEffect(() => {
        const getData = async () => {
            const data = await fetchData();
            setMobiles(data);
        };
        getData();
    }, []);

    return (
        <div className="TheContainer">
            {mobiles.length > 0 ? (
                mobiles.map((curr, index) => (
                    
                    <div className='eachItem' key={index}>
                        
                        <div className="phoneSection">
                          <img src={curr.image} alt="img" />
                          <div className="deviceName">
                          <h2>{curr.product}</h2>
                          <h3 className="price"> ${curr.price}</h3>
                          <div className="description">
                                    {curr.description}
                                </div>
                          </div>
                        </div>
                        <div className="viewBtn">
                            <button onClick={toggleClassView}>View details</button>
                            <div className="viewMore">
                                <div className="newPage">
                                <CommentDisplayer index={index}/>
                                </div>
                                <div className="specs">
                                <p><h3>display:</h3> {curr.specs.display}</p>
                                <p><h3>battery:</h3> {curr.specs.batterry}</p>
                                <p> <h3>Camera:</h3> {curr.specs.camera}</p>
                                <p><h3>Storage:</h3> {curr.specs.storage}</p>
                                <p><h3>Connectivity:</h3> {curr.specs.connectivity}</p>
                                
                                
                                </div>
                            <h3> Positive:{curr.positiveReview}</h3>
                        <h3>Negative:{curr.negativeReview}</h3>
                        <h3>Neutral:{curr.neutralReview}</h3>
                                <div className='innerChats'>recentUpdate:{curr.comments.map((rec)=>(<p key={rec.id}>{rec.text}</p>))}</div>
                            </div>
                        </div>
                        

                     

                    </div>
                ))
            ) : (
                <p>No phones available</p>
            )}
        </div>
    );
}

export default FirstPageBK;
