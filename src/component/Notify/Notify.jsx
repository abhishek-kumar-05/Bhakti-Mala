import React from "react";
import "./Notify.css"; 

// creating notify component with "isvisible" prop 
// Displaying this component only when the prop is true 
const Notify = ({ isvisible }) => {
  return (
    <>
    {/* Render component if "isvisible" is true */}
      {isvisible && (
        <div className="notify-Container">
          <p id="notify-Content">Your Review is recorded, Thank You</p>
        </div>
      )}
    </>
  );
};

// exporting notify component
export default Notify;
