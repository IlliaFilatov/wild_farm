import React from 'react';
import herbArenaria from '../images/herb-arenaria.png';
import herbCelandine from '../images/herb-celandine.png';
import herbRanogrin from '../images/herb-ranogrin.png';
import herbWolfsbane from '../images/herb-wolfsbane.png';
import stock from '../images/stock.png';

export default function Stock() {
  return (
      <div className="Stock Menu">
        <div className="menu_name">
          <img src={stock} alt=""/>
        </div>
        <div className="item">
          <img src={herbArenaria} alt=""/>
        </div>
        <div className="item">
          <img src={herbCelandine} alt=""/>
        </div>
        <div className="item">
          <img src={herbRanogrin} alt=""/>
        </div>
        <div className="item">
          <img src={herbWolfsbane} alt=""/>
        </div>
      </div>
  )
}