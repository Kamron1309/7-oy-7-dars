import React from 'react';
import { Collapse, Table } from 'antd';
import { useTranslation } from 'react-i18next';
import './FAQ.css';

const { Panel } = Collapse;

const FAQ = () => {
  const { t } = useTranslation();

  const documents = [
    t('faq.documents.statement'),
    t('faq.documents.cv'),
    t('faq.documents.recommendations'),
    t('faq.documents.evidence')
  ];

  const servicesColumns = [
    {
      title: t('faq.services.service'),
      dataIndex: 'service',
      key: 'service',
    },
    {
      title: t('faq.services.description'),
      dataIndex: 'description',
      key: 'description',
    }
  ];

  const servicesData = [
    {
      key: '1',
      service: t('faq.services.relocation'),
      description: t('faq.services.relocationDesc')
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2>{t('faq.title')}</h2>
        
        <Collapse accordion className="faq-collapse">
          <Panel header={t('faq.question1')} key="1">
            <p>{t('faq.answer1')}</p>
          </Panel>
          <Panel header={t('faq.question2')} key="2">
            <p>{t('faq.answer2')}</p>
          </Panel>
          <Panel header={t('faq.question3')} key="3">
            <div>
              <p>{t('faq.answer3')}</p>
              <ul className="documents-list">
                {documents.map((doc, index) => (
                  <li key={index}>{doc}</li>
                ))}
              </ul>
            </div>
          </Panel>
          <Panel header={t('faq.question4')} key="4">
            <Table 
              columns={servicesColumns} 
              dataSource={servicesData} 
              pagination={false}
              size="small"
              className="services-table"
            />
          </Panel>
        </Collapse>
      </div>
    </section>
  );
};

export default FAQ;