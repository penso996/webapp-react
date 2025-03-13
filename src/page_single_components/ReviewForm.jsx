// ReviewForm.jsx

const ReviewForm = () => {

    // RENDER
    return (
        <div>
            <form>
                <label htmlFor="name">NOME UTENTE</label>
                <input type="text" name="name" />

                <label htmlFor="vote">VOTO</label>
                <input type="text" name="vote" />

                <label htmlFor="text">DESCRIZIONE</label>
                <input type="text" name="text" />
            </form>
        </div>
    );
}

export default ReviewForm;