import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import Card from './Card';
// import Watchlist from './Watchlist';

export default function Discover() {

// const APY_KEY = "ee47b89b75cb56983d4f8026ef0c04af";
// const BASE_URL = " http://developers.themoviedb.org/3";

const [movies, setMovies] = useState([]);
const [search, setSearch] = useState("avenger");
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ee47b89b75cb56983d4f8026ef0c04af&query=${search}&language=en-US&page=1&include_adult=false`)
      // console.log(results.data.results);
      let finalResult = results.data.results;
      setMovies(finalResult);
    }
    fetchData();

  }, [search]);
  return (
    <div className='first-page'>
       <a href='./Watchlist.js' className='navlink'>
       
            Coup de coeur
        </a>
    <div className='form'>
    <form>
      <input
      type="search"
      placeholder="search movie"
      id="search-input"
      onChange={(e) => setSearch(e.target.value)}
      />
      <input type="submit" value="Rechercher" />
      
    </form>

    </div>
    {movies
    .slice(0, 12)
    .sort((a, b) => {
      return b.vote_average - a.vote_average;
      
    })
    .map((movie) => (
    <Card key={movie.id} movie={movie}/>
    ))}
        


    </div>
  )
}
