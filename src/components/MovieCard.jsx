// src/components/MovieCard.jsx

import React from 'react';
import './MovieCard.css'; // Optional: Import CSS for styling

const MovieCard = ({ movie }) => {
  const { title, director, genre, releaseYear, synopsis, posterUrl } = movie;

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={`${title} Poster`} className="movie-poster" />
      <div className="movie-details">
        <h2 className="movie-title">{title}</h2>
        <p><strong>Director:</strong> {director}</p>
        <p><strong>Genre:</strong> {genre}</p>
        <p><strong>Release Year:</strong> {releaseYear}</p>
        <p className="movie-synopsis">{synopsis}</p>
      </div>
    </div>
  );
};

export default MovieCard;
