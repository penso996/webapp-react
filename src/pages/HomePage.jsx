// HomePage.jsx

// Import functions from React

// Import context

// Import page_single_components
import MovieCard from "../page_single_components/MovieCard.jsx";

export default function HomePage(props) {

    const { AppMoviesData } = props;

    return (
        <main>
            <div>
                {AppMoviesData.map((movie) => (
                    <MovieCard key={movie.id} HomePageMoviesData={movie} />
                ))}
            </div>
        </main>
    );
}