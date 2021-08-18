import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Button.css";

function Button() {
  return (
    <>
      <Link to="signup">
        <button className="btn">
          <Icons.FaUserPlus />
          <span>Sign Up</span>
        </button>
      </Link>
    </>
  );
}

export default Button;
