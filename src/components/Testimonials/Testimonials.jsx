import React from 'react';
import { Card, Avatar } from 'antd';
import { useTranslation } from 'react-i18next';
import './Testimonials.css';

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <h2>{t('testimonials.title')}</h2>
        <Card className="testimonial-card">
          <div className="testimonial-header">
            <Avatar size={64} style={{ backgroundColor: '#1890ff' }}>
              AK
            </Avatar>
            <div className="testimonial-info">
              <h4>Adriano K.</h4>
              <p>{t('testimonials.position')}</p>
              <span className="profession">Game developer</span>
            </div>
          </div>
          <div className="testimonial-content">
            <p>{t('testimonials.content1')}</p>
            <p>{t('testimonials.content2')}</p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Testimonials;