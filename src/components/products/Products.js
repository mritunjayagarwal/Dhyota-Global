import React, { useEffect, useRef, useState } from 'react';
import './Products.css';
import { productsData } from './data';
import Isotope from 'isotope-layout';
import { SupportSection } from '../shared';

const Products = () => {
  const carouselRef = useRef(null);
  const campaignCarouselRef = useRef(null);
  const isotopeRef = useRef(null);
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState('*');

  useEffect(() => {
    // Initialize Bootstrap carousel
    if (carouselRef.current && window.bootstrap) {
      const carousel = new window.bootstrap.Carousel(carouselRef.current, {
        interval: 3000,
        wrap: true
      });
    }
  }, []);

  useEffect(() => {
    // Initialize Campaign carousel
    if (campaignCarouselRef.current && window.bootstrap) {
      const campaignCarousel = new window.bootstrap.Carousel(campaignCarouselRef.current, {
        interval: 3000,
        wrap: true,
        pause: 'hover'
      });
    }
  }, []);

  // Initialize Isotope
  useEffect(() => {
    if (isotopeRef.current) {
      const iso = new Isotope(isotopeRef.current, {
        itemSelector: '.product-item',
        layoutMode: 'masonry',
        percentPosition: true,
        transitionDuration: '0.6s'
      });
      setIsotope(iso);
    }
    return () => {
      if (isotope) {
        isotope.destroy();
      }
    };
  }, []);

  // Handle filtering
  useEffect(() => {
    if (isotope) {
      isotope.arrange({ filter: filterKey });
    }
  }, [isotope, filterKey]);

  const handleFilterClick = (filter) => {
    setFilterKey(filter);
  };

  return (
    <main className="products-page">
      <section className='hero-section'>
        <div className='hero'>
        <div 
          ref={carouselRef}
          id="productsCarousel" 
          className="carousel slide" 
          data-bs-ride="carousel" 
          data-bs-interval="3000"
          data-bs-wrap="true"
        >
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#productsCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#productsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#productsCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
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
                <h1>Targeted Medicines for Men’s Health</h1>
                <p>From urological and hormonal health to mental wellness and general fitness, Dhyota’s pharmaceutical products are designed to support men at every stage of life with safe, effective, and science-backed therapies.</p>
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
                <h1>Trusted Solutions, Better Outcomes</h1>
                <p>Dhyota delivers a comprehensive range of medicines focused on improving men’s health — addressing vitality, recovery, and overall well-being with innovative formulations and quality you can trust.</p>
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
                <h1>Holistic Care Through Medicines</h1>
                <p>Our pharmaceuticals go beyond treatment — they promote preventive care, lifestyle support, and balanced wellness for men, helping them lead healthier and more confident lives.</p>
              </div>
            </div>
          </div>
          
          <button className="carousel-control-prev" type="button" data-bs-target="#productsCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#productsCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="filter-menu-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="filter-menu">
                  <h3 className="filter-title">Filter Products</h3>
                  <div className="filter-buttons">
                    {productsData.categories.map((category) => (
                      <button
                        key={category.id}
                        className={`filter-btn ${filterKey === category.filter ? 'active' : ''}`}
                        onClick={() => handleFilterClick(category.filter)}
                        data-filter={category.filter}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section id="products-grid" className="products-grid-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section-title">Our Products</h2>
              <p className="section-subtitle">Discover our comprehensive range of men's health products and solutions</p>
            </div>
          </div>
          <div ref={isotopeRef} className="products-grid">
            {productsData.products.map((product) => (
              <div key={product.id} className={`product-item ${product.category}`}>
                <div className="campaign-card">
                  <div className="campaign-card-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                                      <div className="campaign-card-content">
                      <h4 className="campaign-card-title">{product.name}</h4>
                      <p className="campaign-card-description">{product.description}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className='awareness'>
        <div className='container awareness-main mt-5'>
          <div 
            ref={campaignCarouselRef}
            id="campaignCarousel" 
            className="carousel slide" 
            data-bs-ride="carousel" 
            data-bs-interval="3000" 
            data-bs-pause="hover"
          >
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#campaignCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#campaignCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#campaignCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            
            <div className="carousel-inner awareness-carousel-inner">
              <div className="carousel-item awareness-carousel-item active">
                <div className='row bg-white h-100'>
                  <div className='col-lg-6 p-5'>
                    <p></p>
                    <h6 className='awareness-title mb-0'>Men's Health Awareness Campaign</h6>
                    <p className='mb-4 awareness-description text-start'>Breaking barriers and promoting open conversations about men's intimate health. Join our awareness to normalize essential health screenings.</p>
                    <button className="main-btn btn-lg orange px-5 py-2">View All</button>
                  </div>
                  <div className='col-lg-6'>
                    <img src="/assets/img/products/wellness/w-1.png" alt="Awareness 1" className='img-fluid' style={{ marginBottom: "50px" }} />
                  </div>
                </div>
              </div>
              
              <div className="carousel-item awareness-carousel-item active">
                <div className='row bg-white h-100'>
                  <div className='col-lg-6 p-5'>
                    <p></p>
                    <h6 className='awareness-title mb-0'>Men's Health Awareness Campaign</h6>
                    <p className='mb-4 awareness-description text-start'>Breaking barriers and promoting open conversations about men's intimate health. Join our awareness to normalize essential health screenings.</p>
                    <button className="main-btn btn-lg orange px-5 py-2">View All</button>
                  </div>
                  <div className='col-lg-6'>
                    <img src="/assets/img/products/wellness/w-1.png" alt="Awareness 1" className='img-fluid' />
                  </div>
                </div>
              </div>

              <div className="carousel-item awareness-carousel-item active">
                <div className='row bg-white h-100'>
                  <div className='col-lg-6 p-5'>
                    <p></p>
                    <h6 className='awareness-title mb-0'>Men's Health Awareness Campaign</h6>
                    <p className='mb-4 awareness-description text-start'>Breaking barriers and promoting open conversations about men's intimate health. Join our awareness to normalize essential health screenings.</p>
                    <button className="main-btn btn-lg orange px-5 py-2">View All</button>
                  </div>
                  <div className='col-lg-6'>
                    <img src="/assets/img/products/wellness/w-1.png" alt="Awareness 1" className='img-fluid' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
                  <h3 className="h5 text-capitalize mb-3">4863+</h3>
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
                  <h3 className="h5 text-capitalize mb-3">200+</h3>
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
      
      <section className='testimonials' style={{ padding: "50px 0", backgroundColor: "#f8f9fa" }}>
        <div className='container'>
          <h1 className='section-title text-center'>Testimonials & Trust</h1>
          <p className='text-center mb-5'>Trusted by healthcare professionals and patients worldwide</p>
          <div className='row mt-5'>
            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='testimonial-card'>
                <div className='testimonial-card-body'>
                  <p>"Their commitment to innovation in men’s health is unmatched. By integrating pharmaceuticals, devices, and medical technology under one ecosystem, they’ve made quality healthcare more accessible and impactful worldwide."</p>
                  <div className='testimonial-card-footer d-flex align-items-center justify-content-start'>
                    <img src="/assets/img/home/testimonials/arjun.webp" alt="Testimonial 1" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                    <div style={{ paddingLeft: "10px", paddingTop: "10px" }}>
                      <h3>Dr. Arjun Mehta</h3>
                      <p>Urologist & Global Health Advocate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='testimonial-card'>
                <div className='testimonial-card-body'>
                  <p>"Partnering with them has shown me how true innovation can transform patient outcomes. Their holistic approach ensures men's health receives the attention, research, and solutions it has long deserved."</p>
                  <div className='testimonial-card-footer d-flex align-items-center justify-content-start'>
                    <img src="/assets/img/home/testimonials/ananya.webp" alt="Testimonial 1" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                    <div style={{ paddingLeft: "10px", paddingTop: "10px" }}>
                      <h3>Ananya Rao</h3>
                      <p>Healthcare Technology Consultant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mb-3'>
              <div className='testimonial-card'>
                <div className='testimonial-card-body'>
                  <p>"Collaborating with them has shown me how meaningful innovation can improve patient outcomes. Their comprehensive approach ensures men’s health receives the attention, research, and solutions it has long deserved."</p>
                  <div className='testimonial-card-footer d-flex align-items-center justify-content-start'>
                    <img src="/assets/img/home/testimonials/3.jpeg" alt="Testimonial 1" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                    <div style={{ paddingLeft: "10px", paddingTop: "10px" }}>
                      <h3>Rahul Mehta</h3>
                      <p>Urology Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <SupportSection 
        title="Discover Solutions for Every Stage of Men's Health"
        description="Join thousands of healthcare professionals who trust Dhyota Global for comprehensive wellness solutions."
        buttonText="View Products"
        buttonClass="white"
        scrollToSection="#products-grid"
      />
    </main>
  );
};

export default Products;