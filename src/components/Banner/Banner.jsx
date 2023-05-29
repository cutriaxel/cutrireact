import React from 'react';
import './Banner.scss';
import bannerImage from '../../assets/banner.jpg';

function Banner() {
  return (
    <div className="banner__container">
      <img src={bannerImage} alt="Banner" className="banner__image" />
    </div>
  );
}

export default Banner;
