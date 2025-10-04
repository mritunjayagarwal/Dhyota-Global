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
        <img src="https://indipaisa.netlify.app/img/others/About%20us/Top%20photo.png" alt="About Us" className='img-fluid' style = {{"width": "100%", height: "auto" }} data-aos="fade-up" />
      </section>
      <section>
        <div className='container text-center'>
          <h1 className='section-title' data-aos="fade-down">Our Story</h1>
          <p className='text-muted text-start' data-aos="fade-up" data-aos-delay="100">Men’s health has long remained under-discussed and underserved in India, especially when it comes to urological and sexual wellness. Many men silently struggle with conditions like erectile dysfunction, low performance, or urinary issues—often avoiding treatment due to stigma, lack of awareness, or limited access to effective care.</p>

          <p className='text-muted text-start' data-aos="fade-up" data-aos-delay="100">At DHYOTA, we believe it’s time for change.</p>
          <p className='text-muted text-start' data-aos="fade-up" data-aos-delay="100">We are a new-age Indian healthcare startup dedicated to men’s urological and sexual health. By combining clinical science with empathy, we bring innovative, evidence-based solutions that are safe, discreet, and effective. From rapid-onset ED sprays to performance capsules, our products are carefully formulated to help men regain confidence and live fuller lives.</p>

          <p className='text-muted text-start' data-aos="fade-up" data-aos-delay="100">We are a new-age Indian healthcare startup dedicated to men’s urological and sexual health. By combining clinical science with empathy, we bring innovative, evidence-based solutions that are safe, discreet, and effective. From rapid-onset ED sprays to performance capsules, our products are carefully formulated to help men regain confidence and live fuller lives.</p>

          <p className='text-muted text-start' data-aos="fade-up" data-aos-delay="100">But we are more than just products—we are building an ecosystem of care.</p>

          <p className='text-muted text-start' data-aos="fade-up" data-aos-delay="100">Through partnerships with leading hospitals, medical experts, and digital health platforms, DHYOTA is making high-quality men’s health solutions accessible across India. Our mission is to break barriers, educate, and empower men to take charge of their well-being—without shame, without hesitation.</p>
        </div>
      </section>
      {/* <section style={{ backgroundColor: "#F9FAFB" }}>
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
      </section> */}
      {/* 
      <section className='journey-section'>
        <div className='container'>
          <h1 className='section-title' data-aos="fade-down">Our Journey</h1>
          <div className='timeline mt-5' data-aos="fade-up" data-aos-delay="100">
            {journeyData.map((milestone, index) => (
              <div key={milestone.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className='timeline-content'>
                  <div className='timeline-icon'>{milestone.icon}</div>
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
      */}
      <section>
        <div className='container'>
          <h1 className='section-title' data-aos="fade-down">Our Team</h1>
          <div className='row'>
            <div className='col-lg-4' data-aos="fade-up" data-aos-delay="100">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/ragoori.jpeg" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>Dr. Deepak Ragoori </h4>
                <h5 className='team-card-designation'>Chairman & Managing Director (CMD)</h5>
                <p className='team-card-description'>Senior Consultant Urologist with 12+ years of clinical experience across leading hospitals. Expert in Endo-Urology, Lasers with Special Interest in RIRS. Member of Various Prestigious medical institute.
Consultant Urologist & Facility Director at AINU. Depth Knowledge ensures the organic growth of organisation.
</p>
              </div>
            </div>
            <div className='col-lg-4' data-aos="fade-up" data-aos-delay="300">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/shailendra.jpeg" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>Shailendra Pal</h4>
                <h5 className='team-card-designation'>Co-Founder & Managing Director</h5>
                <p className='team-card-description'>Pharma leader with 18+ years of experience in top companies including Alkem, Intas, Orchid, and Dr. Reddy’s. Spearheaded urology business launches, brand strategies, and nationwide marketing. Brings deep expertise in building and scaling healthcare brands in India.</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6' data-aos="fade-up" data-aos-delay="400">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/bhavtej.JPG" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>Dr. Bhavatej Enganti</h4>
                <h5 className='team-card-designation'>Co-Founder & Executive Director</h5>
                <p className='team-card-description'>Renowned Consultant Urologist with 15+ years in Men's Health, Urology & Reconstructive Surgery. Senior Consultant at AINU, Director of Best Ferticare, and academic researcher. Combines clinical expertise with entrepreneurial vision to advance men's health solutions.</p>
              </div>
            </div>
          </div>
          
          {/* Second row for last 2 team members - centered */}
          <div className='row justify-content-center mt-5'>
          <div className='col-lg-4' data-aos="fade-up" data-aos-delay="200">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/charan.jpeg" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>Dr. Sreecharan Thamatam</h4>
                <h5 className='team-card-designation'>Co-Founder & Director</h5>
                <p className='team-card-description'>Anaesthesiologist & Critical Care Specialist with 13+ years of clinical experience across leading hospitals. Expert in anaesthesia, intensive care, and patient safety with a strong commitment to ethical, patient-centered care. Adds medical depth to product innovation and safety standards.</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6' data-aos="fade-up" data-aos-delay="500">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/joji.jpeg" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>Joji Reddy</h4>
                <h5 className='team-card-designation'>President</h5>
                <p className='team-card-description'>Seasoned healthcare leader with 26+ years in pharmaceuticals, driving sales, business growth, and market expansion with leading organizations. Currently President at Dhyota Global Healthcare Solutions, focused on innovation, collaboration, and patient-centric healthcare impact.</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6' data-aos="fade-up" data-aos-delay="600">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/reddy.jpeg" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>P. Vinod Reddy</h4>
                <h5 className='team-card-designation'>Head – Supply Chain Management</h5>
                <p className='team-card-description'>with more than 14 years of extensive experience in supply chain management, procurement, and operations within leading healthcare institutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CampaignSection />
    </main>
  );
};

export default About;
