import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { galleryData } from './data';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const navigate = useNavigate();

  const filteredItems = useMemo(() => {
    if (activeFilter === '*') return galleryData.items;
    return galleryData.items.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const handleShareStory = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="gallery-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="gallery-hero">
          <div className="gallery-hero-content">
            <h1>Gallery</h1>
            <p>
              Moments that reflect our purpose, people,
              <br />
              and commitment to better men's health.
            </p>
            <div className="hero-accent"></div>
          </div>
          <div className="gallery-hero-icon">
            <i className="fa-regular fa-images"></i>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="gallery-filter-section">
        <div className="container">
          <div className="gallery-filter-buttons">
            {galleryData.categories.map((category) => (
              <button
                key={category.id}
                className={`gallery-filter-btn ${activeFilter === category.filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.filter)}
              >
                <i className={category.icon}></i>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="row g-4">
            {filteredItems.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="gallery-card">
                  <div className="gallery-card-image">
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={(e) => {
                        e.target.style.background = 'linear-gradient(135deg, #FFD93B 0%, #FFB347 50%, #FF6F00 100%)';
                        e.target.src =
                          'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                  <div className="gallery-card-content">
                    <div className="gallery-card-title-row">
                      <i className={`${item.icon} gallery-card-icon`}></i>
                      <h4 className="gallery-card-title">{item.title}</h4>
                    </div>
                    <p className="gallery-card-meta">
                      {item.date} <span className="meta-dot">•</span> {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="share-story-section">
        <div className="container">
          <div className="share-story-card">
            <div className="share-story-icon">
              <i className="fa-regular fa-images"></i>
            </div>
            <div className="share-story-text">
              <h3>Have an event or initiative to showcase with us?</h3>
              <p>Collaborate and be part of our journey toward better men's health.</p>
            </div>
            <button className="main-btn orange share-story-btn" onClick={handleShareStory}>
              Share Your Story <i className="fa-solid fa-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
