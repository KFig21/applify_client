/* eslint-disable react/jsx-pascal-case */
import { Star, StarOutlineRounded } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { favBoard } from "../../helpers/Api";
import SC from "../../themes/StyledComponents";

export default function Board_Link({ board }) {
  const [isFav, setIsFav] = useState(false);

  // get favorite status
  useEffect(() => {
    setIsFav(board.favorite);
  }, [board]);

  const formatTimeStamp = (date) => {
    if (date) {
      let year = date.slice(0, 4);
      let month = date.slice(5, 7);
      let day = date.slice(8, 10);
      if (month[0] === "0") {
        month = month[1];
      }
      if (day[0] === "0") {
        day = day[1];
      }
      return `${month}/${day}/${year}`;
    }
    return date;
  };

  // toggle fav
  const favHandler = () => {
    try {
      favBoard(board._id);
    } catch (err) {}
    setIsFav(!isFav);
    board.favorite = !board.favorite;
  };

  return (
    <SC.boardLinkContainer className="board-container">
      {board.favorite ? (
        <SC.favIcon className="icon-container" onClick={() => favHandler()}>
          <Star className="favorite-icon" />
        </SC.favIcon>
      ) : (
        <SC.favIcon
          className="icon-container outline"
          onClick={() => favHandler()}
        >
          <StarOutlineRounded className="favorite-icon" />
        </SC.favIcon>
      )}
      <Link className="board-link-container" to={`/board/${board._id}`}>
        <SC.textOnBgColor className="board-link-name">
          {board.boardname}
        </SC.textOnBgColor>

        <SC.textOnBgColor className="board-link-jobs">
          {board.jobs.length}{" "}
          {board.jobs.length === 1 ? "application" : "applications"}
        </SC.textOnBgColor>
        <div className="board-link-dates-container">
          <SC.subtextOnBgColor className="board-link-date">
            <span className="date-title">created:</span>{" "}
            {formatTimeStamp(board.createdAt)}{" "}
          </SC.subtextOnBgColor>
          <SC.subtextOnBgColor className="board-link-date">
            <span className="date-title">updated:</span>{" "}
            {formatTimeStamp(board.updatedAt)}{" "}
          </SC.subtextOnBgColor>
        </div>
      </Link>
    </SC.boardLinkContainer>
  );
}
