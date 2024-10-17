import React, { useContext, useEffect, useState } from 'react';
import { ThisContext } from './context/context';
import CommentDisplayer from './CommentDisplayer';
import "./ai.css";

function FirstPageBK() {
    const [mobiles, setMobiles] = useState([]);
    const { setBackendData } = useContext(ThisContext);
    const [showModal, setShowModal] = useState(false);
    const [selectedMobile, setSelectedMobile] = useState(null);

    const settingUrl = `http://localhost:5000/phones`;

    const fetchData = async () => {
        const res = await fetch(settingUrl);
        const result = await res.json();
        setBackendData(result);
        setMobiles(result);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleViewDetails = (mobile) => {
        setSelectedMobile(mobile);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedMobile(null);
    };

    return (
        <div className="TheContainer">
            {mobiles.length > 0 ? (
                <div className="mobileGrid">
                    {mobiles.map((curr, index) => (
                        <div className='eachItem' key={index}>
                            <div className="phoneSection">
                                <img src={curr.image} alt="Phone" className="phoneImage" />
                                <div className="deviceInfo">
                                    <h2>{curr.product}</h2>
                                    <h3 className="price">${curr.price}</h3>
                                    <p className="description">{curr.description}</p>
                                </div>
                                <button className="viewDetailsBtn" onClick={() => handleViewDetails(curr)}>
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No phones available</p>
            )}
            {showModal && selectedMobile && (
                <div className="modalOverlay">
                    <div className="modalContent">
                        <span className="closeBtn" onClick={closeModal}>&times;</span>
                        <h2>{selectedMobile.product}</h2>
                        <div className="modalDetails">
                            <img src={selectedMobile.image} alt="Phone" className="modalImage" />
                            <div className="specs">
                                <h3>Specifications:</h3>
                                <p><strong>Display:</strong> {selectedMobile.specs.display}</p>
                                <p><strong>Battery:</strong> {selectedMobile.specs.battery}</p>
                                <p><strong>Camera:</strong> {selectedMobile.specs.camera}</p>
                                <p><strong>Storage:</strong> {selectedMobile.specs.storage}</p>
                                <p><strong>Connectivity:</strong> {selectedMobile.specs.connectivity}</p>
                            </div>
                            <div className="reviews">
                                <h3>Reviews:</h3>
                                <p>Positive Review: {selectedMobile.positiveReview} %</p>
                                <p>Negative Review: {selectedMobile.negativeReview} %</p>
                                <p>Neutral Review: {selectedMobile.neutralReview} %</p>
                            </div>
                            <div className="commentsSection">
                                <h4>Recent Comments:</h4>
                                <div className="innerChats">
                                    {selectedMobile.comments.map((rec, i) => (
                                        <p key={i}>{rec.text}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <CommentDisplayer index={mobiles.indexOf(selectedMobile)} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default FirstPageBK;
