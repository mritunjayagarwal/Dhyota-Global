import React, { useEffect, useRef } from 'react';
import './Partners.css';

const Partners = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Initialize Bootstrap carousel
    if (carouselRef.current && window.bootstrap) {
      const carousel = new window.bootstrap.Carousel(carouselRef.current, {
        interval: 3000,
        wrap: true
      });
    }
  }, []);

  return (
    <main className="partners-page">
      <section className='hero'>
        <div 
          ref={carouselRef}
          id="partnersCarousel" 
          className="carousel slide" 
          data-bs-ride="carousel" 
          data-bs-interval="3000"
          data-bs-wrap="true"
        >
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#partnersCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#partnersCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#partnersCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div 
                className="d-block w-100 hero-bg" 
                style={{
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
                              linear-gradient(135deg, #FFD93B 0%, #FFB347 50%, #FF6F00 100%)`,
                }}
              ></div>
              <div className="text-container">
                <h1>Guided by Light, Driven by Care</h1>
                <p>Discover our ongoing efforts to champion men's wellbeing and break the stigma around urological health.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div 
                className="d-block w-100 hero-bg" 
                style={{
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
                              linear-gradient(135deg, #FFD93B 0%, #FFB347 50%, #FF6F00 100%)`,
                  height: "100vh",
                  minHeight: "600px"
                }}
              ></div>
              <div className="text-container">
                <h1>Guided by Light, Driven by Care</h1>
                <p>Discover our ongoing efforts to champion men's wellbeing and break the stigma around urological health.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div 
                className="d-block w-100 hero-bg" 
                style={{
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
                              linear-gradient(135deg, #FFD93B 0%, #FFB347 50%, #FF6F00 100%)`,
                  height: "100vh",
                  minHeight: "600px"
                }}
              ></div>
              <div className="text-container">
                <h1>Guided by Light, Driven by Care</h1>
                <p>Discover our ongoing efforts to champion men's wellbeing and break the stigma around urological health.</p>
              </div>
            </div>
          </div>
          
          <button className="carousel-control-prev" type="button" data-bs-target="#partnersCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#partnersCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="section-title text-center">Strategic Partner Network</h1>
          <p className="text-center mb-5">Working alongside industry leaders to deliver comprehensive healthcare solutions and drive innovation across the medical technology landscape.</p>
          <div className="row g-4 justify-content-center mt-4">
            <div className="col-lg-2 col-md-3 col-6">
              <img src="/assets/img/home/partners/p-1.png" alt="Partner 1" className="img-fluid" style={{ maxHeight: "100px" }} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Partners;
