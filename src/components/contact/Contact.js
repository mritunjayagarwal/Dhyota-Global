import React from 'react';
import { contactData } from './data';
import './Contact.css';

const Contact = () => {
  const renderField = (field) => {
    if (field.type === 'textarea') {
      return (
        <textarea
          id={field.id}
          name={field.id}
          placeholder={field.placeholder}
          rows={field.rows}
          required={field.required}
        />
      );
    }
    
    return (
      <input
        type={field.type}
        id={field.id}
        name={field.id}
        placeholder={field.placeholder}
        required={field.required}
      />
    );
  };

  return (
    <div className="contact">
      <h1 className="contact-title">{contactData.page.title}</h1>
      <p className="contact-description">{contactData.page.description}</p>
      <div className="contact-form">
        <h2>{contactData.form.formTitle}</h2>
        <form>
          {contactData.form.fields.map((field) => (
            <div key={field.id} className="form-group">
              <label htmlFor={field.id}>{field.label}</label>
              {renderField(field)}
            </div>
          ))}
          <button type="submit" className="submit-btn">
            {contactData.form.submitButton}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
