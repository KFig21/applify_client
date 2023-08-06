/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Link } from "react-router-dom";
import SC from "../../../themes/StyledComponents";

export default function BoardLink({ board }) {
  return (
    <Link className="board-link-container" to={`/board/${board._id}`}>
      <SC.boardLinkHome className="board-container">
        <SC.textOnBgColor className="board-link-name">
          {board.boardname}
        </SC.textOnBgColor>
        <SC.textOnBgColor className="board-link-jobs">
          {board.jobs.length}{" "}
          {board.jobs.length === 1 ? "application" : "applications"}
        </SC.textOnBgColor>
      </SC.boardLinkHome>
    </Link>
  );
}
