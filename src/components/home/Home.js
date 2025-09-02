import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Initialize Bootstrap carousel when component mounts
    if (carouselRef.current) {
      // Import Bootstrap dynamically to ensure it's available
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
            
            console.log('Carousel initialized successfully');
          } catch (error) {
            console.error('Error initializing carousel:', error);
          }
        }
      }).catch(error => {
        console.error('Error importing Bootstrap:', error);
      });
    }
  }, []);

  return (
    <main className="home-page">
      <section className='hero'>
        <div 
          ref={carouselRef}
          id="heroCarousel" 
          className="carousel slide" 
          data-bs-ride="carousel" 
          data-bs-interval="3000"
          data-bs-wrap="true"
        >
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 hero-bg" src="/assets/img/home/hero-bg-3.jpeg" alt="First slide" />
              <div className="text-container">
                <h1>"Guided by Light, Driven by Care"</h1>
                <p>Comprehensive urological health solutions and education for modern men</p>
                <button className="main-btn btn-lg white px-4 py-3 mt-4">Learn More</button>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 hero-bg" src="/assets/img/home/hero-bg-2.jpg" alt="Second slide" />
              <div className="text-container">
                <h1>"Guided by Light, Driven by Care"</h1>
                <p>Comprehensive urological health solutions and education for modern men</p>
                <button className="main-btn btn-lg white px-4 py-3 mt-4">Learn More</button>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 hero-bg" src="/assets/img/home/hero-bg-1.webp" alt="Third slide" />
              <div className="text-container">
                <h1>"Guided by Light, Driven by Care"</h1>
                <p>Comprehensive urological health solutions and education for modern men</p>
                <button className="main-btn btn-lg white px-4 py-3 mt-4">Learn More</button>
              </div>
            </div>
          </div>
          
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

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

      <section className='mission' style={{ padding: "50px 0" }}>
        <div className="container">
          <h1 className='section-title text-center'>Our Mission</h1>
          <p className='text-center mb-5'>Dedicated to advancing men's intimate and geriatric wellness through expertise, empathy, and innovation.</p>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="mission-card h-100">
                <div className="mission-card-body text-center p-4">
                  <div className='mb-3'>
                    <img src="/assets/img/home/mission/m-1.png" alt="Mission Icon 1" className="img-fluid" style={{ maxHeight: "100px" }} />
                  </div>
                  <h3 className="h5 mb-3">Expert Care</h3>
                  <p className="text-muted">Professional healthcare services with clinical excellence</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mission-card h-100">
                <div className="mission-card-body text-center p-4">
                  <div className='mb-3'>
                    <img src="/assets/img/home/mission/m-1.png" alt="Mission Icon 2" className="img-fluid" style={{ maxHeight: "100px" }} />
                  </div>
                  <h3 className="h5 mb-3">Privacy First</h3>
                  <p className="text-muted">Complete confidentiality in all our services</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="mission-card h-100">
                <div className="mission-card-body text-center p-4">
                  <div className='mb-3'>
                    <img src="/assets/img/home/mission/m-1.png" alt="Mission Icon 3" className="img-fluid" style={{ maxHeight: "100px" }} />
                  </div>
                  <h3 className="h5 mb-3">Innovation</h3>
                  <p className="text-muted">Cutting-edge diagnostics and treatment approaches</p>
                </div>
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

      <section className='campaign'>
        <div className='container bg-white campaign-main'>
          <div className='text-center p-5'>
            <h1 className='section-title'>Men's Health Awareness Campaign</h1>
            <p className='w-75 mx-auto mb-4'>Breaking barriers and promoting open conversations about men's intimate health. Join our mission to normalize essential health screenings.</p>
            <button className="main-btn btn-lg px-5 py-3 orange">View All</button>
          </div>
        </div>
      </section>

      <section className='testimonials' style={{ padding: "50px 0" }}>
        <div className='container'>
          <h1 className='section-title text-center'>Testimonials & Trust</h1>
          <div className='row mt-5'>
            <div className='col-lg-4 col-md-6'>
              <div className='testimonial-card'>
                <div className='testimonial-card-body'>
                  <p>"The educational resources and support provided have been invaluable in my health journey. Professional, comprehensive, and trustworthy."</p>
                  <div className='testimonial-card-footer d-flex align-items-center justify-content-start'>
                    <img src="/assets/img/home/testimonials/t-1.png" alt="Testimonial 1" />
                    <div style={{ paddingLeft: "10px", paddingTop: "10px" }}>
                    <h3>Healthcare Professional</h3>
                    <p>Partner Institution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='testimonial-card'>
                <div className='testimonial-card-body'>
                  <p>"The educational resources and support provided have been invaluable in my health journey. Professional, comprehensive, and trustworthy."</p>
                  <div className='testimonial-card-footer d-flex align-items-center justify-content-start'>
                    <img src="/assets/img/home/testimonials/t-1.png" alt="Testimonial 1" />
                    <div style={{ paddingLeft: "10px", paddingTop: "10px" }}>
                    <h3>Healthcare Professional</h3>
                    <p>Partner Institution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='testimonial-card'>
                <div className='testimonial-card-body'>
                  <h5 style={{ fontWeight: "900" }}>Trust & Compliance</h5>
                  <div className='testimonial-card-footer d-flex align-items-center justify-content-start'>
                    <img src="/assets/img/home/testimonials/shield.png" alt="Testimonial 1" />
                    <div style={{ paddingLeft: "10px", paddingTop: "10px" }}>
                    <h3>DPDP Compliant</h3>
                    </div>
                  </div>
                  <div className='testimonial-card-footer d-flex align-items-center justify-content-start mt-2'>
                    <img src="/assets/img/home/testimonials/flower.png" alt="Testimonial 1" />
                    <div style={{ paddingLeft: "10px", paddingTop: "10px" }}>
                    <h3>HDMP Certified</h3>
                    </div>
                  </div>
                  <div className='testimonial-card-footer d-flex align-items-center justify-content-start mt-2'>
                    <img src="/assets/img/home/testimonials/secure.png" alt="Testimonial 1" />
                    <div style={{ paddingLeft: "10px", paddingTop: "10px" }}>
                    <h3>EHR Secure</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
