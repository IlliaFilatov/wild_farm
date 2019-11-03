import React from 'react';
import herbArenaria from '../images/herb-arenaria.png';
import herbCelandine from '../images/herb-celandine.png';
import herbRanogrin from '../images/herb-ranogrin.png';
import herbWolfsbane from '../images/herb-wolfsbane.png';
import oren from '../images/currency-oren.png'
import invent from '../images/invent.png';

export default function Invent() {
  return (
      <div className="Invent Menu">
        <div className="menu_name">
          <img src={invent} alt=""/>
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