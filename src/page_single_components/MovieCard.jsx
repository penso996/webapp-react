// MovieCard.jsx

// Import functions from React
import { NavLink } from 'react-router-dom';

const MovieCard = (props) => {

    const { HomePageMoviesData } = props;

    // RENDER
    return (
        <div className="movies-card">
            <h3>{HomePageMoviesData.title.toUpperCase()}</h3>
            <img src={HomePageMoviesData.image} alt={HomePageMoviesData.title} />
            <NavLink to={`/movies/${HomePageMoviesData.id}`}>SCHEDA DEL FILM</NavLink>
        </div>
    );
}

export default MovieCard;