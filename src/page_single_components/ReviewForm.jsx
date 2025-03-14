// ReviewForm.jsx

// Import functions from React
import { useState } from "react";
// Import axios
import axios from "axios";

const ReviewForm = (props) => {

    const { MovieDetailMovieId, fetchMovieData } = props;

    // Set initial form state (empty)
    const initialFormState = { name: "", vote: "", text: "" };
    // useState to handle formData
    const [formData, setFormData] = useState(initialFormState);

    // FUNCTION to handle input change
    const handleFormState = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // FUNCTION to send form data
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3000/movies/${MovieDetailMovieId}/reviews`, formData)
            .then(() => {
                setFormData(initialFormState);
                fetchMovieData();
            })
            .catch(err => console.error(err));
    };


    // RENDER
    return (
        <div className="review-form">
            <h3>LASCIA LA TUA RECENSIONE</h3>
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">NOME UTENTE</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormState}
                />

                <label htmlFor="vote">VOTO</label>
                <input
                    type="number" min="1" max="5"
                    name="vote"
                    value={formData.vote}
                    onChange={handleFormState}
                />

                <label htmlFor="text">DESCRIZIONE</label>
                <textarea
                    name="text"
                    value={formData.text}
                    onChange={handleFormState}
                ></textarea>

                <button type="submit">INVIA</button>
            </form>
        </div >
    );
}

export default ReviewForm;