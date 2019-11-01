import React from 'react';
import aard from '../images/Effect_Aard.png';
import axii from '../images/Effect_Axii.png';
import igni from '../images/Effect_Igni.png';
import yrden from '../images/Effect_Yrden.png';
import witcher from '../images/witcher.png';
import wildFarm from '../images/wild_farm.png';

export default function Decorations() {
  return(
    <div className="Decorations">
      <img src={aard} alt="" className="aard"/>
      <img src={axii} alt="" className="axii"/>
      <img src={igni} alt="" className="igni"/>
      <img src={yrden} alt="" className="yrden"/>
      <img src={witcher} alt="" className="logo1"/>
      <img src={wildFarm} alt="" className="logo2"/>
    </div>
  )
}