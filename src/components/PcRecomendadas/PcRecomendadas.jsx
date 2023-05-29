import React from 'react';
import './PcRecomendadas.scss';
import pcImage1 from '..//..//assets/pcImage1.jpg';
import pcImage2 from '..//..//assets/pcImage2.jpg';
import pcImage3 from '..//..//assets/pcImage3.jpg';


function PcRecomendadas() {
  return (
    <div className="section__container">
      <span className="section__title">
        <h5 class> PCs <strong>Recomendadas</strong>

        </h5>

      </span>
      <div className="pc__container">
        <div className="pc__item">
          <img src={pcImage1} alt="PC 1" className="pc__image" />
        </div>
        <div className="pc__item">
          <img src={pcImage2} alt="PC 2" className="pc__image" />
        </div>
        <div className="pc__item">
          <img src={pcImage3} alt="PC 3" className="pc__image" />
        </div>
      </div>
    </div>
  );
}

export default PcRecomendadas;
