import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from './Request';
import axios from './axios';

function Banner() {

    const [movie,setMovie] = useState([]);
    
    useEffect(()=> {
        async function fetchData() {
            const response = await axios.get(requests.fetchTrending);
            setMovie(
                response.data.results[
                    Math.floor(Math.random() * response.data.results.length - 1)
                ]
            );
            return response;
        }

        fetchData();
    } ,[]);

    // console.log(movie)
    
    function truncate(string,no_of_char) {
        return (string?.length > no_of_char ? 
            string.substr(0, no_of_char - 1) + '...': string);
    }

    return (
        <header
        className="banner"
        style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center", 
        }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">Movie Name</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                {truncate( `this is the test description this is the test description
                this is the test description this is the test description
                this is the test description this is the test description
                this is the test description this is the test description
                this is the test description this is the test description
                this is the test description this is the test description
                this is the test description this is the test description
                this is the test description this is the test description
                this is the test description this is the test description
                this is the test description this is the test description
                this is the test description this is the test description`, 120)}
                </h1>
            </div>
            <div className="banner--fadeBottom"/>
        </header>
    )
}

export default Banner
