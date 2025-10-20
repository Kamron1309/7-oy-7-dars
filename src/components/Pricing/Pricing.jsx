import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import './Pricing.css';

const Pricing = () => {
  const { t } = useTranslation();

  const plans = [
    {
      title: t('pricing.standard.title'),
      price: '£5,500',
      features: [
        t('pricing.standard.installment1'),
        t('pricing.standard.installment2'),
        t('pricing.standard.refund'),
        t('pricing.standard.discount')
      ]
    },
    {
      title: t('pricing.basic.title'),
      price: '£4,000',
      features: [
        t('pricing.basic.installment1'),
        t('pricing.basic.installment2'),
        t('pricing.basic.discount'),
        t('pricing.basic.nonRefundable')
      ]
    }
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <h2>{t('pricing.title')}</h2>
        <Row gutter={[32, 32]}>
          {plans.map((plan, index) => (
            <Col xs={24} md={12} key={index}>
              <Card 
                className="pricing-card"
                title={
                  <div className="plan-header">
                    <h3>{plan.title}</h3>
                    <div className="price">{plan.price}</div>
                  </div>
                }
              >
                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Button type="primary" block className="choose-btn">
                  {t('pricing.choose')}
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Pricing;