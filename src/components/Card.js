import React from 'react'

export default function Card({movie}) {
const formatDate = (date) => {
    let [yy, mm, dd] = date.split("-")
    return [dd, mm, yy].join("-")
}

// formatDate()
  return (
    <div className='card'>
    <h1>{movie.title}</h1>
    <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500` + movie.poster_path : "./public/poster.jpg" } alt="poster"/>
   <p> {movie.overview}</p>
    <h4>{movie.vote_average}/10<span>⭐</span></h4>
    <h5>{formatDate(movie.release_date)}</h5>
    </div>
  )
}
