import React, {Component, useState} from 'react';

import './Main.scss'

const Main : React.FC = function () {
  const [state, setState] = useState({});
  const [arr, setArr] = useState(Array(9).fill(null));
  const [count, setCount] = useState(0);

  const handleClick = (e: any) => {
    let cellNumber = e.target.getAttribute('id');
    if (arr[cellNumber] === null) {
      arr[cellNumber] = (count % 2 === 0) ? 'X' : 'O';
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
      console.log('line ' + line);
      console.log('arr[line[0]] '+ arr[line[0]] + arr[line[1]] + arr[line[2]]);
      if(arr[line[0]] === symb && arr[line[1]] === symb && arr[line[2]] === symb){
        alert('you win');
        setTimeout(() => {
          setCount(0);
          setArr(Array(9).fill(null))
        }, 2000)
      }
      console.log('dalshe')
    }
  };

  return (
    <div className='main-container'>
      <button type="button" onClick={() => {
        setCount(0);
        setArr(Array(9).fill(null))
      }}>
        New game
      </button>
      <div className='board'>
        <div className='cell' onClick={(e) => handleClick(e)} id='0'>
          {arr[0]}
        </div>
        <div className='cell' onClick={(e) => handleClick(e)} id='1'>
          {arr[1]}
        </div>
        <div className='cell' onClick={(e) => handleClick(e)} id='2'>
          {arr[2]}
        </div>
        <div className='cell' onClick={(e) => handleClick(e)} id='3'>
          {arr[3]}
        </div>
        <div className='cell' onClick={(e) => handleClick(e)} id='4'>
          {arr[4]}
        </div>
        <div className='cell' onClick={(e) => handleClick(e)} id='5'>
          {arr[5]}
        </div>
        <div className='cell' onClick={(e) => handleClick(e)} id='6'>
          {arr[6]}
        </div>
        <div className='cell' onClick={(e) => handleClick(e)} id='7'>
          {arr[7]}
        </div>
        <div className='cell' onClick={(e) => handleClick(e)} id='8'>
          {arr[8]}
        </div>
      </div>
    </div>
  );
};

export default Main;
