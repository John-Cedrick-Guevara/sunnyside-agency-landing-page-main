import React, { useEffect, useState } from "react";

const AboutService = () => {
  

  return (
    <main className="About">
      <section className="about-layer">
        <img
          src={`../images/${
            window.innerWidth > 1000 ? "desktop" : "mobile"
          }/image-transform.jpg`}
          alt="asd"
        />
        <div className="texts">
          <h1>Transform your brand</h1>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage yor clients through comepelling visuals that do
            the most of the marketing for you.
          </p>
          <div className="link">
            <a href="#">Learn more</a>
            <hr />
          </div>
        </div>
      </section>
      <section className="about-layer">
        <img
          src={`../images/${
            window.innerWidth > 1000 ? "desktop" : "mobile"
          }/image-stand-out.jpg`}
          alt="asd"
        />
        <div className="texts ">
          <h1>Stand out to the right audience</h1>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <div className="link">
            <a href="#">Learn more</a>
            <hr />
          </div>
        </div>
      </section>
      <section className="service-layer">
        <div className="graphic-design ">
          <h1>Graphic design</h1>
          <p>
            Great design makes you memorable, We deliver artwork that
            underscores your brand message and captures potential clieant's
            attention
          </p>
        </div>
        <div className="photography">
          <h1>Photography</h1>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutService;
