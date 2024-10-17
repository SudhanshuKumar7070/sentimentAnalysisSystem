import React, { useContext } from 'react';
import { ThisContext } from './context/context';

const ShowReview = () => {
    const { data } = useContext(ThisContext);


    

    if (data && data.length > 0) {
        return (
            <div className="dataDisplayer">
                 {data.map((currData) => (
                
                    <p className="comments" key={currData.id}>{currData.review}</p>
                ))} 
                
                

            </div>
        );
    }

    return null; // Return null if no data
};

export default ShowReview;
