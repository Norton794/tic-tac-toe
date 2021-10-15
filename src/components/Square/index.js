import styled from "styled-components";

export const Square = ({ className, value, onClick }) => {
  return (
    <button className={className} onClick={onClick} value={value}></button>
  );
};

export const StyledSquare = styled(Square)`
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
