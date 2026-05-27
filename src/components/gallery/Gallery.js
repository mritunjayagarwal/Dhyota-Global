import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { galleryData } from './data';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const navigate = useNavigate();

  const filteredItems = useMemo(() => {
    if (activeFilter === '*') return galleryData.items;
    return galleryData.items.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((i) => (i - 1 + filteredItems.length) % filteredItems.length);
  const showNext = () =>
    setLightboxIndex((i) => (i + 1) % filteredItems.length);

  useEffect(() => {
    if (lightboxIndex === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      else if (e.key === 'ArrowLeft')
        setLightboxIndex((i) => (i - 1 + filteredItems.length) % filteredItems.length);
      else if (e.key === 'ArrowRight')
        setLightboxIndex((i) => (i + 1) % filteredItems.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, filteredItems.length]);

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
            {filteredItems.map((item, index) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="gallery-card">
                  <div
                    className="gallery-card-image"
                    onClick={() => openLightbox(index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${item.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openLightbox(index);
                      }
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={(e) => {
                        e.target.style.background = 'linear-gradient(135deg, #FFD93B 0%, #FFB347 50%, #FF6F00 100%)';
                        e.target.src =
                          'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1 1%22%3E%3C/svg%3E';
                      }}
                    />
                    <span className="gallery-card-zoom">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </span>
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

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="gallery-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            <i className="fa-solid fa-xmark"></i>
          </button>

          {filteredItems.length > 1 && (
            <button
              className="lightbox-nav lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          )}

          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={filteredItems[lightboxIndex].image} alt={filteredItems[lightboxIndex].title} />
            <figcaption className="lightbox-caption">
              <span className="lightbox-title">{filteredItems[lightboxIndex].title}</span>
              <span className="lightbox-meta">
                {filteredItems[lightboxIndex].date} • {filteredItems[lightboxIndex].location}
              </span>
              <span className="lightbox-counter">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </figcaption>
          </figure>

          {filteredItems.length > 1 && (
            <button
              className="lightbox-nav lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          )}
        </div>
      )}
    </main>
  );
};

export default Gallery;
