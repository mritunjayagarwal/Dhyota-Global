import React, { useEffect, useRef } from 'react';
import './About.css';
import { journeyData } from './data';

const About = () => {
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
    <main className="about-page">
      <section className='hero'>
        <img src="/assets/img/about/hero-bg.png" alt="About Us" className='img-fluid' style = {{"width": "100%", height: "auto" }} />
      </section>
      <section>
        <div className='container text-center'>
          <h1 className='section-title'>Our Story</h1>
          <p className='text-muted'>We are a team of passionate individuals who are dedicated to providing the best possible care to our patients.</p>
          <p className='text-muted'>We are a team of passionate individuals who are dedicated to providing the best possible care to our patients.</p>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='story-card'>
                <img src="/assets/img/about/story-1.png" alt="Our Story" className='img-fluid' />
                <h3>Our Story</h3>
                <p>We are a team of passionate individuals who are dedicated to providing the best possible care to our patients.</p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='story-card'>
                <img src="/assets/img/about/story-1.png" alt="Our Story" className='img-fluid' />
                <h3>Our Story</h3>
                <p>We are a team of passionate individuals who are dedicated to providing the best possible care to our patients.</p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='story-card'>
                <img src="/assets/img/about/story-1.png" alt="Our Story" className='img-fluid' />
                <h3>Our Story</h3>
                <p>We are a team of passionate individuals who are dedicated to providing the best possible care to our patients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='journey-section'>
        <div className='container'>
          <h1 className='section-title'>Our Journey</h1>
          <div className='timeline mt-5'>
            {journeyData.map((milestone, index) => (
              <div key={milestone.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className='timeline-content'>
                  {/* <div className='timeline-icon'>{milestone.icon}</div> */}
                  <div className='timeline-year'>{milestone.year}</div>
                  <h3 className='timeline-title'>{milestone.title}</h3>
                  <p className='timeline-description'>{milestone.description}</p>
                </div>
                <div className='timeline-dot'>
                  <img src={milestone.logo} alt={milestone.title} className='timeline-dot-logo' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <h1 className='section-title'>Our Team</h1>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='team-card text-center'>
                <img src="/assets/img/about/team-1.png" alt="Our Team" className='img-fluid' />
                <h4>Our Team</h4>
                <p>We are a team of passionate individuals who are dedicated to providing the best possible care to our patients.</p>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='team-card text-center'>
                <img src="/assets/img/about/team-1.png" alt="Our Team" className='img-fluid' />
                <h4>Our Team</h4>
                <p>We are a team of passionate individuals who are dedicated to providing the best possible care to our patients.</p>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='team-card text-center'>
                <img src="/assets/img/about/team-1.png" alt="Our Team" className='img-fluid' />
                <h4>Our Team</h4>
                <p>We are a team of passionate individuals who are dedicated to providing the best possible care to our patients.</p>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='team-card text-center'>
                <img src="/assets/img/about/team-1.png" alt="Our Team" className='img-fluid' />
                <h4>Our Team</h4>
                <p>We are a team of passionate individuals who are dedicated to providing the best possible care to our patients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className='partners' style={{ padding: "50px 0" }}>
        <div className="container">
          <h1 className='section-title text-center'>Our Partners</h1>
          <div className="row g-4 justify-content-center mt-4">
            <div className="col-lg-2 col-md-3 col-6">
              <img src="/assets/img/home/partners/p-1.png" alt="Partner 1" className="img-fluid" style={{ maxHeight: "100px" }} />
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <img src="/assets/img/home/partners/p-2.png" alt="Partner 2" className="img-fluid" style={{ maxHeight: "100px" }} />
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <img src="/assets/img/home/partners/p-3.png" alt="Partner 3" className="img-fluid" style={{ maxHeight: "100px" }} />
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <img src="/assets/img/home/partners/p-4.png" alt="Partner 4" className="img-fluid" style={{ maxHeight: "100px" }} />
            </div>
          </div>
        </div>
      </section>
      
      <section className='awareness'>
        <h1 className='section-title text-center'>Health Awareness Initiatives</h1>
        <div className='container awareness-main mt-5'>
          <div id="campaignCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="hover">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#campaignCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#campaignCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#campaignCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            
            <div className="carousel-inner awareness-carousel-inner">
              <div className="carousel-item awareness-carousel-item active">
                <div className='text-center p-5'>
                  <h6>Men's Health Awareness Campaign</h6>
                  <p className='w-75 mx-auto mb-4'>Breaking barriers and promoting open conversations about men's intimate health. Join our awareness to normalize essential health screenings.</p>
                  <button className="main-btn btn-lg white px-4 py-2">View All</button>
                </div>
              </div>
              
              <div className="carousel-item awareness-carousel-item">
                <div className='text-center p-5'>
                <h6>Men's Health Awareness Campaign</h6>
                  <p className='w-75 mx-auto mb-4'>Breaking barriers and promoting open conversations about men's intimate health. Join our awareness to normalize essential health screenings.</p>
                  <button className="main-btn btn-lg white px-4 py-2">View All</button>
                </div>
              </div>
              
              <div className="carousel-item awareness-carousel-item">
                <div className='text-center p-5'>
                <h6>Men's Health Awareness Campaign</h6>
                  <p className='w-75 mx-auto mb-4'>Breaking barriers and promoting open conversations about men's intimate health. Join our awareness to normalize essential health screenings.</p>
                  <button className="main-btn btn-lg white px-4 py-2">View All</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
