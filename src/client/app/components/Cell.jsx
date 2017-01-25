import React from 'react';

const Cell = (props) => {
  const { rowIndex, columnIndex, cellValue, gameOver, handleToggle, difficulty } = props;

  let light;
  if (difficulty === 'easy') {
    (!gameOver) ? (cellValue === 1) ? light = 'easy on' : light = 'easy off' : light = 'easy done';
  } else if (difficulty ==='hard') {
    (!gameOver) ? (cellValue === 1) ? light = 'hard on' : light = 'hard off' : light = 'hard done';
  }
  
  return (
    <td>
      <div className={ light } onClick={ () => {handleToggle(rowIndex, columnIndex)} }></div>
    </td>
  );
};

export default Cell;
