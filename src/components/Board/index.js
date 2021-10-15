import styled from "styled-components";
import React, { useState } from "react";
import { StyledSquare } from "../Square/index";
import { calculateWinner } from "../../constants/index";
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
  let qtd = data.filter((d) => Boolean(d));
  let status = "";
  //let restart = false;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    if (qtd.length === 9) {
      status = "Draw";
    } else {
      status = "Next player: " + (checkX ? "X" : "O");
    }
  }

  function restartGame() {
    setData(Array(9).fill(null));
    setCheckX(true);
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

      <button onClick={restartGame}>Restart Game</button>
    </>
  );
};

export const StyledBoard = styled(Board)`
  display: flex;
`;
