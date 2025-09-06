import React from 'react';
import './SupportSection.css';

const SupportSection = ({ 
  title = "Support Men's Wellness Initiatives", 
  description = "Join thousands of advocates, healthcare professionals, and community members in creating a healthier future for men everywhere.",
  buttonText = "Join Our Mission",
  buttonClass = "white"
}) => {
  return (
    <section className='support-section'>
      <div className="container text-center">
        <h1 className='section-title text-center text-white'>{title}</h1>
        <p className='text-center mb-5 text-white mb-0'>{description}</p>
        <button className={`main-btn ${buttonClass} px-5 py-3 m-0`}>{buttonText}</button>
      </div>
    </section>
  );
};

export default SupportSection;
