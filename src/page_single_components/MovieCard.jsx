// MovieCard.jsx

const MovieCard = (props) => {

    const { HomePageMoviesData } = props;

    // RENDER
    return (
        <div className="movies-card">
            <h3>{HomePageMoviesData.title.toUpperCase()}</h3>
            <img src={HomePageMoviesData.image} alt={HomePageMoviesData.title} />
            <p>VEDI ALTRO...</p>
        </div>
    );
}

export default MovieCard;