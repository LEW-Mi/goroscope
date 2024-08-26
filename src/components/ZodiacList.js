import React from 'react';
//import { useTranslation } from 'react-i18next';
import ZodiacCard from './ZodiacCard';
import './ZodiacList.css';

const zodiacSigns = [
  { sign: 'aries', period: 'March 21 - April 19', icon: '/icons/oven.png' },
  { sign: 'taurus', period: 'April 20 - May 20', icon: '/icons/telec.png' },
  { sign: 'gemini', period: 'May 21 - June 20', icon: '/icons/bliznec.png' },
  { sign: 'cancer', period: 'June 21 - July 22', icon: '/icons/rak.png' },
  { sign: 'leo', period: 'July 23 - August 22', icon: '/icons/lew.png' },
  { sign: 'virgo', period: 'August 23 - September 22', icon: '/icons/deva.png' },
  { sign: 'libra', period: 'September 23 - October 22', icon: '/icons/ves.png' },
  { sign: 'scorpio', period: 'October 23 - November 21', icon: '/icons/scorpion.png' },
  { sign: 'sagittarius', period: 'November 22 - December 21', icon: '/icons/strelec.png' },
  { sign: 'capricorn', period: 'December 22 - January 19', icon: '/icons/kozer.png' },
  { sign: 'aquarius', period: 'January 20 - February 18', icon: '/icons/vodole.png' },
  { sign: 'pisces', period: 'February 19 - March 20', icon: '/icons/riba.png' },
];

const ZodiacList = ({ onZodiacClick }) => {
  return (
    <div className="zodiac-list">
      {zodiacSigns.map((zodiac) => (
        <ZodiacCard
          key={zodiac.sign}
          sign={zodiac.sign}
          period={zodiac.period}
          icon={zodiac.icon}
          onClick={() => onZodiacClick(zodiac.sign)}
        />
      ))}
    </div>
  );
};

export default ZodiacList;