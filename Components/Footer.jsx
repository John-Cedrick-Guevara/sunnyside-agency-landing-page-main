import React from "react";

const Footer = () => {
  return (
    <footer>
      <section className="images">
        <img
          src={`../images/${
            window.innerWidth > 1000 ? "desktop" : "mobile"
          }/image-gallery-milkbottles.jpg`}
          alt=""
        />
        <img
          src={`../images/${
            window.innerWidth > 1000 ? "desktop" : "mobile"
          }/image-gallery-orange.jpg`}
          alt=""
        />

        <img
          src={`../images/${
            window.innerWidth > 1000 ? "desktop" : "mobile"
          }/image-gallery-cone.jpg`}
          alt=""
        />
        <img
          src={`../images/${
            window.innerWidth > 1000
              ? "desktop/image-gallery-sugarcubes"
              : "mobile/image-gallery-sugar-cubes"
          }.jpg`}
          alt=""
        />
      </section>

      <section className="contacts">
        <h1 className="footer-header">sunnyside</h1>
        <div className="asp">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
        </div>

        <div className="socials">
          <img src="../images/icon-facebook.svg" alt="" />
          <img src="../images/icon-instagram.svg" alt="" />
          <img src="../images/icon-twitter.svg" alt="" />
          <img src="../images/icon-pinterest.svg" alt="" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
