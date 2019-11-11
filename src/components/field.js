import React from 'react';
import herbArenaria from '../images/herb-arenaria.png';
import herbCelandine from '../images/herb-celandine.png';
import herbRanogrin from '../images/herb-ranogrin.png';
import herbWolfsbane from '../images/herb-wolfsbane.png';
import { useSelector, useDispatch } from 'react-redux';
import { dropSeed, plantSeed } from '../actions';

export default function Field() {
  const isWithSeed = useSelector(state => state.field.isWithSeed), 
        plantName = useSelector(state => state.field.plantName),
        isCellsEmpty = useSelector(state => state.field.isEmpty),
        dispatch = useDispatch(),
        lowerBrightness = () => document.getElementsByClassName('Field')[0].style.filter = 'brightness(1)';

  function plant(e) {
    let cell = e.target,
        cellNumber = cell.getAttribute('data-cell'),
        cellImage = cell.getElementsByTagName('img')[0];

    if(isWithSeed && isCellsEmpty[cellNumber]) {
      switch (plantName) {
        case 'arenaria':
          cellImage.src = herbArenaria;
          dispatch(dropSeed(cellNumber));
          lowerBrightness();
          dispatch(plantSeed(plantName));
          break;
        case 'celandine':
          cellImage.src = herbCelandine;
          dispatch(dropSeed(cellNumber));
          lowerBrightness();
          dispatch(plantSeed(plantName));
          break;
        case 'ranogrin':
          cellImage.src = herbRanogrin;
          dispatch(dropSeed(cellNumber));
          lowerBrightness();
          dispatch(plantSeed(plantName));
        break;
        case 'wolfsbane':
          cellImage.src = herbWolfsbane;
          dispatch(dropSeed(cellNumber));
          lowerBrightness();
          dispatch(plantSeed(plantName));
          break;
        default:
          console.log('0')
          break;
      }
    }
  }

  return (
      <div className="Field">
        <div className="cell" data-cell="0" onClick={e => plant(e)}>
          <img alt=""/>
          <div className="growing"></div>
        </div>
        <div className="cell" data-cell="1" onClick={e => plant(e)}>
          <img alt=""/>
          <div className="growing"></div>
        </div>
        <div className="cell" data-cell="2" onClick={e => plant(e)}>
          <img alt=""/>
          <div className="growing"></div>
        </div>
        <div className="cell" data-cell="3" onClick={e => plant(e)}>
          <img alt=""/>
          <div className="growing"></div>
        </div>
        <div className="cell" data-cell="4" onClick={e => plant(e)}>
          <img alt=""/>
          <div className="growing"></div>
        </div>
        <div className="cell" data-cell="5" onClick={e => plant(e)}>
          <img alt=""/> 
          <div className="growing"></div>
        </div>
        <div className="cell" data-cell="6" onClick={e => plant(e)}>
          <img alt=""/>
          <div className="growing"></div>
        </div>
        <div className="cell" data-cell="7" onClick={e => plant(e)}>
          <img alt=""/>
          <div className="growing"></div>
        </div>
        <div className="cell" data-cell="8" onClick={e => plant(e)}>
          <img alt=""/>
          <div className="growing"></div>
        </div>
      </div>
  )
}