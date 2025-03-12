// ReviewsCard.jsx

const ReviewsCard = (props) => {

    const { MovieDetailReviewsData } = props;
    const reviewVote = MovieDetailReviewsData.vote;

    // RENDER
    return (
        <div className="review-card">
            <h3>{MovieDetailReviewsData.name}</h3>
            <div>
                <i className="fa-solid fa-star-of-life" style={{ color: reviewVote >= 1 ? "#f39c12" : "rgba(0, 0, 0, 0.3)" }} />
                <i className="fa-solid fa-star-of-life" style={{ color: reviewVote >= 2 ? "#f39c12" : "rgba(0, 0, 0, 0.3)" }} />
                <i className="fa-solid fa-star-of-life" style={{ color: reviewVote >= 3 ? "#f39c12" : "rgba(0, 0, 0, 0.3)" }} />
                <i className="fa-solid fa-star-of-life" style={{ color: reviewVote >= 4 ? "#f39c12" : "rgba(0, 0, 0, 0.3)" }} />
                <i className="fa-solid fa-star-of-life" style={{ color: reviewVote >= 5 ? "#f39c12" : "rgba(0, 0, 0, 0.3)" }} />
            </div>
            <p>{MovieDetailReviewsData.text || "L'utente non ha scritto una recensione"}</p>
        </div>
    );
}

export default ReviewsCard;