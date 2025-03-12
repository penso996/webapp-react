// MovieDetail.jsx

// Import page_single_component
import ReviewsCard from "../page_single_components/ReviewsCard.jsx"

export default function MovieDetail() {

    // RENDER
    return (
        <main>
            <section className="movie-detail-section">

                <div className="movie-info-box">
                    <img src="http://localhost:3000/movies_cover/inception.jpg" alt="titolooo" />

                    <div className="movie-info-text">
                        <h2>TITOLO<small> diretto da AUTORE</small></h2>
                        <h4>2010</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam maxime sequi delectus beatae quibusdam tenetur aspernatur, magnam repellat rem esse accusamus labore iusto dolore! Sed id velit quam maxime.</p>
                    </div>
                </div>

                <div className="movie-reviews">
                    <h2>REVIEWS</h2>
                    <ReviewsCard />
                    <ReviewsCard />
                    <ReviewsCard />
                </div>

            </section>
        </main>
    );
}