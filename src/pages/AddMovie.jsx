// AddMovie.jsx

// Import functions from React
import { useState } from "react";

const AddMovie = () => {

    // Set initial form state (empty)
    const initialFormState = { title: "", director: "", genre: "", release_year: "", abstract: "", image: null };
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

    // RENDER
    return (
        <main>
            <div className="form">
                <h3>INSERISCI UN FILM</h3>

                <form>
                    <label htmlFor="title">TITOLO</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                    // onChange={handleFormState}
                    />

                    <label htmlFor="director">DIRETTORE</label>
                    <input
                        type="text"
                        name="director"
                        value={formData.director}
                    // onChange={handleFormState}
                    />

                    <label htmlFor="genre">GENERE</label>
                    <input
                        type="text"
                        name="genre"
                        value={formData.genre}
                    // onChange={handleFormState}
                    />

                    <label htmlFor="release_year">ANNO</label>
                    <input
                        type="number" min="1800" max="2200"
                        name="release_year"
                        value={formData.release_year}
                    // onChange={handleFormState}
                    />

                    <label htmlFor="abstract">SINOSSI</label>
                    <textarea
                        name="abstract"
                        value={formData.abstract}
                    // onChange={handleFormState}
                    ></textarea>

                    <label htmlFor="image"></label>
                    <input type="file" name="image" />

                    <button type="submit">INVIA</button>
                </form>

            </div >
        </main>
    );
}

export default AddMovie;