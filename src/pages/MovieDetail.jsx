// MovieDetail.jsx

// Import functions from React
import { useState, useEffect } from "react";
// Import useParams from react-router-dom
import { useParams } from "react-router-dom";
// Import axios
import axios from "axios";

// Import page_single_component
import ReviewsCard from "../page_single_components/ReviewsCard.jsx";

export default function MovieDetail() {

    // Get the movie ID from the URL
    const { id } = useParams(); // No conversion needed

    // useState to handle movieData and reviewsData
    const [movieData, setMovieData] = useState([]);
    const [reviewsData, setReviewsData] = useState([]);

    // FUNCTION to handle API request for Movie and Reviews
    const fetchMovieData = () => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then((res) => {
                setMovieData(res.data);
                setReviewsData(res.data.reviews);
            })
            .catch((err) => console.error("Error fetching Movie data", err));
    };

    // Call fetchMovieData
    useEffect(() => {
        fetchMovieData();
    }, [id]);


    // RENDER
    return (
        <main>
            <section className="movie-detail-section">
                <div className="movie-info-box">
                    <img src={movieData.image} alt={movieData.title} />

                    <div className="movie-info-text">
                        <h2>{movieData.title}<small> diretto da {movieData.director}</small></h2>
                        <h4>{movieData.release_year}</h4>
                        <p>{movieData.abstract}</p>
                    </div>
                </div>

                <div className="movie-reviews">
                    <h2>REVIEWS</h2>
                    {reviewsData.length > 0 ? (
                        reviewsData.map((review) => (
                            <ReviewsCard key={review.id} MovieDetailReviewsData={review} />
                        ))
                    ) : (
                        <p>Nessuna recensione disponibile.</p>
                    )}
                </div>
            </section>
        </main>
    );
}