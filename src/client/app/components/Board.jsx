import React from 'react';
import { Row } from '../components';

const Board = (props) => {
  const { board, gameOver, handleToggle, difficulty } = props;

  return (
    <table>
      <tbody>
        {
          board.map((row, i) => {
            return (
              <Row
                key={i}
                row={ row }
                rowIndex={ i }
                gameOver={ gameOver }
                handleToggle={ handleToggle }
                difficulty={ difficulty }
              />
            );
          })
        }
      </tbody>
    </table>
  );
};

export default Board;
