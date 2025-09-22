import React from 'react';
import { Link } from 'react-router-dom';
import './CampaignSection.css';

const CampaignSection = ({ 
  title = "Men's Health Awareness Campaign",
  description = "Breaking barriers and promoting open conversations about men's intimate health. Join our mission to normalize essential health screenings.",
  buttonText = "View All",
  buttonClass = "orange"
}) => {
  return (
    <section className='campaign-section'>
      <div className='container bg-white campaign-main'>
        <div className='text-center p-5'>
          <h1 className='section-title'>{title}</h1>
          <p className='w-75 mx-auto mb-4'>{description}</p>
          <Link to="/products" className={`main-btn btn-lg px-5 py-3 ${buttonClass}`}>{buttonText}</Link>
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
