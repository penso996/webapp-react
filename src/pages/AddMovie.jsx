// AddMovie.jsx

// Import functions from React
import axios from "axios";
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const AddMovie = () => {

    // useNavigate ro redirect
    const navigate = useNavigate()

    // Set initial form state (empty)
    const initialFormState = { title: "", director: "", genre: "", release_year: "", abstract: "", image: null };
    // useState to handle formData
    const [formData, setFormData] = useState(initialFormState);

    // FUNCTION to handle input change
    const handleFormState = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value
        }));
    };

    // FUNCTION to send form data
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/movies/", formData, { headers: { "Content-Type": "multipart/form-data" } })
            .then(() => {
                setFormData(initialFormState),
                    navigate("/")
            })
            .catch(err => console.error(err));
    }

    // RENDER
    return (
        <main>
            <div className="form">
                <h3>INSERISCI UN FILM</h3>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">TITOLO</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleFormState}
                    />

                    <label htmlFor="director">DIRETTORE</label>
                    <input
                        type="text"
                        name="director"
                        value={formData.director}
                        onChange={handleFormState}
                    />

                    <label htmlFor="genre">GENERE</label>
                    <input
                        type="text"
                        name="genre"
                        value={formData.genre}
                        onChange={handleFormState}
                    />

                    <label htmlFor="release_year">ANNO</label>
                    <input
                        type="number" min="1910" max="2050"
                        name="release_year"
                        value={formData.release_year}
                        onChange={handleFormState}
                    />

                    <label htmlFor="abstract">SINOSSI</label>
                    <textarea
                        name="abstract"
                        value={formData.abstract}
                        onChange={handleFormState}
                    />

                    <label htmlFor="image"></label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleFormState}
                    />

                    <button type="submit">INVIA</button>
                </form>

            </div >
        </main>
    );
}

export default AddMovie;