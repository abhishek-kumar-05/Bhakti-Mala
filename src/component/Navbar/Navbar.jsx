import React from "react";
import "./Navbar.css";
import PopUpWindow from "../PopUpWindow/PopUpWindow";
import { useState } from "react";

const Navbar = () => {
  // State variable 'toggle' initialized to false with updater function 'setToggle'
  const [toggle, setToggle] = useState(false);

  // Toggle the state value between true and false by updating toogle to its opposite value
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div id="nav">
        <h1>भक्ति माला</h1>
        <ul id="navbar">
          <li>
            <a href="#" id="login-icon">
              <i
                id="register"
                className="fa-solid fa-user fa-xl"
                onClick={handleToggle} //calling handleToogle button when the icon is clicked
              ></i>
            </a>
          </li>
        </ul>
      </div>
      {/* Check wheter the toogle is true or false for rendering the PopUpWindow component
      and passing handleToogle function as prop to PopUpWindow  */}
      {toggle && <PopUpWindow isClicked={handleToggle} />}
    </>
  );
};

// exporting navbar component
export default Navbar;
