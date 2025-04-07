// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <header className="ds-base ds-u-fill--primary-darkest">
      <div className="ds-l-container">
        <div className="ds-u-display--flex ds-u-justify-content--between ds-u-align-items--center ds-u-padding-y--2">
          <div className="ds-u-display--flex ds-u-align-items--center ds-u-gap--3">
            <div className="ds-u-display--flex ds-u-align-items--center ds-u-gap--3">
              <div className="ds-u-padding-x--2">
                <a href="#" className="ds-c-link ds-c-link--inverse">
                  Home
                </a>
              </div>
              <div className="ds-u-padding-x--2">
                <a href="#" className=" ds-c-link--inverse">
                  About ASETT
                </a>
              </div>
              <div className="ds-u-padding-x--2">
                <a href="#" className="ds-c-link ds-c-link--inverse">
                  Contact Us
                </a>
              </div>
              <div className="ds-u-padding-x--2">
                <a className="ds-c-link--inverse ds-u-display--flex ds-u-align-items--center">
                  Support <span className="ds-u-margin-left--1">▼</span>
                </a>
              </div>
            </div>
          </div>
          <div className="ds-u-display--flex ds-u-align-items--center ds-u-gap--2">
            <button className="ds-c-button ds-c-button--transparent ds-u-color--white">
              Register
            </button>
            <span className="ds-u-color--white">|</span>
            <button className="ds-c-button ds-c-button--primary">Login</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
