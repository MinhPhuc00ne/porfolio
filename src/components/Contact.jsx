import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-tag">
          <MessageSquare size={14} /> Contact
        </div>
        <h2 className="section-title">
          Let's Build Something <span className="gradient-text">Great Together</span>
        </h2>
        <p className="section-subtitle">
          Have an exciting project idea or career opportunity? Feel free to reach out to me!
        </p>

        <div className="contact-grid">
          <div className="contact-info-list">
            <div className="glass-card contact-info-item">
              <div className="contact-icon">
                <Mail size={22} />
              </div>
              <div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Direct Email</div>
                <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none' }}>
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="glass-card contact-info-item">
              <div className="contact-icon">
                <MapPin size={22} />
              </div>
              <div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Current Location</div>
                <div style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                  {personalInfo.location}
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1))', borderColor: 'var(--border-accent)' }}>
              <h4 style={{ fontWeight: '700', marginBottom: '8px' }}>🚀 Ready for new projects</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                I am open to full-time engineering roles, freelance opportunities, and collaborative open-source projects.
              </p>
            </div>
          </div>

          <div className="glass-card">
            {submitted ? (
              <div className="form-success">
                <CheckCircle2 size={32} style={{ margin: '0 auto 10px', display: 'block' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '6px' }}>Thank You for Reaching Out!</h4>
                <p>I have received your message and will respond as soon as possible.</p>
                <button
                  className="btn btn-outline"
                  style={{ marginTop: '16px' }}
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="john.doe@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Project Collaboration / Job Opportunity..."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Hi Jos Nguyen, I would like to discuss..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
