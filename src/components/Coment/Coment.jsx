import { useState } from "react";
import "./Coment.css";

function Coment() {
    const [review, setReview] = useState("");
    const [submittedReview, setSubmittedReview] = useState("");

    const handleSubmit = () => {
        if (review.trim() === "") return;
        setSubmittedReview(review);
        setReview("");
    };

    return (
        <section className="interactive-review">
            <h2>Your Feedback Matters</h2>
            <p className="subtitle">
            </p>

            <div className="input-box">
                <input
                    type="text"
                    placeholder="Write your review..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>

            {submittedReview && (
                <div className="review-display">
                    <h4>Emily</h4>
                    <p>{submittedReview}</p>
                </div>
            )}
        </section>
    );
}

export default Coment
