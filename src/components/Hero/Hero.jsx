import React from 'react';
import { Button, Card, Checkbox } from 'antd';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.subtitle')}</p>
          <Button type="primary" size="large" className="hero-button">
            {t('hero.startButton')}
          </Button>
          
          <Card className="scoring-card">
            <div className="scoring-items">
              <div className="scoring-item">
                <Checkbox />
                <span>{t('hero.scoringTest')}</span>
              </div>
              <div className="scoring-item">
                <Checkbox />
                <span>{t('hero.evaluation')}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;