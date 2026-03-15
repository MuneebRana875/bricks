import React from "react";

function HeroSection() {
  return (
    <section className="hero-section d-flex flex-row align-items-center justify-content-between  flex-direction  ">
      <div className="container text-center">

        <button className="guide-btn rounded-pill d-flex  mx-auto">
          LET US GUIDE YOUR HOME
        </button>

        <p className="hero-subtitle">
          We've more than 745,000 apartments, place & plot.
        </p>

        <h1 className="hero-title">
          Find Your Perfect Home
        </h1>

        <div className="search-box mx-auto rounded-pill">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Enter Name, Keywords..."
          />

         
        </div>

        <p className="explore-text">
          Explore all things property
        </p>

        <div className="d-flex justify-content-center gap-3">
          <button className="filter-btn active rounded-pill ">All Properties</button>
          <button className="filter-btn rounded-pill">For Sale</button>
          <button className="filter-btn rounded-pill">For Rent</button>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
