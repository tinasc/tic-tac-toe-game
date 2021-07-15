import React, { useState } from 'react';
import Square from './Square';
import '../index.css';

const Board = () => {

    const [square, setSquare] = useState(Array(9).fill(null));
    const [X, setX] = useState(true);

    

    const renderSquare = (i) => {
        return (
            <Square value={square[i]} onClick={() => handleClick(i)} />
        )
    }

    const handleClick = (i) => {
        const squares = square.slice();
        if (squares[i] === null) {
            squares[i] = X ? 'X' : 'O';
            setSquare(squares);
            setX(!X);
        } else {
            alert("Sorry! Can't make this move")
        }

    }

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        let isDraw = true;
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
          }
          if (!squares[a] || !squares[b] || !squares[c]) {
            isDraw = false;
          }
        }
        if (isDraw) return 'D';
        return null;
    }

    const winner = calculateWinner(square);
    const status = winner
    ? winner === 'D'
      ? 'Draw'
      : 'Winner is ' + winner
    : 'Next player is ' + (X ? 'X' : 'O');
    return (
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>

            <h3>{status}</h3>
        </div>
    )
}

export default Board;