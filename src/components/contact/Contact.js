import React, { useState } from 'react';
import './Contact.css';
import { contactData } from './data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    department: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        department: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const toggleFaq = (faqId) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };

  return (
    <main className="contact-page">
      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-form-container">
                <h2 className="section-title">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <select
                          id="department"
                          name="department"
                          value={formData.department}
                          onChange={handleInputChange}
                          className="form-control"
                        >
                          <option value="">Select a department</option>
                          {contactData.departments.map(dept => (
                            <option key={dept.id} value={dept.name}>
                              {dept.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="form-control"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="form-control"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <div className="form-actions">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin"></i>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane"></i>
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                  
                  {submitStatus === 'success' && (
                    <div className="alert alert-success mt-3">
                      <i className="fas fa-check-circle"></i>
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </div>
                  )}
                </form>
              </div>
            </div>
            <div className="col-lg-4">
            <div className='testimonial-card'>
                <div className='testimonial-card-body'>
                  <h5 style={{ fontWeight: "900" }}>Trust & Compliance</h5>
                  <div className='testimonial-card-footer d-flex align-items-center justify-content-start'>
                    <img src="/assets/img/home/testimonials/shield.png" alt="Testimonial 1" />
                    <div style={{ paddingLeft: "10px", paddingTop: "10px" }}>
                    <h3>DPDP Compliant</h3>
                    </div>
                  </div>
                  <div className='testimonial-card-footer d-flex align-items-center justify-content-start mt-2'>
                    <img src="/assets/img/home/testimonials/flower.png" alt="Testimonial 1" />
                    <div style={{ paddingLeft: "10px", paddingTop: "10px" }}>
                    <h3>HDMP Certified</h3>
                    </div>
                  </div>
                  <div className='testimonial-card-footer d-flex align-items-center justify-content-start mt-2'>
                    <img src="/assets/img/home/testimonials/secure.png" alt="Testimonial 1" />
                    <div style={{ paddingLeft: "10px", paddingTop: "10px" }}>
                    <h3>EHR Secure</h3>
                    </div>
                  </div>
                </div>
              </div>
            <div className='testimonial-card mt-3'>
                <div className='testimonial-card-body'>
                  <h5 style={{ fontWeight: "900" }}>Support Hours</h5>
                  <div className='testimonial-card-footer'>
                    <div style={{ paddingTop: "10px" }}>
                      <div className="row">
                        <div className="col-lg-6">
                          <h6>Monday - Friday</h6>
                        </div>
                        <div className="col-lg-6 text-end">
                          <h6>Monday - Friday</h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <h6>Monday - Friday</h6>
                        </div>
                        <div className="col-lg-6 text-end">
                          <h6>Monday - Friday</h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <h6>Monday - Friday</h6>
                        </div>
                        <div className="col-lg-6 text-end">
                          <h6>Monday - Friday</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div className='testimonial-card mt-3'>
                <div className='testimonial-card-body'>
                  <h5 style={{ fontWeight: "900" }}><img src="/assets/img/home/testimonials/shield.png" alt="Testimonial 1" /> Trust & Compliance</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title text-center">Find Us</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <img src="/assets/img/contact/enquiries-bg.png" alt="Interactive Map" className='img-fluid' />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <p className="faq-subtitle text-center">Find answers to common questions about our services</p>
          
          <div className="faq-container">
            {contactData.faqs.map((faq) => (
              <div key={faq.id} className="faq-item">
                <div 
                  className="faq-question"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <h4>{faq.question}</h4>
                  <i className={`fas fa-chevron-down ${openFaq === faq.id ? 'rotated' : ''}`}></i>
                </div>
                <div className={`faq-answer ${openFaq === faq.id ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
