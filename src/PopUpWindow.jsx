import React from "react";

const PopUpWindow = () => {
  return (
    <div className="popup" id="popUpWindow">
      <div className="popup-content">
        <h2>Review</h2>
        <form id="form">
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter the username"
            required
          />
          <br />

          <label htmlFor="telephone">Phone no.:</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            placeholder="Enter the Contact number"
            required
          />
          <br />

          <label htmlFor="email">Email Id:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter the email"
            required
          />
          <br />

          <div className="rating-container">
            <label>Rating:</label>
            <div className="rating">
              <label htmlFor="star1" title="1 stars">
                <input type="radio" id="star1" name="rating" value="1" />
                <span className="star">&#9733;</span>
              </label>
              <label htmlFor="star2" title="2 stars">
                <input type="radio" id="star2" name="rating" value="2" />
                <span className="star">&#9733;</span>
              </label>
              <label htmlFor="star3" title="3 stars">
                <input type="radio" id="star3" name="rating" value="3" />
                <span className="star">&#9733;</span>
              </label>
              <label htmlFor="star4" title="4 stars">
                <input type="radio" id="star4" name="rating" value="4" />
                <span className="star">&#9733;</span>
              </label>
              <label htmlFor="star5" title="5 star">
                <input type="radio" id="star5" name="rating" value="5" />
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
          ></textarea>
          <br />

          <input type="submit" name="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default PopUpWindow;
