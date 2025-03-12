// ReviewsCard.jsx

const ReviewsCard = (props) => {

    const { MovieDetailReviewsData } = props;
    const reviewVote = MovieDetailReviewsData.vote;

    // RENDER
    return (
        <div className="review-card">
            <h3>{MovieDetailReviewsData.name}</h3>
            <div>
                <i className="fa-solid fa-star-of-life" style={{ color: reviewVote >= 1 ? "rgba(243, 156, 18, 0.7)" : "rgba(0, 0, 0, 0.3)" }} />
                <i className="fa-solid fa-star-of-life" style={{ color: reviewVote >= 2 ? "rgba(243, 156, 18, 0.7)" : "rgba(0, 0, 0, 0.3)" }} />
                <i className="fa-solid fa-star-of-life" style={{ color: reviewVote >= 3 ? "rgba(243, 156, 18, 0.7)" : "rgba(0, 0, 0, 0.3)" }} />
                <i className="fa-solid fa-star-of-life" style={{ color: reviewVote >= 4 ? "rgba(243, 156, 18, 0.7)" : "rgba(0, 0, 0, 0.3)" }} />
                <i className="fa-solid fa-star-of-life" style={{ color: reviewVote >= 5 ? "rgba(243, 156, 18, 0.7)" : "rgba(0, 0, 0, 0.3)" }} />
            </div>
            <p>{MovieDetailReviewsData.text}</p>
        </div>
    );
}

export default ReviewsCard;