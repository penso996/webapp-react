// ReviewForm.jsx

// Import functions from React
import { useState, useEffect } from "react";
// Import axios
import axios from "axios";

const ReviewForm = (props) => {

    const { MovieDetailMovieId, fetchMovieData } = props;

    // Set initial form state (empty)
    const initialFormState = { name: "", vote: "", text: "" }
    // useState to handle formData
    const [formData, setFormData] = useState(initialFormState);

    // FUNCTION to handle input change
    const handleFormState = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // FUNCTION to send form data
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3000/movies/${MovieDetailMovieId}/reviews`, formData)
            .then(() => {
                setFormData(initialFormState);
                fetchMovieData();
            })
            .catch(err => console.error(err));
    }


    // RENDER
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">NOME UTENTE</label>
                <input type="text" name="name" value={formData.reviewName} onChange={handleFormState} />

                <label htmlFor="vote">VOTO</label>
                <input type="number" min="1" max="5" name="vote" value={formData.reviewVote} onChange={handleFormState} />

                <label htmlFor="text">DESCRIZIONE</label>
                <input type="text" name="text" value={formData.reviewText} onChange={handleFormState} />

                <button type="submit">invia</button>
            </form>
        </div>
    );
}

export default ReviewForm;