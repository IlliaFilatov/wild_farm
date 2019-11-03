import React from 'react';
import herbArenaria from '../images/herb-arenaria.png';
import herbCelandine from '../images/herb-celandine.png';
import herbRanogrin from '../images/herb-ranogrin.png';
import herbWolfsbane from '../images/herb-wolfsbane.png';
import market from '../images/market.png';
import oren from '../images/currency-oren.png';
import { useSelector } from 'react-redux';

export default function Market() {

  const arenariaSeedsPrice = useSelector(state => state.market.arenaria.buy);
  const celandineSeedsPrice = useSelector(state => state.market.celandine.buy);
  const ranogrinSeedsPrice = useSelector(state => state.market.ranogrin.buy);
  const wolfsbaneSeedsPrice = useSelector(state => state.market.wolfsbane.buy);

  return (
      <div className="Market Menu">
        <div className="menu_name">
          <img src={market} alt=""/>
        </div>
        <div className="item">
          <img src={herbArenaria} alt=""/>
          <div className="info">
            <p>
              <span>{'buy: ' + arenariaSeedsPrice}</span>
              <img src={oren} alt=""/>
            </p>
          </div>
        </div>
        <div className="item">
          <img src={herbCelandine} alt=""/>
          <div className="info">
            <p>
              <span>{'buy: ' + celandineSeedsPrice}</span>
              <img src={oren} alt=""/>
            </p>
          </div>
        </div>
        <div className="item">
          <img src={herbRanogrin} alt=""/>
          <div className="info">
            <p>
              <span>{'buy: ' + ranogrinSeedsPrice}</span>
              <img src={oren} alt=""/>
            </p>
          </div>
        </div>
        <div className="item">
          <img src={herbWolfsbane} alt=""/>
          <div className="info">
            <p>
              <span>{'buy: ' + wolfsbaneSeedsPrice}</span>
              <img src={oren} alt=""/>
            </p>
          </div>
        </div>
      </div>
  )
}