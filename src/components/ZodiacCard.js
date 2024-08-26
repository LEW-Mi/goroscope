import React from 'react';
import { useTranslation } from 'react-i18next';
import './ZodiacCard.css';

const ZodiacCard = ({ sign, icon, onClick }) => {
  const { t } = useTranslation();
  const iconPath = icon.startsWith('/') ? icon : `/icons/${sign}.png`;

  return (
    <div className="zodiac-card" onClick={onClick}>
      <img src={iconPath} alt={sign} width="48" height="48" />
      <div className="zodiac-card-content">
        <h3>{t(`zodiac.${sign.toLowerCase()}`)}</h3>
        <p>{t(`zodiac.${sign.toLowerCase()}_period`)}</p>
      </div>
    </div>
  );
};

export default ZodiacCard;