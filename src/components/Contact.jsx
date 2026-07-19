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
          <MessageSquare size={14} /> Liên Hệ
        </div>
        <h2 className="section-title">
          Hãy Cùng Nhau <span className="gradient-text">Tạo Nên Điều Tuyệt Vời</span>
        </h2>
        <p className="section-subtitle">
          Bạn có dự án thú vị hoặc cơ hội công việc phù hợp? Đừng ngần ngại nhắn tin cho tôi nhé!
        </p>

        <div className="contact-grid">
          <div className="contact-info-list">
            <div className="glass-card contact-info-item">
              <div className="contact-icon">
                <Mail size={22} />
              </div>
              <div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Gửi Email Trực Tiếp</div>
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
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Vị Trí Hiện Tại</div>
                <div style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                  {personalInfo.location}
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1))', borderColor: 'var(--border-accent)' }}>
              <h4 style={{ fontWeight: '700', marginBottom: '8px' }}>🚀 Sẵn sàng bắt đầu dự án mới?</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Tôi luôn hào hứng tham gia các dự án phát triển phần mềm chất lượng cao, các ý tưởng startup hoặc công việc Full-time / Remote.
              </p>
            </div>
          </div>

          <div className="glass-card">
            {submitted ? (
              <div className="form-success">
                <CheckCircle2 size={32} style={{ margin: '0 auto 10px', display: 'block' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '6px' }}>Cảm ơn bạn đã liên hệ!</h4>
                <p>Tôi đã nhận được tin nhắn của bạn và sẽ phản hồi sớm nhất có thể.</p>
                <button
                  className="btn btn-outline"
                  style={{ marginTop: '16px' }}
                  onClick={() => setSubmitted(false)}
                >
                  Gửi tin nhắn khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Họ & Tên *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Nguyễn Văn A"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Liên Hệ *</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="your.email@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Chủ Đề</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Hợp tác dự án / Tuyển dụng..."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Nội Dung Tin Nhắn *</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Xin chào Minh Phúc, tôi muốn trao đổi về..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Gửi Tin Nhắn <Send size={16} />
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
