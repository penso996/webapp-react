// ReviewForm.jsx

// Import functions from React
import { useState, useEffect } from "react";
// Import axios
import axios from "axios";

const ReviewForm = () => {

    // Set initial form state (empty)
    const initialFormState = { name: "", vote: "", text: "" }
    // useState to handle formData
    const [formData, setFormData] = useState(initialFormState);

    // FUNCTION to handle input change
    const handleFormState = (e) => {
        const { value, name } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // RENDER
    return (
        <div>
            <form>
                <label htmlFor="name">NOME UTENTE</label>
                <input type="text" name="name" value={formData.reviewName} onChange={handleFormState} />

                <label htmlFor="vote">VOTO</label>
                <input type="text" name="vote" value={formData.reviewVote} onChange={handleFormState} />

                <label htmlFor="text">DESCRIZIONE</label>
                <input type="text" name="text" value={formData.reviewText} onChange={handleFormState} />
            </form>
        </div>
    );
}

export default ReviewForm;