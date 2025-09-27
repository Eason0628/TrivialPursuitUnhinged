import Square from './Squaer.jsx';
import { useState } from 'react';
function Board () {
    const [squares, setsquares] = useState(Array(9).fill(null));

    const clickHandle = (index) => {
        let currentSquare = squares[index]
        if (currentSquare === null) {
            const filledSquares = squares.filter(item => (item === 'X' || item === 'O'));
            let filledNumber = filledSquares.length;
            let nextLetter = (filledNumber % 2 === 0) ? 'X' : "O"
            const newSquares = squares.slice()
            newSquares[index] = nextLetter;
            setsquares(newSquares);
        }
    }

    return (
        <>
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