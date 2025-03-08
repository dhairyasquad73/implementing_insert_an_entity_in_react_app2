import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import MovieCard from "./components/MovieCard";
import "./Dashboard.css"; // Import the CSS for styling

const Dashboard = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      genre: "Science Fiction",
      releaseYear: 2010,
      synopsis:
        "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      posterUrl: "https://image.tmdb.org/t/p/original/xymM5aW6MDcH5AR9I3CamSegJd6.jpg",
    },
    {
      id: 2,
      title: "The Matrix",
      director: "The Wachowskis",
      genre: "Action",
      releaseYear: 1999,
      synopsis:
        "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
      posterUrl: "https://image.tmdb.org/t/p/original/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    },
  ]);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Movie Collection</h1>
        <Link to="/add-movie" className="add-movie-button">Add Movie</Link>
      </header>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

const AddMovie = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "",
    synopsis: "",
    posterUrl: "",
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Movie added:", movie);
    navigate("/");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Add a New Movie</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Title" value={movie.title} onChange={handleChange} className="border p-2 w-full" required />
        <input type="text" name="director" placeholder="Director" value={movie.director} onChange={handleChange} className="border p-2 w-full" required />
        <select name="genre" value={movie.genre} onChange={handleChange} className="border p-2 w-full" required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
        <input type="number" name="releaseYear" placeholder="Release Year" value={movie.releaseYear} onChange={handleChange} className="border p-2 w-full" required />
        <textarea name="synopsis" placeholder="Synopsis" value={movie.synopsis} onChange={handleChange} className="border p-2 w-full" required />
        <input type="url" name="posterUrl" placeholder="Poster Image URL" value={movie.posterUrl} onChange={handleChange} className="border p-2 w-full" required />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
        <button type="button" onClick={() => navigate("/")} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">Cancel</button>
      </form>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-movie" element={<AddMovie />} />
      </Routes>
    </Router>
  );
}
