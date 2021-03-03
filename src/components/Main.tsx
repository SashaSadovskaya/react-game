import React, {Component, useEffect, useState} from 'react';
import './Main.scss'
import Player from "./Player";
import TransitionsModal from "./ModalWindow";


const Main : React.FC = function () {

  const [state, setState] = useState<object>({});
  const [arr, setArr] = useState(Array(9).fill(null));
  const [count, setCount] = useState<number>(0);
  const numberArr: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [result, setResult] = useState<any>('');
  const urlNewGame = require('../sounds/s4.mp3');
  const [soundNewGame] = useState(new Audio(urlNewGame.default));
  const urlWin = require('../sounds/win.mp3');
  const [soundWin] = useState(new Audio(urlWin.default));
  const urlSoundO = require('../sounds/s1.mp3');
  const [soundO ] = useState(new Audio(urlSoundO .default));
  const urlSoundX = require('../sounds/s2.mp3');
  const [soundX ] = useState(new Audio(urlSoundX .default));


  const handleClick = (e: any) => {
    let cellNumber: number = e.target.getAttribute('id');
    if (arr[cellNumber] === null) {
      arr[cellNumber] = (count % 2 === 0) ? 'x' : 'o';
      count % 2 === 0 ? soundO.play() : soundX.play();
      isWin(arr[cellNumber] );
      setCount(count + 1);
    }
    return false;
  };

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const isWin = (symb: string) => {
    for (let i = 0; i < 8; i++){
      let line = winningCombinations[i];
      if(arr[line[0]] === symb && arr[line[1]] === symb && arr[line[2]] === symb){
        setResult(<TransitionsModal symb = {symb}/>);
        soundWin.play();
        setTimeout(() => {setArr(Array(9).fill(null));
        }, 3000);
      }
    }
  };


    return (
    <div className='main-container'>
      <Player/>

      <button className='button-start' type="button" onClick={() => {
        soundNewGame.play();
        setCount(0);
        setArr(Array(9).fill(null))
      }}>
        New game
      </button>
      <div className='board'>
        {
          numberArr.map(number => (
            <div key={number} className='cell' onClick={(e) => handleClick(e)} id={`${number}`}>
              <span className='symbol'>{arr[number]}</span>
            </div>
          ))
        }
      </div>
      <div className='result'>
        {result}
      </div>
    </div>
  );
};

export default Main;
