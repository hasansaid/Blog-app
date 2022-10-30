import React from 'react';
import './styles.css';
import Eegitim from './egitim';
import Eegitimkategori from './ekategori';

const CoursesBody = () => {
  return (
    <div className="yanyana">
      <Eegitim />
      <Eegitimkategori />
    </div>
  );
};

export default CoursesBody;
