import React from 'react';
import { Button, Select, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="urelocation-header">
      <div className="header-container">
        <div className="logo">
          <h2>URElocation</h2>
        </div>
        <nav className="nav-menu">
          <a href="#home">{t('header.home')}</a>
          <a href="#services">{t('header.services')}</a>
          <a href="#pricing">{t('header.pricing')}</a>
          <a href="#testimonials">{t('header.testimonials')}</a>
          <a href="#faq">{t('header.faq')}</a>
        </nav>
        <Space>
          <Select 
            defaultValue="en" 
            onChange={changeLanguage}
            style={{ width: 100 }}
          >
            <Select.Option value="en">English</Select.Option>
            <Select.Option value="ru">Русский</Select.Option>
            <Select.Option value="uz">O'zbek</Select.Option>
          </Select>
          <Button type="primary">{t('header.startJourney')}</Button>
        </Space>
      </div>
    </header>
  );
};

export default Header;