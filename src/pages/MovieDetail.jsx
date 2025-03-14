// MovieDetail.jsx

// Import functions from React
import { useState, useEffect } from "react";
// Import useParams from react-router-dom
import { useParams, useNavigate } from "react-router-dom";
// Import axios
import axios from "axios";

// Import page_single_component
import ReviewsCard from "../page_single_components/ReviewsCard.jsx";
import ReviewForm from "../page_single_components/ReviewForm.jsx";

export default function MovieDetail() {

    // useNavigate to redirect
    const redirect = useNavigate();

    // Get the movie ID from the URL
    const { id } = useParams();

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
            .catch(err => {
                console.error("Error fetching Movie data", err);
                if (err.status === 404) redirect("/404")
            });
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
                    <img
                        src={movieData.image || "/card_image_not_found.png"}
                        alt={movieData.title}
                    />
                    <div className="movie-info-text">
                        <h2>{movieData.title}<small> diretto da <strong>{movieData.director}</strong></small></h2>
                        <h4>{movieData.release_year || "anno sconosciuto"}</h4>
                        <h4><i>{movieData.genre || "genere sconosciuto"}</i></h4>
                        <p>{movieData.abstract || "nessuna descrizione"}</p>
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

                    <ReviewForm MovieDetailMovieId={movieData.id} fetchMovieData={fetchMovieData} />
                </div>

            </section>
        </main>
    );
}