/* eslint-disable react/jsx-pascal-case */
import React from "react";
import SC from "../../themes/StyledComponents";
import { useNavigate } from "react-router-dom";

export default function NavBoardLink({ board }) {
  let navigate = useNavigate();
  const handleNav = () => {
    navigate(`/board/${board._id}`);
    window.location.reload();
  };
  return (
    <SC.navLinkSub>
      <div onClick={() => handleNav()}>{board.boardname}</div>
    </SC.navLinkSub>
  );
}
