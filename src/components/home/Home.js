import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import { Navigation, Footer, PartnersSection, CampaignSection } from '../shared';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const carouselRef = useRef(null);
  const awarenessCarouselRef = useRef(null);
  const impactSectionRef = useRef(null);

  // Counter states
  const [customersCount, setCustomersCount] = useState(0);
  const [clinicsCount, setClinicsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Counting animation function
  const animateCount = (targetValue, setter, duration = 2000) => {
    const startValue = 0;
    const increment = targetValue / (duration / 16); // 60fps
    let currentValue = startValue;

    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(timer);
      }

      if (targetValue === 4.9) {
        setter(parseFloat(currentValue.toFixed(1)));
      } else {
        setter(Math.floor(currentValue));
      }
    }, 16);
  };

  // Intersection Observer for counting animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Start counting animations
            animateCount(4863, setCustomersCount);
            animateCount(200, setClinicsCount);
            animateCount(4.9, setSatisfactionCount);
            animateCount(25, setCountriesCount);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (impactSectionRef.current) {
      observer.observe(impactSectionRef.current);
    }

    return () => {
      if (impactSectionRef.current) {
        observer.unobserve(impactSectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100
    });
  }, []);

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

            // Create new carousel instance with mobile-optimized settings
            const carousel = new Carousel(carouselElement, {
              interval: 5000, // Longer interval for better mobile experience
              ride: 'carousel',
              wrap: true,
              touch: true,
              keyboard: true, // Enable keyboard navigation
              pause: 'hover' // Pause on hover
            });

            // Start the carousel
            carousel.cycle();

            // Add touch event listeners for better mobile experience
            let touchStartX = 0;
            let touchEndX = 0;

            carouselElement.addEventListener('touchstart', (e) => {
              touchStartX = e.changedTouches[0].screenX;
              carousel.pause();
            });

            carouselElement.addEventListener('touchend', (e) => {
              touchEndX = e.changedTouches[0].screenX;
              handleSwipe();
              carousel.cycle();
            });

            function handleSwipe() {
              const swipeThreshold = 50;
              const diff = touchStartX - touchEndX;

              if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                  carousel.next();
                } else {
                  carousel.prev();
                }
              }
            }

            console.log('Carousel initialized successfully with mobile optimizations');
          } catch (error) {
            console.error('Error initializing carousel:', error);
          }
        }
      }).catch(error => {
        console.error('Error importing Bootstrap:', error);
      });
    }
  }, []);

  useEffect(() => {
    // Initialize Awareness carousel when component mounts
    if (awarenessCarouselRef.current) {
      import('bootstrap').then(({ Carousel }) => {
        const carouselElement = awarenessCarouselRef.current;
        if (carouselElement) {
          try {
            // Destroy existing carousel if it exists
            const existingCarousel = Carousel.getInstance(carouselElement);
            if (existingCarousel) {
              existingCarousel.dispose();
            }

            // Create new carousel instance with mobile-optimized settings
            const carousel = new Carousel(carouselElement, {
              interval: 3500, // Slightly different interval for awareness carousel
              ride: 'carousel',
              wrap: true,
              touch: true,
              keyboard: true,
              pause: 'hover'
            });

            // Start the carousel
            carousel.cycle();

            // Add touch event listeners for better mobile experience
            carouselElement.addEventListener('touchstart', () => {
              carousel.pause();
            });

            carouselElement.addEventListener('touchend', () => {
              carousel.cycle();
            });

            console.log('Awareness carousel initialized successfully with mobile optimizations');
          } catch (error) {
            console.error('Error initializing awareness carousel:', error);
          }
        }
      }).catch(error => {
        console.error('Error importing Bootstrap for awareness carousel:', error);
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
                <p>From pharma to devices, from innovation to care — Dhyota is building a healthier
                  tomorrow for men, families, and communities.</p>
                <button className="main-btn btn-lg white px-4 py-3 mt-4">Explore Solutions</button>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 hero-bg" src="/assets/img/home/hero-bg-2.jpg" alt="Second slide" />
              <div className="text-container">
                <h1>"Innovation with Purpose, Care without Boundaries"</h1>
                <p>From advanced pharma to cutting-edge medtech, Dhyota is shaping a world where men’s health drives stronger families and thriving communities.</p>
                <button className="main-btn btn-lg white px-4 py-3 mt-4">Join the Journey</button>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 hero-bg" src="/assets/img/home/hero-bg-1.webp" alt="Third slide" />
              <div className="text-container">
                <h1>"Empowering Health, Inspiring Tomorrow"</h1>
                <p>Through pharma, devices, and medical technology, Dhyota is redefining care — creating a sustainable ecosystem for healthier lives everywhere.</p>
                <button className="main-btn btn-lg white px-4 py-3 mt-4">Discover Our Vision</button>
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

      <section className='impact' style={{ padding: "50px 0" }} ref={impactSectionRef}>
        <div className="container">
          <h1 className='section-title text-center' data-aos="fade-down">Our Impact</h1>
          <p className='text-center mb-5' data-aos="fade-up" data-aos-delay="100">Trusted by healthcare professionals and patients worldwide</p>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="impact-card h-100">
                <div className="card-body text-center p-4">
                  <img
                    src="/assets/img/home/impacts/i-1.png"
                    className="img-fluid mb-3"
                    alt="Customers Served"
                    style={{ maxHeight: "80px" }}
                  />
                  <h3 className="h5 text-capitalize mb-3">{customersCount.toLocaleString()}+</h3>
                  <p className="text-muted" style={{ fontSize: "16px" }}>
                    Customers Served
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="impact-card h-100">
                <div className="card-body text-center p-4">
                  <img
                    src="/assets/img/home/impacts/i-2.png"
                    className="img-fluid mb-3"
                    alt="Partner Clinics"
                    style={{ maxHeight: "80px" }}
                  />
                  <h3 className="h5 text-capitalize mb-3">{clinicsCount}+</h3>
                  <p className="text-muted" style={{ fontSize: "16px" }}>
                    Partner Clinics
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="impact-card h-100">
                <div className="card-body text-center p-4">
                  <img
                    src="/assets/img/home/impacts/i-3.png"
                    className="img-fluid mb-3"
                    alt="Patient Satisfaction"
                    style={{ maxHeight: "80px" }}
                  />
                  <h3 className="h5 text-capitalize mb-3">{satisfactionCount}/5</h3>
                  <p className="text-muted" style={{ fontSize: "16px" }}>
                    Patient Satisfaction
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="impact-card h-100">
                <div className="card-body text-center p-4">
                  <img
                    src="/assets/img/home/impacts/i-4.png"
                    className="img-fluid mb-3"
                    alt="Countries Served"
                    style={{ maxHeight: "80px" }}
                  />
                  <h3 className="h5 text-capitalize mb-3">{countriesCount}</h3>
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
        <h1 className='section-title text-center' data-aos="fade-down">Health Awareness Initiatives</h1>
        <div className='container awareness-main mt-5' data-aos="fade-up" data-aos-delay="200">
          <div
            ref={awarenessCarouselRef}
            id="campaignCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3500"
            data-bs-pause="hover"
          >
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#campaignCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#campaignCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#campaignCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner awareness-carousel-inner">
              <div className="carousel-item awareness-carousel-item active">
                <div className='text-center p-5'>
                  <h6>Men’s Health Clinics</h6>
                  <p className='w-75 mx-auto mb-4'>Specialized diagnosis and treatment</p>
                  <button className="main-btn btn-lg white px-4 py-2">View All</button>
                </div>
              </div>

              <div className="carousel-item awareness-carousel-item">
                <div className='text-center p-5'>
                  <h6>Telehealth Solutions</h6>
                  <p className='w-75 mx-auto mb-4'>Virtual consultations for accessible care</p>
                  <button className="main-btn btn-lg white px-4 py-2">View All</button>
                </div>
              </div>

              <div className="carousel-item awareness-carousel-item">
                <div className='text-center p-5'>
                  <h6>Health Education</h6>
                  <p className='w-75 mx-auto mb-4'>Webinars, workshops, and digital resources</p>
                  <button className="main-btn btn-lg white px-4 py-2">View All</button>
                </div>
              </div>
              <div className="carousel-item awareness-carousel-item">
                <div className='text-center p-5'>
                  <h6>Corporate Wellness Programs</h6>
                  <p className='w-75 mx-auto mb-4'>Workplace health solutions for male employees</p>
                  <button className="main-btn btn-lg white px-4 py-2">View All</button>
                </div>
              </div>
              <div className="carousel-item awareness-carousel-item">
                <div className='text-center p-5'>
                  <h6>Research &amp; Innovation</h6>
                  <p className='w-75 mx-auto mb-4'>Driving the science of men’s health forward</p>
                  <button className="main-btn btn-lg white px-4 py-2">View All</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mission' style={{ padding: "50px 0" }}>
        <div className="container">
          <h1 className='section-title text-center' data-aos="fade-down">Our Mission</h1>
          <p className='text-center mb-5' data-aos="fade-up" data-aos-delay="100">Dedicated to advancing men's intimate and geriatric wellness through expertise, empathy, and innovation.</p>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="mission-card h-100">
                <div className="mission-card-body text-center p-4">
                  <div className='mb-3' data-aos="zoom-in" data-aos-delay="300">
                    <img src="/assets/img/home/mission/m-1.png" alt="Mission Icon 1" className="img-fluid" style={{ maxHeight: "100px" }} />
                  </div>
                  <h3 className="h5 mb-3" data-aos="fade-up" data-aos-delay="400">Empowering Men’s Health</h3>
                  <p className="text-muted">Bridging the gaps in men’s healthcare by delivering trusted, innovative, and
                    accessible solutions in pharmaceuticals, medical devices, and digital healthcare services.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="mission-card h-100">
                <div className="mission-card-body text-center p-4">
                  <div className='mb-3' data-aos="zoom-in" data-aos-delay="400">
                    <img src="/assets/img/home/mission/m-1.png" alt="Mission Icon 2" className="img-fluid" style={{ maxHeight: "100px" }} />
                  </div>
                  <h3 className="h5 mb-3" data-aos="fade-up" data-aos-delay="500">Global Wellness</h3>
                  <p className="text-muted">guiding light for men’s health globally, while building a robust healthcare
                    ecosystem spanning pharma, devices, disposables, and medical technology.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="mission-card h-100">
                <div className="mission-card-body text-center p-4">
                  <div className='mb-3' data-aos="zoom-in" data-aos-delay="500">
                    <img src="/assets/img/home/mission/m-1.png" alt="Mission Icon 3" className="img-fluid" style={{ maxHeight: "100px" }} />
                  </div>
                  <h3 className="h5 mb-3" data-aos="fade-up" data-aos-delay="600">Innovation</h3>
                  <p className="text-muted">Driving transformative solutions in men’s health worldwide by fostering a robust healthcare ecosystem across pharmaceuticals, medical devices, disposables, and cutting-edge medical technologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <PartnersSection /> */}

      <CampaignSection title="Partner With Us" description="Let’s Build the Future of Men’s Health Together. We collaborate with pharma companies,
medical device innovators, hospitals &amp; specialty clinics, and research institutions." buttonText="Start a Partnership" buttonClass="orange" />

      <section className='testimonials' style={{ padding: "50px 0" }}>
        <div className='container'>
          <h1 className='section-title text-center' data-aos="fade-down">Testimonials & Trust</h1>
          <div className='row mt-5'>
            <div className='col-lg-4 col-md-6 mb-3' data-aos="fade-up" data-aos-delay="100">
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
            <div className='col-lg-4 col-md-6 mb-3' data-aos="fade-up" data-aos-delay="200">
              <div className='testimonial-card'>
                <div className='testimonial-card-body'>
                  <p>"Partnering with them has shown me how true innovation can transform patient outcomes. Their holistic approach ensures men’s health receives the attention, research, and solutions it has long deserved."</p>
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
            <div className='col-lg-4 col-md-6 mb-3' data-aos="fade-up" data-aos-delay="300">
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
