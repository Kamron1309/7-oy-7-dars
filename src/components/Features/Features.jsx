import React from 'react';
import { Row, Col, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import './Features.css';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('features.fastService.title'),
      description: t('features.fastService.description')
    },
    {
      title: t('features.control.title'),
      description: t('features.control.description')
    },
    {
      title: t('features.managers.title'),
      description: t('features.managers.description')
    }
  ];

  return (
    <section className="features-section" id="services">
      <div className="container">
        <h2>{t('features.title')}</h2>
        <p className="features-subtitle">{t('features.subtitle')}</p>
        <Row gutter={[32, 32]}>
          {features.map((feature, index) => (
            <Col xs={24} md={8} key={index}>
              <Card className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Features;