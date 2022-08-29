import { FC } from "react";
import { Board } from "../models/Board";
import React from "react";
import { CellComponent } from "./CellComponent";
interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}
export const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
  console.log(board);
  return (
    <div className="board">
      {/* отрисовать доску 16:01*/}
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell, index) => (
            <CellComponent cell={cell} key={cell.id} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
