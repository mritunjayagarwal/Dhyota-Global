import React, { useEffect, useState } from 'react';
import './About.css';
import { journeyData } from './data';
import { CampaignSection } from '../shared';
import AOS from 'aos';
import 'aos/dist/aos.css';

const heroImages = [
  '/assets/img/about/dhyotagroup2.jpg',
  '/assets/img/about/hero-bg.png'
];

const About = () => {
  const [slide, setSlide] = useState(0);

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
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="about-page">
      <section className='hero' style={{ marginTop: "10px" }}>
        <div className="about-hero-slider" data-aos="fade-up">
          {heroImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt="About Us"
              className={`about-hero-slide ${i === slide ? 'active' : ''}`}
            />
          ))}
          <div className="about-hero-dots">
            {heroImages.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`about-hero-dot ${i === slide ? 'active' : ''}`}
                onClick={() => setSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className='container text-center'>
          <h1 className='section-title' data-aos="fade-down">Our Story</h1>
          <p className='text-muted text-start' data-aos="fade-up" data-aos-delay="100">Men’s health has long remained under-discussed and underserved in India, especially when it comes to urological and sexual wellness. Many men silently struggle with conditions like erectile dysfunction, low performance, or urinary issues—often avoiding treatment due to stigma, lack of awareness, or limited access to effective care.</p>

          <p className='text-muted text-start' data-aos="fade-up" data-aos-delay="100">At DHYOTA, we believe it’s time for change.</p>
          <p className='text-muted text-start' data-aos="fade-up" data-aos-delay="100">We are a new-age Indian healthcare startup dedicated to men’s urological and sexual health. By combining clinical science with empathy, we bring innovative, evidence-based solutions that are safe, discreet, and effective. From rapid-onset ED sprays to performance capsules, our products are carefully formulated to help men regain confidence and live fuller lives.</p>
          <p className='text-muted text-start' data-aos="fade-up" data-aos-delay="100">But we are more than just products—we are building an ecosystem of care.</p>

          <p className='text-muted text-start' data-aos="fade-up" data-aos-delay="100">Through partnerships with leading hospitals, medical experts, and digital health platforms, DHYOTA is making high-quality men’s health solutions accessible across India. Our mission is to break barriers, educate, and empower men to take charge of their well-being—without shame, without hesitation.</p>
        </div>
      </section>

      <section>
        <div className='container text-center'>
          <h1 className='section-title' data-aos="fade-down">Our Leadership</h1>
          <p className='text-muted text-start' data-aos="fade-up" data-aos-delay="100">
            Our leadership team brings together the perfect blend of medical expertise, pharmaceutical experience, and operational strength. Dhyota Global Healthcare Solutions is guided by six directors whose collective knowledge drives our vision of building innovative, accessible, and impactful healthcare products.
          </p>

          <p className='text-muted text-start' data-aos="fade-up" data-aos-delay="100">
            At the core of our leadership are Deepak Ragoori and Bhavatej Enganti with extensive clinical and surgical experience. Their deep understanding of patient needs, product relevance, and evidence-based innovation shapes Dhyota’s medical and scientific direction.
          </p>

          <p className='text-muted text-start' data-aos="fade-up" data-aos-delay="100">
            Supporting this foundation are Shailendra Pal and Joji Reddy, seasoned professionals with vast experience in the pharmaceutical industry. Their expertise in product development, regulatory insight, and market strategy strengthens Dhyota’s position in a highly competitive healthcare landscape.
          </p>

          <p className='text-muted text-start' data-aos="fade-up" data-aos-delay="100">
            Sreecharan Thamatam, a senior anesthesiologist, adds valuable clinical depth and perspective on patient safety, perioperative care, and practical application of healthcare solutions.
          </p>

          <p className='text-muted text-start' data-aos="fade-up" data-aos-delay="100">
            Completing the team is Vinod Reddy, who brings over 15 years of experience in supply chain management. His operational expertise ensures seamless execution, quality assurance, and efficient distribution across domestic and global markets.
          </p>

          <p className='text-muted text-start' data-aos="fade-up" data-aos-delay="100">
            Together, this leadership group forms a unified force—combining clinical excellence, pharma expertise, and operational rigour—to guide Dhyota’s journey toward becoming a global healthcare innovator.
          </p>

          <div className='row mt-5 justify-content-center'>
            <div className='col-lg-4 mt-3'>
              <p className='text-muted m-0'>Founder & Chairman</p>
              <h4 className='my-2'>Deepak Ragoori</h4>
              <p className='text-muted'>Senior Urologist | Founder | Strategic & Medical Leadership</p>
            </div>
            <div className='col-lg-4 mt-3'>
              <p className='text-muted m-0'>Executive Director</p>
              <h4 className='my-2'>Bhavatej Enganti</h4>
              <p className='text-muted'>Senior Urologist | Founder | Operations & Clinical Innovation</p>
            </div>
          </div>
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
          <div className='row justify-content-center'>
            <div className='col-lg-4' data-aos="fade-up" data-aos-delay="200">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/updated/sreecharan.png" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>Dr. Sreecharan Thamatam</h4>
                <h5 className='team-card-designation'>Co-Founder & Director</h5>
                <p className='team-card-description'>Anaesthesiologist & Critical Care Specialist with 13+ years of clinical experience across leading hospitals. Expert in anaesthesia, intensive care, and patient safety with a strong commitment to ethical, patient-centered care. Adds medical depth to product innovation and safety standards.</p>
              </div>
            </div>
            <div className='col-lg-4' data-aos="fade-up" data-aos-delay="300">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/updated/shailendra.png" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>Shailendra Pal</h4>
                <h5 className='team-card-designation'>Co-Founder & Managing Director</h5>
                <p className='team-card-description'>Pharma leader with 18+ years of experience in top companies including Alkem, Intas, Orchid, and Dr. Reddy’s. Spearheaded urology business launches, brand strategies, and nationwide marketing. Brings deep expertise in building and scaling healthcare brands in India.</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6' data-aos="fade-up" data-aos-delay="500">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/updated/joji.png" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>Joji Reddy</h4>
                <h5 className='team-card-designation'>Co-Founder & President</h5>
                <p className='team-card-description'>Seasoned healthcare leader with 26+ years in pharmaceuticals, driving sales, business growth, and market expansion with leading organizations. Currently President at Dhyota Global Healthcare Solutions, focused on innovation, collaboration, and patient-centric healthcare impact.</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6' data-aos="fade-up" data-aos-delay="600">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/updated/vinod.png" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>P. Vinod Reddy</h4>
                <h5 className='team-card-designation'>Co-Founder & Head – Supply Chain Management</h5>
                <p className='team-card-description'>with more than 14 years of extensive experience in supply chain management, procurement, and operations within leading healthcare institutions.</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6' data-aos="fade-up" data-aos-delay="600">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/updated/sanjib.png" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>Sanjib Dutta</h4>
                <h5 className='team-card-designation'>General Manager (West Zone)</h5>
                {/* <p className='team-card-description'></p> */}
              </div>
            </div>
            <div className='col-lg-4 col-md-6' data-aos="fade-up" data-aos-delay="600">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/ANIL KUMAR.jpeg" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>Anil Kumar Podishetty</h4>
                <h5 className='team-card-designation'>Associate General Manager</h5>
                <p className='team-card-description'>Pharmaceutical business leader with 17 years of experience across Pfizer, Ranbaxy, Dr Reddy’s, Hetero, Shilpa Medicare, and Celon Laboratories, specialising in men’s health, urology, and oncology. Known for combining therapeutic expertise with commercial strategy to build scalable brands, drive growth, and enable strategic collaborations.</p>
              </div>
            </div>
            <div className='col-lg-4' data-aos="fade-up" data-aos-delay="200">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/updated/ashish.png" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>Ashish Patel</h4>
                <h5 className='team-card-designation'>Sales head, Maharashtra & Chhattisgarh</h5>
                {/* <p className='team-card-description'>Anaesthesiologist & Critical Care Specialist with 13+ years of clinical experience across leading hospitals. Expert in anaesthesia, intensive care, and patient safety with a strong commitment to ethical, patient-centered care. Adds medical depth to product innovation and safety standards.</p> */}
              </div>
            </div>
            <div className='col-lg-4' data-aos="fade-up" data-aos-delay="200">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/updated/satyajit.png" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>Satyajit Sinha Mahapatra </h4>
                <h5 className='team-card-designation'>Sales head, West Bengal and North East & Key Account Management East</h5>
                {/* <p className='team-card-description'>Anaesthesiologist & Critical Care Specialist with 13+ years of clinical experience across leading hospitals. Expert in anaesthesia, intensive care, and patient safety with a strong commitment to ethical, patient-centered care. Adds medical depth to product innovation and safety standards.</p> */}
              </div>
            </div>
            <div className='col-lg-4' data-aos="fade-up" data-aos-delay="200">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/updated/amit.png" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>Amit Verma</h4>
                <h5 className='team-card-designation'>Sales head for Delhi NCR, Punjab, Haryana, Jammu & Kashmir</h5>
                {/* <p className='team-card-description'>Anaesthesiologist & Critical Care Specialist with 13+ years of clinical experience across leading hospitals. Expert in anaesthesia, intensive care, and patient safety with a strong commitment to ethical, patient-centered care. Adds medical depth to product innovation and safety standards.</p> */}
              </div>
            </div>
            <div className='col-lg-4' data-aos="fade-up" data-aos-delay="200">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/updated/venkateswarlu.png" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>Venkateswarlu Abbisetti</h4>
                <h5 className='team-card-designation'>Sales head for Telangana, Andhra Pradesh & Karnataka</h5>
                {/* <p className='team-card-description'>Anaesthesiologist & Critical Care Specialist with 13+ years of clinical experience across leading hospitals. Expert in anaesthesia, intensive care, and patient safety with a strong commitment to ethical, patient-centered care. Adds medical depth to product innovation and safety standards.</p> */}
              </div>
            </div>
            <div className='col-lg-4' data-aos="fade-up" data-aos-delay="200">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/updated/sandeep.png" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>Sandeep Tiwari</h4>
                <h5 className='team-card-designation'>Sales head for Uttar Pradesh & Uttarakhand</h5>
                {/* <p className='team-card-description'>Anaesthesiologist & Critical Care Specialist with 13+ years of clinical experience across leading hospitals. Expert in anaesthesia, intensive care, and patient safety with a strong commitment to ethical, patient-centered care. Adds medical depth to product innovation and safety standards.</p> */}
              </div>
            </div>
            <div className='col-lg-4' data-aos="fade-up" data-aos-delay="200">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/updated/dipan.png" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>Dipan Shukla</h4>
                <h5 className='team-card-designation'>West Zone ( Gujarat, Madhya Pradesh & Rajasthan) Sales Head</h5>
                {/* <p className='team-card-description'>Anaesthesiologist & Critical Care Specialist with 13+ years of clinical experience across leading hospitals. Expert in anaesthesia, intensive care, and patient safety with a strong commitment to ethical, patient-centered care. Adds medical depth to product innovation and safety standards.</p> */}
              </div>
            </div>
            <div className='col-lg-4' data-aos="fade-up" data-aos-delay="200">
              <div className='team-card text-center'>
                <img src="/assets/img/about/team/updated/anandha.png" alt="Our Team" className='img-fluid' />
                <h4 className='team-card-title'>Anandha Krishnan</h4>
                <h5 className='team-card-designation'>Sales head for Tamilnadu & Kerala</h5>
                {/* <p className='team-card-description'>Anaesthesiologist & Critical Care Specialist with 13+ years of clinical experience across leading hospitals. Expert in anaesthesia, intensive care, and patient safety with a strong commitment to ethical, patient-centered care. Adds medical depth to product innovation and safety standards.</p> */}
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
