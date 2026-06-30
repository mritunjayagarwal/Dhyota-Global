import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { State, City } from 'country-state-city';
import { campaignData, getCampaignBySlug, getCampaignSlug } from './data';
import detailContent from './data.json';
import './CampaignDetail.css';

const indianStates = State.getStatesOfCountry('IN');

const CampaignDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const campaign = useMemo(() => getCampaignBySlug(slug), [slug]);

  const [form, setForm] = useState({ name: '', email: '', phone: '', doctorName: '', address: '', state: '', city: '' });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setForm({ name: '', email: '', phone: '', doctorName: '', address: '', state: '', city: '' });
    setError('');
    setSubmitted(false);
  }, [slug]);

  if (!campaign) {
    return (
      <main className="campaign-detail-page">
        <section className="lh-notfound">
          <div className="container">
            <i className="fa-solid fa-heart-circle-exclamation lh-notfound-icon"></i>
            <h1>Campaign not found</h1>
            <p>The campaign you're looking for doesn't exist or may have moved.</p>
            <Link to="/campaign" className="lh-btn lh-btn-primary">
              <i className="fa-solid fa-arrow-left"></i> Back to Campaigns
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const dp = detailContent;
  const categoryName =
    campaignData.categories.find((c) => c.filter === campaign.category)?.name ||
    campaign.category;
  const formatEnrolled = (n) => n.toLocaleString('en-IN');

  const article = /^[aeiou]/i.test(categoryName) ? 'an' : 'a';

  const related = campaignData.campaigns
    .filter((c) => c.id !== campaign.id && c.category === campaign.category)
    .concat(
      campaignData.campaigns.filter(
        (c) => c.id !== campaign.id && c.category !== campaign.category
      )
    )
    .slice(0, 3);

  const openCampaign = (c) => {
    navigate(`/campaign/${getCampaignSlug(c)}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToEnroll = () => {
    document.getElementById('lh-enroll')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    if (!name) {
      setError('Please enter your name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');

    const stateName = indianStates.find((s) => s.isoCode === form.state)?.name || '';
    const lines = [
      `Hello! I'd like to enroll in *${campaign.title}*.`,
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      form.phone.trim() && `Phone: ${form.phone.trim()}`,
      form.doctorName.trim() && `Doctor's Name: ${form.doctorName.trim()}`,
      form.address.trim() && `Address: ${form.address.trim()}`,
      stateName && `State: ${stateName}`,
      form.city && `City: ${form.city}`,
    ].filter(Boolean);
    const whatsappUrl = `https://wa.me/919649647108?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
  };

  return (
    <main className="campaign-detail-page">
      {/* ===== HERO ===== */}
      <section className="lh-hero">
        <div className="container">
          <div className="lh-hero-box">
            <div className="lh-hero-content">
              <span className="lh-pill">
                <span className="lh-pill-dot"></span> {categoryName} Campaign
              </span>
              <h1 className="lh-hero-title">
                {dp.heroHeading.text} <span className="lh-accent">{dp.heroHeading.accent}</span>
              </h1>
              <p className="lh-hero-sub">{campaign.description}</p>

              <div className="lh-hero-meta">
                <span><i className="fa-regular fa-calendar"></i> {campaign.date}</span>
                <span><i className="fa-solid fa-location-dot"></i> {campaign.location}</span>
                <span><i className="fa-solid fa-user-group"></i> {formatEnrolled(campaign.enrolled)} Enrolled</span>
              </div>

              <div className="lh-hero-actions">
                <button className="lh-btn lh-btn-primary" onClick={scrollToEnroll}>
                  Join This Campaign <i className="fa-solid fa-arrow-right"></i>
                </button>
                <button
                  className="lh-btn lh-btn-ghost"
                  onClick={() => {
                    navigate('/campaign');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Explore Campaigns <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            <div className="lh-hero-media">
              <img src={campaign.image} alt={campaign.title} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CARE FOR EVERY ASPECT ===== */}
      <section className="lh-care">
        <div className="container">
          <h2 className="lh-section-title">
            Care for Every Aspect of <span className="lh-accent">Men's Health</span>
          </h2>
          <div className="lh-care-grid">
            {dp.healthAreas.map((a, i) => (
              <article className="lh-care-card" key={i}>
                <span className={`lh-care-icon tint-${a.tint}`}>
                  <i className={a.icon}></i>
                </span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <button className="lh-learn" onClick={scrollToEnroll}>
                  Learn More <i className="fa-solid fa-arrow-right"></i>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT (concerns / help) ===== */}
      <section className="lh-about">
        <div className="container">
          <p className="lh-about-lead">
            {campaign.title} is {article} {categoryName.toLowerCase()} initiative running{' '}
            {campaign.location === 'Digital Campaign'
              ? 'as a digital-first campaign'
              : `across ${campaign.location}`}
            . Since {campaign.date}, it has brought together{' '}
            <strong>{formatEnrolled(campaign.enrolled)}</strong> participants committed to better
            men's health.
          </p>
          <div className="lh-about-grid">
            <div className="lh-about-col lh-concerns">
              <div className="lh-about-body">
                <h3>{dp.concerns.title}</h3>
                <ul>
                  {dp.concerns.items.map((item, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-circle-exclamation lh-x"></i>
                      <span>
                        <strong>{item.title}</strong> — {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lh-about-img">
                <img src={dp.concerns.image} alt="Common health concerns" />
              </div>
            </div>

            <div className="lh-about-arrow">
              <i className="fa-solid fa-arrow-right"></i>
            </div>

            <div className="lh-about-col lh-help">
              <div className="lh-about-img">
                <img src={dp.help.image} alt="How we help" />
              </div>
              <div className="lh-about-body">
                <h3>{dp.help.title}</h3>
                <ul>
                  {dp.help.items.map((item, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-circle-check lh-check"></i>
                      <span>
                        <strong>{item.title}</strong> — {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL + STATS ===== */}
      <section className="lh-trusted">
        <div className="container">
          <h2 className="lh-section-title">
            Trusted by Men. <span className="lh-accent">Backed by Experts.</span>
          </h2>
          <div className="lh-trusted-card">
            <div className="lh-testimonial">
              <img className="lh-avatar" src={dp.testimonial.avatar} alt={dp.testimonial.name} />
              <div>
                <div className="lh-stars">
                  {Array.from({ length: dp.testimonial.rating }).map((_, i) => (
                    <i className="fa-solid fa-star" key={i}></i>
                  ))}
                </div>
                <p className="lh-quote">"{dp.testimonial.quote}"</p>
                <span className="lh-quote-name">— {dp.testimonial.name}</span>
              </div>
            </div>
            <div className="lh-stats">
              {dp.stats.map((s, i) => (
                <div className="lh-stat" key={i}>
                  <span className="lh-stat-icon"><i className={s.icon}></i></span>
                  <div className="lh-stat-value">{s.value}</div>
                  <div className="lh-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ENROLL ===== */}
      <section className="lh-enroll" id="lh-enroll">
        <div className="container">
          <div className="lh-enroll-card">
            <div className="lh-enroll-intro">
              <div>
                <img src='/assets/img/campaigns/redcliffelabslogo.png' className='img-fluid w-25 mb-3' />
              </div>
              <span className="lh-pill">
                <span className="lh-pill-dot"></span> Be Part of the Movement
              </span>
              <h2 className="lh-section-title left">
                Join <span className="lh-accent">{campaign.title}</span>
              </h2>
              <p>
                Enroll in a few seconds and our team will guide you through the next steps —
                confidential, judgment-free, and entirely at your pace.
              </p>
              <ul className="lh-enroll-points">
                <li><i className="fa-solid fa-circle-check lh-check"></i> No judgement, ever</li>
                <li><i className="fa-solid fa-circle-check lh-check"></i> Expert, science-backed guidance</li>
                <li><i className="fa-solid fa-circle-check lh-check"></i> Complete privacy</li>
              </ul>
            </div>

            <div className="lh-enroll-form-wrap">
              {submitted ? (
                <div className="lh-enroll-success">
                  <span className="lh-success-icon"><i className="fa-solid fa-circle-check"></i></span>
                  <h3>You're enrolled!</h3>
                  <p>
                    Thanks for joining <strong>{campaign.title}</strong>. Our team will reach out
                    with the next steps.
                  </p>
                  <button
                    type="button"
                    className="lh-btn lh-btn-ghost"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', phone: '', doctorName: '', address: '', state: '', city: '' });
                    }}
                  >
                    Enroll another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3>Enroll Now</h3>
                  <div className="lh-field">
                    <label htmlFor="lh-name">Full Name</label>
                    <input
                      id="lh-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="lh-field">
                    <label htmlFor="lh-email">Email</label>
                    <input
                      id="lh-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="lh-field">
                    <label htmlFor="lh-phone">
                      Phone <span className="lh-optional">(optional)</span>
                    </label>
                    <input
                      id="lh-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 00000 00000"
                    />
                  </div>
                  <div className="lh-field">
                    <label htmlFor="lh-doctor">Doctor's Name</label>
                    <input
                      id="lh-doctor"
                      type="text"
                      value={form.doctorName}
                      onChange={(e) => setForm({ ...form, doctorName: e.target.value })}
                      placeholder="Dr. Name"
                    />
                  </div>
                  <div className="lh-field">
                    <label htmlFor="lh-address">Address</label>
                    <input
                      id="lh-address"
                      type="text"
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      placeholder="Street, area, landmark"
                    />
                  </div>
                  <div className="lh-field">
                    <label htmlFor="lh-state">State</label>
                    <select
                      id="lh-state"
                      value={form.state}
                      onChange={(e) => setForm({ ...form, state: e.target.value, city: '' })}
                    >
                      <option value="">Select state</option>
                      {indianStates.map((s) => (
                        <option key={s.isoCode} value={s.isoCode}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="lh-field">
                    <label htmlFor="lh-city">City</label>
                    <select
                      id="lh-city"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      disabled={!form.state}
                    >
                      <option value="">
                        {form.state ? 'Select city' : 'Select a state first'}
                      </option>
                      {(form.state ? City.getCitiesOfState('IN', form.state) : []).map((c, i) => (
                        <option key={`${c.name}-${i}`} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                  {error && <p className="lh-error">{error}</p>}
                  <button type="submit" className="lh-btn lh-btn-primary lh-btn-block">
                    Talk to a Specialist <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== RELATED ===== */}
      {related.length > 0 && (
        <section className="lh-related">
          <div className="container">
            <h2 className="lh-section-title">
              More <span className="lh-accent">Campaigns</span>
            </h2>
            <div className="lh-related-grid">
              {related.map((c) => {
                const rName =
                  campaignData.categories.find((x) => x.filter === c.category)?.name || c.category;
                return (
                  <article
                    className="lh-related-card"
                    key={c.id}
                    onClick={() => openCampaign(c)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') openCampaign(c);
                    }}
                  >
                    <div className="lh-related-img">
                      <img src={c.image} alt={c.title} />
                      <span className="lh-related-badge">{rName}</span>
                    </div>
                    <div className="lh-related-body">
                      <h3>{c.title}</h3>
                      <p>{c.description}</p>
                      <span className="lh-learn">
                        Learn More <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===== FINAL CTA ===== */}
      <section className="lh-cta">
        <div className="container">
          <div
            className="lh-cta-banner"
            style={{ backgroundImage: `linear-gradient(90deg, rgba(20,33,56,0.92) 0%, rgba(20,33,56,0.6) 60%, rgba(20,33,56,0.2) 100%), url(${dp.finalCta.image})` }}
          >
            <div className="lh-cta-text">
              <h3>{dp.finalCta.title}</h3>
              <p>{dp.finalCta.text}</p>
            </div>
            <button
              className="lh-btn lh-btn-primary"
              onClick={() => {
                const text = encodeURIComponent(`Hello! I'd like to know more about *${campaign.title}*.`);
                window.open(`https://wa.me/919649647108?text=${text}`, '_blank');
              }}
            >
              {dp.finalCta.button} <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CampaignDetail;
