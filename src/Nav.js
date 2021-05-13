import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  // a code to monitor scrolling event
  //create a state
  const [show, handleShow] = useState(false);

  useEffect(() => {
    //effect
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      const _fnEmptyFunctionPointer = () => {};
      window.removeEventListener("scroll", _fnEmptyFunctionPointer);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
        className="nav__logo"
      />

      <img
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netflix Logo"
        className="nav__avatar"
      />
    </div>
  );
};

export default Nav;
