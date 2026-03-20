import React, { useState } from 'react';

// ─────────────────────────────────────────────────────────────
// GOOGLE SHEETS SETUP INSTRUCTIONS
// ─────────────────────────────────────────────────────────────
// 1. Create a Google Sheet and open Extensions > Apps Script
// 2. Paste the following script and save:
//
//    function doPost(e) {
//      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
//      var data = JSON.parse(e.postData.contents);
//      sheet.appendRow([new Date(), data.name, data.email, data.subject, data.message]);
//      return ContentService
//        .createTextOutput(JSON.stringify({ result: 'success' }))
//        .setMimeType(ContentService.MimeType.JSON);
//    }
//
// 3. Deploy: Click "Deploy" > "New Deployment" > Type: "Web App"
//    - Execute as: Me
//    - Who has access: Anyone
// 4. Copy the Web App URL and replace GOOGLE_SCRIPT_URL below.
// ─────────────────────────────────────────────────────────────
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE') {
      // Demo mode: simulate success when URL not configured
      setTimeout(() => {
        setStatus('success');
        setForm(INITIAL_FORM);
      }, 1000);
      return;
    }

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script requires no-cors
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      // no-cors gives opaque response — treat as success
      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact">
      <div className="section-heading reveal">
        <span className="section-number">04.</span>
        <h2>Get In Touch</h2>
      </div>

      <div className="contact-section reveal">
        <p className="contact-subtitle">What's Next?</p>
        <p className="contact-description">
          I'm always open to discussing new opportunities, interesting projects, or just having
          a conversation about distributed systems and engineering. Feel free to reach out — my
          inbox is always open.
        </p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Opportunity / Collaboration / Just saying hi"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about the opportunity or project..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="form-submit"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <div className="form-status success">
              Message sent! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="form-status error">
              Oops! Something went wrong. Please email me directly at 54nitish@gmail.com
            </div>
          )}

          <p className="form-note">
            Or reach me directly at{' '}
            <a href="mailto:54nitish@gmail.com">54nitish@gmail.com</a>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
