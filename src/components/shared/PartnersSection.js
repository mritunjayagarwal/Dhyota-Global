import React from 'react';
import './PartnersSection.css';

const PartnersSection = ({ title = "Our Partners", showTitle = true }) => {
  return (
    <section className='partners-section'>
      <div className="container">
        {showTitle && <h1 className='section-title text-center'>{title}</h1>}
        <div className="row g-4 justify-content-center mt-4">
          <div className="col-lg-2 col-md-3 col-6">
            <img src="/assets/img/home/partners/p-1.png" alt="Partner 1" className="img-fluid" />
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <img src="/assets/img/home/partners/p-2.png" alt="Partner 2" className="img-fluid" />
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <img src="/assets/img/home/partners/p-3.png" alt="Partner 3" className="img-fluid" />
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <img src="/assets/img/home/partners/p-4.png" alt="Partner 4" className="img-fluid" />
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <img src="/assets/img/home/partners/p-4.png" alt="Partner 4" className="img-fluid" />
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <img src="/assets/img/home/partners/p-4.png" alt="Partner 4" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
