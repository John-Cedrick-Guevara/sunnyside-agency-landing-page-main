import React, { useState } from "react";

const MainView = () => {
  const [menu, setMenu] = useState(false);

  console.log(menu);

  return (
    <section className="main-view">
      <nav>
        <img className="logo" src="../images/logo.svg" alt="" />
        <img
          className="menu"
          src="../images/icon-hamburger.svg"
          alt=""
          onClick={() => setMenu((prev) => !prev)}
        />

        <div className="desktop-nav">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <p className="contact">contact</p>
        </div>

        {menu && (
          <menu>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <p className="contact">contact</p>
          </menu>
        )}
      </nav>
      <h1>we are creatives</h1>
      <img src="../images/icon-arrow-down.svg" alt="" />
    </section>
  );
};

export default MainView;
