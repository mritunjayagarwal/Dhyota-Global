import React, { useEffect, useRef } from 'react';
import './About.css';
import { journeyData } from './data';
import { CampaignSection } from '../shared';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100
    });

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
      <section className='hero' style={{ marginTop: "10px" }}>
        <img src="/assets/img/about/hero-bg.png" alt="About Us" className='img-fluid' style = {{"width": "100%", height: "auto" }} data-aos="fade-up" />
      </section>
      <section>
        <div className='container text-center'>
          <h1 className='section-title' data-aos="fade-down">Our Story</h1>
          <p className='text-muted text-start' data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p className='text-muted text-start mt-3' data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </section>
      <section style={{ backgroundColor: "#F9FAFB" }}>
        <div className="container">
          <h1 className="section-title text-center" data-aos="fade-down">Our Core Values</h1>
          <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="100">Working alongside industry leaders to deliver comprehensive healthcare solutions and drive innovation across the medical technology landscape.</p>
          <div className="row">
            <div className='col-lg-3 mb-4' data-aos="fade-up" data-aos-delay="200">
                <div className='partner-card'>
                    <img src="/assets/img/about/values/1.png" alt="Partner 1" />
                    <h3 className='partner-card-title'>Partner 1</h3>
                    <p className='partner-card-description'>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div className='col-lg-3 mb-4' data-aos="fade-up" data-aos-delay="300">
                <div className='partner-card'>
                    <img src="/assets/img/about/values/1.png" alt="Partner 1" />
                    <h3 className='partner-card-title'>Partner 1</h3>
                    <p className='partner-card-description'>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div className='col-lg-3 mb-4' data-aos="fade-up" data-aos-delay="400">
                <div className='partner-card'>
                    <img src="/assets/img/about/values/1.png" alt="Partner 1" />
                    <h3 className='partner-card-title'>Partner 1</h3>
                    <p className='partner-card-description'>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div className='col-lg-3 mb-4' data-aos="fade-up" data-aos-delay="500">
                <div className='partner-card'>
                    <img src="/assets/img/about/values/1.png" alt="Partner 1" />
                    <h3 className='partner-card-title'>Partner 1</h3>
                    <p className='partner-card-description'>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className='journey-section'>
        <div className='container'>
          <h1 className='section-title' data-aos="fade-down">Our Journey</h1>
          <div className='timeline mt-5' data-aos="fade-up" data-aos-delay="100">
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
      <section style={{ backgroundColor: "#F9FAFB" }}>
        <div className='container'>
          <h1 className='section-title' data-aos="fade-down">Our Team</h1>
          <div className='row'>
            <div className='col-lg-3' data-aos="fade-up" data-aos-delay="100">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/team-member-1.png" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>Dr. John Doe</h4>
                <h5 className='team-card-designation'>CEO & Founder</h5>
                <p className='team-card-description'>We are a team of passionate individuals who are dedicated to providing the best possible care to our patients.</p>
              </div>
            </div>
            <div className='col-lg-3' data-aos="fade-up" data-aos-delay="200">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/team-member-1.png" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>Dr. John Doe</h4>
                <h5 className='team-card-designation'>CEO & Founder</h5>
                <p className='team-card-description'>We are a team of passionate individuals who are dedicated to providing the best possible care to our patients.</p>
              </div>
            </div>
            <div className='col-lg-3' data-aos="fade-up" data-aos-delay="300">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/team-member-1.png" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>Dr. John Doe</h4>
                <h5 className='team-card-designation'>CEO & Founder</h5>
                <p className='team-card-description'>We are a team of passionate individuals who are dedicated to providing the best possible care to our patients.</p>
              </div>
            </div>
            <div className='col-lg-3' data-aos="fade-up" data-aos-delay="400">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/team-member-1.png" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>Dr. John Doe</h4>
                <h5 className='team-card-designation'>CEO & Founder</h5>
                <p className='team-card-description'>We are a team of passionate individuals who are dedicated to providing the best possible care to our patients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className='partners' style={{ padding: "50px 0", backgroundColor: "#fff" }}>
        <div className="container">
          <h1 className='section-title text-center' data-aos="fade-down">Our Partners</h1>
          <div className="row g-4 justify-content-center mt-4">
            <div className="col-lg-2 col-md-3 col-6" data-aos="zoom-in" data-aos-delay="100">
              <img src="/assets/img/home/partners/p-1.png" alt="Partner 1" className="img-fluid" style={{ maxHeight: "100px" }} />
            </div>
            <div className="col-lg-2 col-md-3 col-6" data-aos="zoom-in" data-aos-delay="200">
              <img src="/assets/img/home/partners/p-2.png" alt="Partner 2" className="img-fluid" style={{ maxHeight: "100px" }} />
            </div>
            <div className="col-lg-2 col-md-3 col-6" data-aos="zoom-in" data-aos-delay="300">
              <img src="/assets/img/home/partners/p-3.png" alt="Partner 3" className="img-fluid" style={{ maxHeight: "100px" }} />
            </div>
            <div className="col-lg-2 col-md-3 col-6" data-aos="zoom-in" data-aos-delay="400">
              <img src="/assets/img/home/partners/p-4.png" alt="Partner 4" className="img-fluid" style={{ maxHeight: "100px" }} />
            </div>
          </div>
        </div>
      </section>
      
      <CampaignSection />
    </main>
  );
};

export default About;
