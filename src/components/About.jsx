import React from 'react';
import { User, MapPin, Mail, Award, CheckCircle2 } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-tag">
          <User size={14} /> Giới Thiệu
        </div>
        <h2 className="section-title">
          Đam mê tạo ra sản phẩm phần mềm <br />
          <span className="gradient-text">Giá trị & Đẳng cấp</span>
        </h2>

        <div className="glass-card" style={{ marginTop: '30px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                {personalInfo.bio}
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={18} color="var(--accent-cyan)" />
                  <span><strong>Địa điểm:</strong> {personalInfo.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={18} color="var(--accent-cyan)" />
                  <span><strong>Email:</strong> {personalInfo.email}</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" /> Tư duy giải quyết vấn đề
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" /> Kiến trúc mã sạch & Dễ bảo trì
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" /> Học hỏi công nghệ nhanh chóng
                </div>
              </div>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', color: 'var(--accent-cyan)', fontWeight: '700' }}>
                <Award size={20} /> Mục tiêu phát triển
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                Hướng tới trở thành một <strong>Senior Full-Stack Architect</strong> trong tương lai. Tôi liên tục nâng cao kiến thức về thiết kế hệ thống phân tán, Microservices, và tối ưu hóa trải nghiệm người dùng cuối.
              </p>
            </div>
          </div>
        </div>

        {/* Stats counter grid */}
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card stat-card">
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
