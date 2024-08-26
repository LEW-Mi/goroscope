import React from 'react';
import { useTranslation } from 'react-i18next';
import './HoroscopeDetail.css';

const HoroscopeDetail = ({ sign, description, onBack }) => {
  const { t } = useTranslation();

  return (
    <div className="horoscope-detail">
      <button onClick={onBack}>{t('back')}</button>
      <h2>{t(`zodiac.${sign}`)}</h2>
      <p>{description}</p>
    </div>
  );
};

export default HoroscopeDetail;