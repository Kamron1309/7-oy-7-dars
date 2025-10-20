import React from 'react';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="urelocation-footer">
      <div className="container">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <h3>URElocation</h3>
            <p>{t('footer.description')}</p>
          </Col>
          <Col xs={24} md={8}>
            <h4>{t('footer.menu')}</h4>
            <ul className="footer-menu">
              <li><a href="#home">{t('header.home')}</a></li>
              <li><a href="#services">{t('header.services')}</a></li>
              <li><a href="#pricing">{t('header.pricing')}</a></li>
              <li><a href="#testimonials">{t('header.testimonials')}</a></li>
              <li><a href="#faq">{t('header.faq')}</a></li>
            </ul>
          </Col>
          <Col xs={24} md={8}>
            <h4>{t('footer.address')}</h4>
            <p>130-134 Local RIA Cheese, London SW1O 9AL</p>
            <div className="social-links">
              <span>{t('footer.follow')}</span>
              <a href="#" className="social-link">In</a>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p>&copy; 2024 URElocation. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;