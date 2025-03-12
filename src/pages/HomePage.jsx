// HomePage.jsx

// Import functions from React
import { useState, useEffect } from "react";
// Import axios
import axios from "axios";

// Import page_single_components
import MovieCard from "../page_single_components/MovieCard.jsx";

export default function HomePage() {

    // useState to handle moviesData  
    const [moviesData, setMoviesData] = useState([]);

    // FUNCTION to handle API request for Movies
    const fetchMoviesData = () => {
        axios.get(`http://localhost:3000/movies/`)
            .then((res) => setMoviesData(res.data))
            .catch((err) => console.error("Error fetching Movies data", err));
    };

    // Call fetchMoviesData
    useEffect(() => {
        fetchMoviesData();
    }, []);

    // RENDER
    return (
        <main>
            {moviesData.length === 0 ? (
                <h1>Nessun film trovato</h1>
            ) : (
                moviesData.map((movie) => (
                    <MovieCard key={movie.id} HomePageMoviesData={movie} />
                ))
            )}
        </main>
    );
}