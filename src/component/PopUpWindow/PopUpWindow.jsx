import React, { useState, useEffect } from "react";
import "./PopUpWindow.css";
import { handleFormData } from "../../firebase.js";
import Notify from "../Notify/Notify.jsx";

const PopUpWindow = ({ isClicked }) => {
  // State variable 'rating' initialized to 0 with updater function 'setRating'
  const [rating, setRating] = useState(0);

  // State variable 'reviewData' initialized with default values for name, telephone, email, rating, and message with updater function setReviewData
  const [reviewData, setReviewData] = useState({
    username: "",
    telephone: "",
    email: "",
    rating: "",
    message: "",
  });

  // State variable 'showNotify' initialized to false with updater function 'setShowNotify'
  const [showNotify, setShowNotify] = useState(false);

  // Updateing the 'highlight' class on star elements based on the 'rating' state whenever 'rating' changes
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

  // handle the input changes by updating the 'reviewData" state while keeping the previous data intact
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Handle form submission: prevent default behavior, reset form, remove star highlights, and send review data
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    const ratingElement = document.querySelectorAll(".star");
    ratingElement.forEach((element) => {
      element.classList.remove("highlight");
    });

    // destructuring the usefull fields from "reviewData"
    const { username, telephone, email, rating, message } = reviewData;

    // sending the form data to "handleFormData" and updating the notification if the data is sent successfully
    handleFormData(username, telephone, email, rating, message)
      .then((response) => {
        if (response) {
          setShowNotify(true); //showing Notification if the data is successfully sent

          // Removing notification and invoking " isclicked() " to close popUpWindow function  after 3 second
          setTimeout(() => {
            setShowNotify(false);
            isClicked();
          }, 3000);
        } else {
          console.error("Failed to send data"); //showing message in console if it's the data sent is unsuccessfull
        }
      })
      .catch((error) => {
        console.log("Something went wrong", error); //Showing error if something misshappen
      });
  };

  return (
    <>
      {/* creating the popup Window with required field */}
      <div className="popup" id="popUpWindow">
        <div className="popup-content">
          <div className="upperPart">
            <h2>Review</h2>
            {/* handling clicked on button and invoking " isClicked " function to close PopUpWindow */}
            <button className="close" onClick={isClicked}>
              &times;
            </button>
          </div>
          {/* notification component  */}
          <Notify isvisible={showNotify} />

          {/* creating form with name,telephone,email,rating,message field handling input changes and form submission */}
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
    </>
  );
};

// exporting PopUpComponent
export default PopUpWindow;
