import Square from './Squaer.jsx';
import { useState } from 'react';

function getNextPlayer (squares) {
    const filledSquares = squares.filter(item => (item === 'X' || item === 'O'));
    let filledNumber = filledSquares.length;
    let nextLetter = (filledNumber % 2 === 0) ? 'X' : "O"
    return nextLetter;
}
function calculateWinner (squares) {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winConditions.length; i++) {
        const winCondition = winConditions[i];
        const [a, b, c] = winCondition;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    const filledSquares = squares.filter(item => (item === "X" || item === "O"))
    if (filledSquares.length === 9) {
        return "Nobody";
    }
    return null;
}

function Board () {
    const [squares, setsquares] = useState(Array(9).fill(null));
    const nextPlayer = getNextPlayer(squares);
    let winner = calculateWinner(squares);
    const status = winner ? `${winner} is winner` : `Next player: ${nextPlayer}`;

    const clickHandle = (index) => {
        let currentSquare = squares[index]
        if (currentSquare === null) {
            const newSquares = squares.slice()
            newSquares[index] = nextPlayer;
            setsquares(newSquares);
        }
    }

    return (
        <>
            <p>{status}</p>
            <div className="board-row">
                <Square value={squares[0]} index={0} onClick={clickHandle} />
                <Square value={squares[1]} index={1} onClick={clickHandle} />
                <Square value={squares[2]} index={2} onClick={clickHandle} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} index={3} onClick={clickHandle} />
                <Square value={squares[4]} index={4} onClick={clickHandle} />
                <Square value={squares[5]} index={5} onClick={clickHandle} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} index={6} onClick={clickHandle} />
                <Square value={squares[7]} index={7} onClick={clickHandle} />
                <Square value={squares[8]} index={8} onClick={clickHandle} />
            </div>
        </>
    );
}
export default Board;