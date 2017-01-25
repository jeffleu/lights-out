import React from 'react';
import { Cell } from '../components';

const Row = (props) => {
  const { row, rowIndex, gameOver, handleToggle, difficulty } = props;

  return (
    <tr>
      {
        row.map((cell, i) => {
          return (
            <Cell
              key={ i }
              rowIndex={ rowIndex }
              columnIndex={ i }
              cellValue={ cell }
              gameOver={ gameOver }
              handleToggle={ handleToggle }
              difficulty={ difficulty }
            />
          );
        })
      }
    </tr>
  );
};

export default Row;
