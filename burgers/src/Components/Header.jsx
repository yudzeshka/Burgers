import React from "react";

function Header() {
  return (
    <div id="main">
      <div className="header-heading">
        <h3>It's Great Time For A Good Taste Of Burger</h3>
        <h1>
          <span>Burger</span> FOR
          <br />
          Week
        </h1>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="header-btns">
          <a href="#" className="header-btn">
            Order
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
