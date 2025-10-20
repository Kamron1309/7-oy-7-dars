import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import './RelocatedProfessions.css';

const RelocatedProfessions = () => {
  const { t } = useTranslation();

  const professions = [
    {
      title: t('relocatedProfessions.developer'),
      description: t('relocatedProfessions.developerDesc')
    },
    {
      title: t('relocatedProfessions.dataScientist'),
      description: t('relocatedProfessions.dataScientistDesc')
    },
    {
      title: t('relocatedProfessions.uiDesigner'),
      description: t('relocatedProfessions.uiDesignerDesc')
    },
    {
      title: t('relocatedProfessions.gameDeveloper'),
      description: t('relocatedProfessions.gameDeveloperDesc')
    },
    {
      title: t('relocatedProfessions.productManager'),
      description: t('relocatedProfessions.productManagerDesc')
    }
  ];

  return (
    <section className="relocated-section">
      <div className="container">
        <div className="relocated-header">
          <h2>{t('relocatedProfessions.title')}</h2>
          <p className="relocated-subtitle">{t('relocatedProfessions.subtitle')}</p>
          <Button type="primary" size="large" className="relocated-button">
            {t('relocatedProfessions.startButton')}
          </Button>
        </div>
        
        <Row gutter={[24, 24]} className="professions-grid">
          {professions.map((profession, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card className="profession-card">
                <h4>{profession.title}</h4>
                <p>{profession.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default RelocatedProfessions;