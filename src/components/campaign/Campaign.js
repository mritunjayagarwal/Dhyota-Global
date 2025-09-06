import React, { useEffect, useRef } from 'react';
import { campaignData } from './data';
import './Campaign.css';
import { SupportSection } from '../shared';

const Campaign = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Initialize Bootstrap carousel when component mounts
    if (carouselRef.current) {
      import('bootstrap').then(({ Carousel }) => {
        const carouselElement = carouselRef.current;
        if (carouselElement) {
          try {
            // Destroy existing carousel if it exists
            const existingCarousel = Carousel.getInstance(carouselElement);
            if (existingCarousel) {
              existingCarousel.dispose();
            }
            
            // Create new carousel instance
            const carousel = new Carousel(carouselElement, {
              interval: 3000,
              ride: 'carousel',
              wrap: true,
              touch: true
            });
            
            // Start the carousel
            carousel.cycle();
            
            console.log('Campaign carousel initialized successfully');
          } catch (error) {
            console.error('Error initializing campaign carousel:', error);
          }
        }
      }).catch(error => {
        console.error('Error importing Bootstrap:', error);
      });
    }
  }, []);

  return (
    <main className="campaign-page">
      {/* Hero Carousel Section */}
      <section className='hero'>
        <div 
          ref={carouselRef}
          id="campaignCarousel" 
          className="carousel slide" 
          data-bs-ride="carousel" 
          data-bs-interval="3000"
          data-bs-wrap="true"
        >
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#campaignCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#campaignCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#campaignCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
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
              <div className="text-container main-carousel-text">
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
              <div className="text-container main-carousel-text">
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
              <div className="text-container main-carousel-text">
                <h1>Guided by Light, Driven by Care</h1>
                <p>Discover our ongoing efforts to champion men's wellbeing and break the stigma around urological health.</p>
              </div>
            </div>
          </div>
          
          <button className="carousel-control-prev" type="button" data-bs-target="#campaignCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#campaignCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Featured Campaigns Section */}
      <section className="featured-campaigns">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Featured Campaigns</h2>
              <p className="section-subtitle">Join our most impactful initiatives</p>
            </div>
          </div>
          <div className="row">
            {campaignData.featuredCampaigns.map((campaign) => (
              <div key={campaign.id} className="col-lg-4 col-md-6 mb-4">
                <div className="campaign-card">
                  <div className="campaign-card-image">
                    <img src={campaign.image} alt={campaign.title} />
                  </div>
                  <div className="campaign-card-content">
                    <h4 className="campaign-card-title">{campaign.title}</h4>
                    <p className="campaign-card-description">{campaign.description}</p>
                    <button className="btn yellow">Support Campaign</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className='impact' style={{ padding: "50px 0" }}>
        <div className="container">
          <h1 className='section-title text-center'>Our Impact</h1>
          <p className='text-center mb-5'>Trusted by healthcare professionals and patients worldwide</p>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="impact-card h-100">
                <div className="card-body text-center p-4">
                  <img
                    src="/assets/img/home/impacts/i-1.png"
                    className="img-fluid mb-3"
                    alt="Customers Served"
                    style={{ maxHeight: "80px" }}
                  />
                  <h3 className="h5 text-capitalize mb-3">10,000+</h3>
                  <p className="text-muted" style={{ fontSize: "16px" }}>
                    Customers Served
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="impact-card h-100">
                <div className="card-body text-center p-4">
                  <img
                    src="/assets/img/home/impacts/i-2.png"
                    className="img-fluid mb-3"
                    alt="Partner Clinics"
                    style={{ maxHeight: "80px" }}
                  />
                  <h3 className="h5 text-capitalize mb-3">50+</h3>
                  <p className="text-muted" style={{ fontSize: "16px" }}>
                    Partner Clinics
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="impact-card h-100">
                <div className="card-body text-center p-4">
                  <img
                    src="/assets/img/home/impacts/i-3.png"
                    className="img-fluid mb-3"
                    alt="Patient Satisfaction"
                    style={{ maxHeight: "80px" }}
                  />
                  <h3 className="h5 text-capitalize mb-3">4.9/5</h3>
                  <p className="text-muted" style={{ fontSize: "16px" }}>
                    Patient Satisfaction
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="impact-card h-100">
                <div className="card-body text-center p-4">
                  <img
                    src="/assets/img/home/impacts/i-4.png"
                    className="img-fluid mb-3"
                    alt="Countries Served"
                    style={{ maxHeight: "80px" }}
                  />
                  <h3 className="h5 text-capitalize mb-3">25</h3>
                  <p className="text-muted" style={{ fontSize: "16px" }}>
                    Countries Served
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='all-campaigns'>
        <div className="container">
          <h1 className='section-title text-center'>All Campaigns</h1>
          <p className='text-center mb-5'>Explore our comprehensive health awareness initiatives</p>
          <div className="row">
            {campaignData.allCampaigns.map((campaign) => (
              <div key={campaign.id} className="col-lg-4 col-md-6 mb-4">
                <div className="campaign-card">
                  <div className="campaign-card-image">
                    <img src={campaign.image} alt={campaign.title} />
                  </div>
                  <div className="campaign-card-content">
                    <h4 className="campaign-card-title">{campaign.title}</h4>
                    <p className="campaign-card-description">{campaign.description}</p>
                    <button className="btn yellow">Support Campaign</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='get-involved'>
        <div className="container">
          <h1 className='section-title text-center'>Get Involved</h1>
          <p className='text-center mb-5'>Join us in making a difference in men's health awareness</p>
          <div className="row g-4">
            {campaignData.getInvolved.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="impact-card h-100">
                  <div className="card-body text-center p-4">
                    <img
                      src={item.icon}
                      className="img-fluid mb-3 d-block mx-auto"
                      alt={item.title}
                      style={{ maxHeight: "75px", width: "auto" }}
                    />
                    <h3 className="h5 text-capitalize mb-3">{item.title}</h3>
                    <p className="text-muted mb-4" style={{ fontSize: "16px" }}>
                      {item.description}
                    </p>
                    <button className="main-btn orange">
                      {item.title}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SupportSection />
    </main>
  );
};

export default Campaign;