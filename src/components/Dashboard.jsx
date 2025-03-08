// src/components/Dashboard.jsx

import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Optional: Import CSS for styling

const Dashboard = () => {
  const navigate = useNavigate();

  // Sample movie data. In a real application, this might come from an API or global state.
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      director: 'Christopher Nolan',
      genre: 'Science Fiction',
      releaseYear: 2010,
      synopsis: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
      posterUrl: 'https://image.tmdb.org/t/p/original/xymM5aW6MDcH5AR9I3CamSegJd6.jpgg',
    },
    {
      id: 2,
      title: 'The Matrix',
      director: 'The Wachowskis',
      genre: 'Action',
      releaseYear: 1999,
      synopsis: 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
      posterUrl: 'https://image.tmdb.org/t/p/original/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg',
    },
    // Add more movie objects as needed
  ]);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Movie Collection</h1>
      </header>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
