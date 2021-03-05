import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from './Request';
import axios from './axios';

function Banner() {

    const [movie,setMovie] = useState([]);
    
    useEffect(()=> {
        async function fetchData() {
            const response = await axios.get("https://api.themoviedb.org/3/discover/tv?api_key=f81980ff410e46f422d64ddf3a56dddd&with_networks=213");
            // const response = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=f81980ff410e46f422d64ddf3a56dddd&with_networks=213");
            // const apiData = response.json(); 
            setMovie(
                response.data.results[
                    Math.floor(Math.random() * response.data.results.length - 1)
                ]
            );
            return response;
            // console.log(apiData);
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
            // backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center", 
        }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name }
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                {truncate( movie?.overview, 120)}
                </h1>
            </div>
            <div className="banner--fadeBottom"/>
        </header>
    )
}

export default Banner
