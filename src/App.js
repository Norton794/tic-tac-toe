import React, { useState } from "react";
import styled from "styled-components";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <StyledBoard />
    </div>
  );
}

const Square = ({ className, value, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

const StyledSquare = styled(Square)`
  background: #20232a;
  border: 1px solid #fff;
  color: #fff;
  height: 50px;
  width: 50px;
  cursor: pointer;
  font-family: "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  border-radius: 10px;
  font-weight: bold;
`;

const Board = ({ className }) => {
  const [data, setData] = useState(Array(9).fill(null));
  const [checkX, setCheckX] = useState(true);

  function renderSquare(i) {
    return <StyledSquare value={data[i]} onClick={() => handleClick(i)} />;
  }

  function handleClick(i) {
    const squares = data.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = checkX === true ? "X" : "O";
    setData(squares);
    setCheckX(!checkX);
  }

  const winner = calculateWinner(data);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (checkX ? "X" : "O");
  }

  return (
    <>
      <p style={{ fontWeight: "bold", color: "20232a" }}>{status}</p>
      <div className={className}>
        <div>{renderSquare(0)}</div>
        <div>{renderSquare(1)}</div>
        <div>{renderSquare(2)}</div>
      </div>
      <div className={className}>
        <div>{renderSquare(3)}</div>
        <div>{renderSquare(4)}</div>
        <div>{renderSquare(5)}</div>
      </div>
      <div className={className}>
        <div>{renderSquare(6)}</div>
        <div>{renderSquare(7)}</div>
        <div>{renderSquare(8)}</div>
      </div>
    </>
  );
};

const StyledBoard = styled(Board)`
  display: flex;
`;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
