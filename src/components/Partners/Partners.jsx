import React from 'react';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import './Partners.css';

const Partners = () => {
  const { t } = useTranslation();

  const partners = ['HSBC', 'vodafone', 'Revolut', 'ORACLE', 'Google', 'facebook', 'J.P.Morgan'];

  return (
    <section className="partners-section">
      <div className="container">
        <Row gutter={[16, 16]} justify="center" align="middle">
          {partners.map((partner, index) => (
            <Col xs={8} sm={6} md={4} lg={3} key={index}>
              <div className="partner-logo">
                {partner}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Partners;