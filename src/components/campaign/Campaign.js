import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { campaignData, getCampaignSlug } from './data';
import './Campaign.css';

const PAGE_SIZE = 6;

const Campaign = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('*');
  const [sortBy, setSortBy] = useState('latest');
  const [sortOpen, setSortOpen] = useState(false);
  const [page, setPage] = useState(1);
  const sortRef = useRef(null);
  const gridTopRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [activeFilter, sortBy]);

  const sortedFiltered = useMemo(() => {
    let list = campaignData.campaigns;
    if (activeFilter !== '*') {
      list = list.filter((c) => c.category === activeFilter);
    }
    list = [...list];
    if (sortBy === 'latest') {
      list.sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate));
    } else if (sortBy === 'oldest') {
      list.sort((a, b) => new Date(a.sortDate) - new Date(b.sortDate));
    } else if (sortBy === 'popular') {
      list.sort((a, b) => b.enrolled - a.enrolled);
    }
    return list;
  }, [activeFilter, sortBy]);

  const totalPages = Math.max(1, Math.ceil(sortedFiltered.length / PAGE_SIZE));
  const pagedItems = sortedFiltered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const goToPage = (p) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    if (gridTopRef.current) {
      gridTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeSortLabel =
    campaignData.sortOptions.find((o) => o.id === sortBy)?.label || 'Latest First';

  const categoryName = (key) =>
    campaignData.categories.find((c) => c.filter === key)?.name || key;

  const badgeStyle = (key) => {
    const c = campaignData.badgeColors[key];
    return c ? { backgroundColor: c.bg, color: c.color } : {};
  };

  const formatEnrolled = (n) => n.toLocaleString('en-IN');

  const openDetail = (c) => {
    navigate(`/campaign/${getCampaignSlug(c)}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="campaign-page">
      {/* Hero */}
      <section className="hero">
        <div className="campaign-hero">
          <div className="campaign-hero-content">
            <h1>{campaignData.hero.title}</h1>
            <p>{campaignData.hero.description}</p>
            <div className="campaign-hero-stats">
              {campaignData.hero.stats.map((s) => (
                <div key={s.id} className="campaign-hero-stat">
                  <span className="hero-stat-icon">
                    <i className={s.icon}></i>
                  </span>
                  <div className="hero-stat-text">
                    <div className="hero-stat-value">{s.value}</div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="campaign-hero-icon">
            <i className="fa-solid fa-bullhorn"></i>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="campaign-breadcrumb-section">
        <div className="container">
          <nav className="campaign-breadcrumb" aria-label="breadcrumb">
            <Link to="/" className="breadcrumb-link">
              <i className="fa-solid fa-house"></i>
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Campaigns</span>
          </nav>
        </div>
      </section>

      {/* Filter + Sort */}
      <section className="campaign-toolbar-section" ref={gridTopRef}>
        <div className="container">
          <div className="campaign-toolbar">
            <div className="campaign-filter-buttons">
              {campaignData.categories.map((category) => (
                <button
                  key={category.id}
                  className={`campaign-filter-btn ${activeFilter === category.filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.filter)}
                >
                  <i className={category.icon}></i>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
            <div className="campaign-sort" ref={sortRef}>
              <button
                className="sort-toggle"
                onClick={() => setSortOpen((o) => !o)}
                aria-haspopup="listbox"
                aria-expanded={sortOpen}
              >
                <span>{activeSortLabel}</span>
                <i className={`fa-solid fa-chevron-down sort-chevron ${sortOpen ? 'open' : ''}`}></i>
              </button>
              {sortOpen && (
                <ul className="sort-menu" role="listbox">
                  {campaignData.sortOptions.map((opt) => (
                    <li
                      key={opt.id}
                      role="option"
                      aria-selected={sortBy === opt.id}
                      className={`sort-option ${sortBy === opt.id ? 'selected' : ''}`}
                      onClick={() => {
                        setSortBy(opt.id);
                        setSortOpen(false);
                      }}
                    >
                      {opt.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="campaign-grid-section">
        <div className="container">
          {pagedItems.length === 0 ? (
            <div className="campaign-empty">No campaigns match your filter.</div>
          ) : (
            <div className="row g-4">
              {pagedItems.map((c) => (
                <div key={c.id} className="col-lg-4 col-md-6">
                  <article className="campaign-card-v2">
                    <div className="campaign-card-cover">
                      <img src={c.image} alt={c.title} />
                      <span className="campaign-badge" style={badgeStyle(c.category)}>
                        {categoryName(c.category)}
                      </span>
                      {c.logo && (
                        <img
                          className="campaign-card-logo"
                          src={c.logo}
                          alt={`${c.title} logo`}
                        />
                      )}
                    </div>
                    <div className="campaign-card-body">
                      <h3
                        className="campaign-card-title"
                        onClick={() => openDetail(c)}
                        style={{ cursor: 'pointer' }}
                      >
                        {c.title}
                      </h3>
                      <p className="campaign-card-description">{c.description}</p>
                      <div className="campaign-card-meta">
                        <div className="meta-item">
                          <i className="fa-regular fa-calendar"></i>
                          <span>{c.date}</span>
                        </div>
                        <div className="meta-item">
                          <i className="fa-solid fa-location-dot"></i>
                          <span>{c.location}</span>
                        </div>
                        <div className="meta-item meta-enrolled">
                          <i className="fa-solid fa-user-group"></i>
                          <div className="enrolled-stack">
                            <span className="enrolled-value">{formatEnrolled(c.enrolled)}</span>
                            <span className="enrolled-label">Enrolled</span>
                          </div>
                        </div>
                      </div>
                      <div className="campaign-card-footer">
                        <button
                          type="button"
                          className="view-details"
                          onClick={() => openDetail(c)}
                        >
                          View Details <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <nav className="campaign-pagination" aria-label="Campaign pagination">
              <button
                className="page-arrow"
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                aria-label="Previous page"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                return (
                  <button
                    key={p}
                    className={`page-btn ${page === p ? 'active' : ''}`}
                    onClick={() => goToPage(p)}
                    aria-current={page === p ? 'page' : undefined}
                  >
                    {p}
                  </button>
                );
              })}
              <button
                className="page-arrow"
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                aria-label="Next page"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </nav>
          )}
        </div>
      </section>

      {/* Impact */}
      <section className="campaign-impact-section">
        <div className="container">
          <div className="impact-wrap">
            <h2 className="impact-title">Our Impact</h2>
            <p className="impact-subtitle">
              Trusted by healthcare professionals and patients worldwide
            </p>
            <div className="row g-4 impact-row">
              {campaignData.impact.map((stat) => (
                <div key={stat.id} className="col-lg-3 col-md-6">
                  <div className="impact-stat-card">
                    <span className="impact-stat-icon" style={{ color: stat.accent }}>
                      <i className={stat.icon}></i>
                    </span>
                    <div className="impact-stat-text">
                      <div className="impact-stat-value">{stat.value}</div>
                      <div className="impact-stat-label">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaborate CTA */}
      <section className="campaign-cta-section">
        <div className="container">
          <div className="campaign-cta-banner">
            <div className="cta-icon">
              <i className="fa-solid fa-hand-holding-heart"></i>
            </div>
            <div className="cta-text">
              <h3>Want to collaborate on a campaign?</h3>
              <p>Let's work together to create meaningful impact for men's health.</p>
            </div>
            <button
              className="main-btn white cta-btn"
              onClick={() => {
                navigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Campaign;
