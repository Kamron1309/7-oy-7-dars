import React from 'react';
import { Card, Progress, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import './Process.css';

const Process = () => {
  const { t } = useTranslation();

  const processSteps = [
    {
      title: t('process.externalProfile'),
      description: t('process.externalProfileDesc'),
      progress: 60
    },
    {
      title: t('process.professionalJourney'),
      description: t('process.professionalJourneyDesc'),
      progress: 40
    },
    {
      title: t('process.references'),
      description: t('process.referencesDesc'),
      progress: 20
    }
  ];

  return (
    <section className="process-section">
      <div className="container">
        <h2>{t('process.title')}</h2>
        <p className="process-subtitle">{t('process.subtitle')}</p>
        
        <div className="welcome-message">
          <h3>{t('process.welcome')}</h3>
          <p>{t('process.welcomeDesc')}</p>
        </div>

        <Row gutter={[24, 24]}>
          {processSteps.map((step, index) => (
            <Col xs={24} md={8} key={index}>
              <Card className="process-card">
                <h4>{step.title}</h4>
                <Progress percent={step.progress} showInfo={false} className="process-progress" />
                <p>{step.description}</p>
                <div className="time-estimate">13.6m</div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Process;