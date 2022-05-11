import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import Card from './Card';

export default function Discover() {

// const APY_KEY = "ee47b89b75cb56983d4f8026ef0c04af";
// const BASE_URL = " http://developers.themoviedb.org/3";

const [movies, setMovies] = useState([]);
const [search, setSearch] = useState("");
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
    .slice(0, 24).map((movie) => (
    <Card key={movie.id} movie={movie}/>
    ))}
        


    </div>
  )
}
