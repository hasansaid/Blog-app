import React from 'react';
import './styles.css';
import Navigation_courses from './Navigation';
import Coursesheader from './CoursesHeader';
import Coursesbody from './CoursesBody';

const index = () => {
  return (
    <div>
      <Navigation_courses />
      <Coursesheader />
      <Coursesbody />
    </div>
  );
};

export default index;
