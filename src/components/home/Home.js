import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import { Navigation, Footer, PartnersSection, CampaignSection } from '../shared';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const carouselRef = useRef(null);
  const awarenessCarouselRef = useRef(null);
  const awarenessCarousel2Ref = useRef(null);
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

  useEffect(() => {
    // Initialize second Awareness carousel when component mounts
    if (awarenessCarousel2Ref.current) {
      import('bootstrap').then(({ Carousel }) => {
        const carouselElement = awarenessCarousel2Ref.current;
        if (carouselElement) {
          try {
            // Destroy existing carousel if it exists
            const existingCarousel = Carousel.getInstance(carouselElement);
            if (existingCarousel) {
              existingCarousel.dispose();
            }

            // Create new carousel instance with mobile-optimized settings
            const carousel = new Carousel(carouselElement, {
              interval: 4000, // Different interval for second awareness carousel
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

            console.log('Second awareness carousel initialized successfully with mobile optimizations');
          } catch (error) {
            console.error('Error initializing second awareness carousel:', error);
          }
        }
      }).catch(error => {
        console.error('Error importing Bootstrap for second awareness carousel:', error);
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
              <img className="d-block w-100 hero-bg" src="/assets/img/home/her-3.png" alt="First slide" />
              <div className="text-container">
                <h1>"Guided by Light, Driven by Care"</h1>
                <p>From pharma to devices, from innovation to care — Dhyota is building a healthier
                  tomorrow for men, families, and communities.</p>
                <button className="main-btn btn-lg white px-4 py-3 mt-4">Explore Solutions</button>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 hero-bg" src="/assets/img/home/hero-bg-4.jpeg" alt="Second slide" />
              <div className="text-container">
                <h1>"Innovation with Purpose, Care without Boundaries"</h1>
                <p>From advanced pharma to cutting-edge medtech, Dhyota is shaping a world where men’s health drives stronger families and thriving communities.</p>
                <button className="main-btn btn-lg white px-4 py-3 mt-4">Join the Journey</button>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 hero-bg" src="/assets/img/home/hero-bg-2.jpg" alt="Third slide" />
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

      <section className='mission' style={{ padding: "50px 0", background: "transparent" }}>
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
                    <img src="/assets/img/home/mission/m-2.png" alt="Mission Icon 2" className="img-fluid" style={{ maxHeight: "100px" }} />
                  </div>
                  <h3 className="h5 mb-3" data-aos="fade-up" data-aos-delay="500">Redefining Healthcare</h3>
                  <p className="text-muted">Our mission is to redefine men’s healthcare by providing accessible, innovative solutions for every stage of life—covering physical, urological, sexual, and mental health, as well as hygiene, fitness, grooming, and geriatric care—empowering men to live healthier, more confident lives.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="mission-card h-100">
                <div className="mission-card-body text-center p-4">
                  <div className='mb-3' data-aos="zoom-in" data-aos-delay="500">
                    <img src="/assets/img/home/mission/m-3.png" alt="Mission Icon 3" className="img-fluid" style={{ maxHeight: "100px" }} />
                  </div>
                  <h3 className="h5 mb-3" data-aos="fade-up" data-aos-delay="600">Integrated Care</h3>
                  <p className="text-muted">At Dhyota Global, our vision is to build a holistic ecosystem for men’s health by integrating pharmaceuticals, devices, disposables, and services—driven by quality, innovation, and trust—to deliver comprehensive care from prevention to long-term wellbeing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='awareness' style={{ background: "#F2F5F6"}}>
        <h1 className='section-title text-center' data-aos="fade-down">Our Vision</h1>
        <div className='container awareness-main mt-5' data-aos="fade-up" data-aos-delay="200">
          <div
            ref={awarenessCarousel2Ref}
            id="awarenessCarousel2"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="4000"
            data-bs-pause="hover"
          >
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#awarenessCarousel2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#awarenessCarousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#awarenessCarousel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner awareness-carousel-inner">
              <div className="carousel-item awareness-carousel-item active">
                <div className='text-center p-5'>
                  <h6>Pharmaceuticals</h6>
                  <p className='w-75 mx-auto mb-4'>Innovative, safe, and affordable medicines form the foundation of our journey. Our pharmaceutical vertical will focus on urology, nephrology, and men’s health—delivering both prescription and over-the-counter products to improve patient outcomes and enhance quality of life.</p>
                </div>
              </div>

              <div className="carousel-item awareness-carousel-item">
                <div className='text-center p-5'>
                  <h6>Medical Devices</h6>
                  <p className='w-75 mx-auto mb-4'>Cutting-edge devices designed in collaboration with global partners. This vertical will introduce advanced, surgeon-centric technologies that simplify complex procedures and bring the latest innovations to clinical practice. This will be part of our phase 2 of operations. </p>
                </div>
              </div>
              <div className="carousel-item awareness-carousel-item">
                <div className='text-center p-5'>
                  <h6>Disposables</h6>
                  <p className='w-75 mx-auto mb-4'>Our disposables division will focus on delivering high-quality, cost-effective, and eco-friendly products that meet the evolving needs of healthcare providers and patients. With a strong emphasis on biodegradable solutions, this vertical is especially geared towards continence care for men, starting with adult male diapers that combine comfort, reliability, and sustainability. Through innovation in materials and design, we aim to support both clinical care and personal dignity, while reducing environmental impact.</p>
                </div>
              </div>
              <div className="carousel-item awareness-carousel-item">
                <div className='text-center p-5'>
                  <h6>Medical Coding & Billing</h6>
                  <p className='w-75 mx-auto mb-4'>Our healthcare services vertical will provide specialty-driven coding and billing solutions tailored to complex fields like urology, nephrology, and men’s health. By integrating AI-powered tools, we aim to ensure greater accuracy, compliance, and efficiency in medical documentation and claims processing. This vertical is designed to empower hospitals, clinics, and practitioners with streamlined workflows, optimized revenue cycles, and data-driven insights—delivering value beyond conventional coding and billing systems.</p>
                </div>
              </div>
            </div>
          </div>
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
            <div className='col-lg-4 col-md-6 mb-3' data-aos="fade-up" data-aos-delay="200">
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

      <section className='awareness' style={{ background: "#F2F5F6"}}>
        <h1 className='section-title text-center' data-aos="fade-down">Health Awareness Initiatives</h1>
        <div className='container awareness-main mt-5' data-aos="fade-up" data-aos-delay="200">
          <div
            ref={awarenessCarouselRef}
            id="awarenessCarousel1"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3500"
            data-bs-pause="hover"
          >
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#awarenessCarousel1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#awarenessCarousel1" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#awarenessCarousel1" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner awareness-carousel-inner">
              <div className="carousel-item awareness-carousel-item active">
                <div className='text-center p-5'>
                  <h6>Men's Health Clinics</h6>
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
                  <p className='w-75 mx-auto mb-4'>Driving the science of men's health forward</p>
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

export default Home;
