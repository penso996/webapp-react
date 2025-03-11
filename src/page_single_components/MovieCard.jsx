// FilmCard.jsx

const MovieCard = (props) => {

    const { HomePageMoviesData } = props;

    // RENDER
    return (
        <div>
            <h3>{HomePageMoviesData.title}</h3>
            <img src={HomePageMoviesData.image} alt={HomePageMoviesData.title} />
        </div>
    );
}

export default MovieCard;