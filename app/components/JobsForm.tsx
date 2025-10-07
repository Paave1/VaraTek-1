'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface JobsFormProps {
  formId?: string;
  className?: string;
}

export default function JobsForm({ formId = "xwprnvwn", className = "" }: JobsFormProps) {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="form-success">
        <p className="success-message en">Thank you! Your job application has been sent successfully.</p>
        <p className="success-message fi hidden">Kiitos! Hakemuksesi on lähetetty onnistuneesti.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`contact-form ${className}`} id="jobsForm">
      <div className="form-group">
        <label htmlFor="name" className="en">Full name</label>
        <label htmlFor="name" className="fi hidden">Koko nimi</label>
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
        <label htmlFor="phone" className="en">Phone</label>
        <label htmlFor="phone" className="fi hidden">Puhelin</label>
        <input type="tel" id="phone" name="phone" required />
      </div>

      <div className="form-group">
        <label htmlFor="position" className="en">Position</label>
        <label htmlFor="position" className="fi hidden">Tehtävä</label>
        <select id="position" name="position" required>
          <option value="Rakennustyöntekijä">Rakennustyöntekijä</option>
          <option value="Hitsaaja">Hitsaaja</option>
          <option value="Sähköasentaja">Sähköasentaja</option>
          <option value="Timanttiporari">Timanttiporari</option>
          <option value="Maanrakentaja">Maanrakentaja</option>
          <option value="Muu">Muu</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="cv" className="en">Attach CV (optional)</label>
        <label htmlFor="cv" className="fi hidden">Liitä CV (valinnainen)</label>
        <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="en">About you</label>
        <label htmlFor="message" className="fi hidden">Kerro itsestäsi</label>
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
            <span className="en">Send Application</span>
            <span className="fi hidden">Lähetä hakemus</span>
          </>
        )}
      </button>
    </form>
  );
}
