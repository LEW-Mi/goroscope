import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ZodiacList from './components/ZodiacList';
import HoroscopeDetail from './components/HoroscopeDetail';
import axios from 'axios';
import './i18n';
import './App.css';

const App = () => {
  const { i18n } = useTranslation();
  const [selectedZodiac, setSelectedZodiac] = useState(null);
  const [horoscope, setHoroscope] = useState('');

  const fetchHoroscope = async (sign) => {
    try {
      const response = await axios.post('https://poker247tech.ru/get_horoscope/', {
        sign,
        language: i18n.language === 'ru' ? 'original' : 'translated',
        period: 'today',
      });
      console.log('API Response:', response.data); // Выводим весь ответ от API
      setHoroscope(response.data.horoscope); // Устанавливаем описание в состояние
      setSelectedZodiac(sign); // Устанавливаем выбранный знак в состояние
    } catch (error) {
      console.error('Error fetching horoscope:', error);
    }
  };

  const handleBack = () => {
    setSelectedZodiac(null);
    setHoroscope('');
  };

  return (
    <div className="app">
      {selectedZodiac ? (
        <HoroscopeDetail sign={selectedZodiac} description={horoscope} onBack={handleBack} />
      ) : (
        <ZodiacList onZodiacClick={fetchHoroscope} />
      )}
      <button onClick={() => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}>
        {i18n.language === 'ru' ? 'EN' : 'RU'}
      </button>
    </div>
  );
};

export default App;