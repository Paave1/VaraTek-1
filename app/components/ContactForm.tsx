'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface ContactFormProps {
  formId?: string;
  className?: string;
}

export default function ContactForm({ formId = "xwprnvwn", className = "" }: ContactFormProps) {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="form-success">
        <p className="success-message en">Thank you! Your message has been sent successfully.</p>
        <p className="success-message fi hidden">Kiitos! Viestisi on lähetetty onnistuneesti.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`contact-form ${className}`} id="contactForm">
      <div className="form-group">
        <label htmlFor="name" className="en">Name</label>
        <label htmlFor="name" className="fi hidden">Nimi</label>
        <input type="text" id="name" name="name" required />
      </div>
      
      <div className="form-group">
        <label htmlFor="email" className="en">Email</label>
        <label htmlFor="email" className="fi hidden">Sähköposti</label>
        <input type="email" id="email" name="email" required />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="validation-error"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="message" className="en">Message</label>
        <label htmlFor="message" className="fi hidden">Viesti</label>
        <textarea id="message" name="message" rows={5} required />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="validation-error"
        />
      </div>
      
      <button type="submit" className="submit-btn" disabled={state.submitting}>
        {state.submitting ? (
          <>
            <span className="en">Sending...</span>
            <span className="fi hidden">Lähetetään...</span>
          </>
        ) : (
          <>
            <span className="en">Send Message</span>
            <span className="fi hidden">Lähetä Viesti</span>
          </>
        )}
      </button>
    </form>
  );
}
