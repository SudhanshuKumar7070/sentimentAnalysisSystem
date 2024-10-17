import React, { useEffect, useState } from 'react';

import './firstPage.css';

const FirstPage = () => {
    const [search, setSearch] = useState('avengers');
    const [getData, setGetData] = useState([]);
    const [url, setUrl] = useState('');

    const fetcher = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        return data;
        
    }

    useEffect(() => {
        const fetchData = async () => {
            const movieData = await fetcher(url);
            setGetData(movieData);
        }
        if (search) {
            setUrl(`https://www.omdbapi.com/?apikey=f84f4744&t=${search}`);
            fetchData();
        }
    }, [search]);

    return (
        <div>
            <div className="container2">
                <div className="searchBar">
                    <input type="text" value={search} onChange={(e) => { setSearch(e.target.value); }} />
                    <button className='btnForSearch'>search</button>
                </div>
                <div className="Movie">
                    <div className="imgSec">
                        <img src={getData.Poster} alt="this Page" />
                    </div>
                    <div className="description">
                    </div>
                </div>
                <div className="box">
                    <div className="representingTools">
                    </div>   
                </div>
            </div>
        </div>
    );
}

export default FirstPage;
