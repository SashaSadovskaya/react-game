import React, {Component, useState} from 'react';

import './Main.scss'

const Main : React.FC = function () {
  const [state, setState] = useState({});
  const [arr, setArr] = useState(Array(9).fill(null));
  const [count, setCount] = useState(0);
  const handleClick = (e: any) => {
    let cellNumber = e.target.getAttribute('id');
    arr[cellNumber] = (count % 2 === 0) ? 'X' : 'O' ;
    setCount(count +1);
    console.log(arr)
  };
  return (
    <div className='main-container'>
      <button type='button'>New game</button>
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
}

export default Main;
