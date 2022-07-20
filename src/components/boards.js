import React from "react";
import SingleBoard from "./SingleBoard.js";
import "./boards.css";

const Board = (props) => {
  const boardComponents = props.boards.map((board, index) => {
    return (
      <SingleBoard 
        setIsOnHomepage={props.setIsOnHomepage}
        // function={props.showCardsFunction}
        // board_id={board.board_id}
        // title={board.title}
        // owner={board.owner}
        key={index}
        board={board}
        isOnHomepage={props.isOnHomepage}
        setActiveBoard={props.setActiveBoard}
      ></SingleBoard>
    );
  });

  return <section>{boardComponents}</section>;
};

export default Board;
