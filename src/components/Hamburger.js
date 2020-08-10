import React from 'react';
/*
// Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });
*/
const HamburgerElement = () => {
  return (
    <div className="hamburger__menu">
      <button className="hamburger hamburger--collapse" type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>

  );

};

export default HamburgerElement;
