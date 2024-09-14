import React, { useState, useEffect } from "react";
import "./PopUpWindow.css";

const PopUpWindow = () => {
  const [rating, setRating] = useState(0);
  const [reviewData, setReviewData] = useState({
    name: "",
    telephone: "",
    email: "",
    rating: "",
    message: "",
  });

  useEffect(() => {
    const ratingElement = document.querySelectorAll(".star");
    ratingElement.forEach((element, index) => {
      if (index < rating) {
        element.classList.add("highlight");
      } else {
        element.classList.remove("highlight");
      }
    });
  }, [rating]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    const ratingElement = document.querySelectorAll(".star");
    ratingElement.forEach((element) => {
      element.classList.remove("highlight");
    });
    console.log("Data was been transfered:-", reviewData)
    ;
  };

  return (
    <div className="popup" id="popUpWindow">
      <div className="popup-content">
        <div className="upperPart">
          <h2>Review</h2>
          <button className="close">&times;</button>
        </div>
        <form id="form" onSubmit={handleSubmit}>
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter the username"
            required
            onChange={handleChange}
          />
          <br />

          <label htmlFor="telephone">Phone no.:</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            placeholder="Enter the Contact number"
            required
            onChange={handleChange}
          />
          <br />

          <label htmlFor="email">Email Id:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter the email"
            required
            onChange={handleChange}
          />
          <br />

          <div className="rating-container">
            <label>Rating:</label>
            <div className="rating">
              <label htmlFor="star1" title="1 stars">
                <input
                  type="radio"
                  id="star1"
                  name="rating"
                  value="1"
                  onClick={(e) => setRating(parseInt(e.target.value))}
                  onChange={handleChange}
                />
                <span className="star">&#9733;</span>
              </label>
              <label htmlFor="star2" title="2 stars">
                <input
                  type="radio"
                  id="star2"
                  name="rating"
                  value="2"
                  onClick={(e) => setRating(parseInt(e.target.value))}
                  onChange={handleChange}
                />
                <span className="star">&#9733;</span>
              </label>
              <label htmlFor="star3" title="3 stars">
                <input
                  type="radio"
                  id="star3"
                  name="rating"
                  value="3"
                  onClick={(e) => setRating(parseInt(e.target.value))}
                  onChange={handleChange}
                />
                <span className="star">&#9733;</span>
              </label>
              <label htmlFor="star4" title="4 stars">
                <input
                  type="radio"
                  id="star4"
                  name="rating"
                  value="4"
                  onClick={(e) => setRating(parseInt(e.target.value))}
                  onChange={handleChange}
                />
                <span className="star">&#9733;</span>
              </label>
              <label htmlFor="star5" title="5 star">
                <input
                  type="radio"
                  id="star5"
                  name="rating"
                  value="5"
                  onClick={(e) => setRating(parseInt(e.target.value))}
                  onChange={handleChange}
                />
                <span className="star">&#9733;</span>
              </label>
            </div>
          </div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message ...."
            required
            onChange={handleChange}
          ></textarea>
          <br />

          <input type="submit" name="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default PopUpWindow;
