import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="container mx-auto">
        <div className="header_content ">
          <div className="header_title">
            <a href="#">Start Boostrap</a>
          </div>
          <div className="header_nav">
            <ul>
              <li>
                <a className="active" href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
