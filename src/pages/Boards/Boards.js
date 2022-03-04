/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewBoardModal from "../../components/Modals/NewBoardModal";
import { getBoards } from "../../store/actions/boardActions";
import SC from "../../themes/StyledComponents";
import "./Boards.scss";
import Board_Link from "./Board_Link";

export default function Boards({ setCurrentPage }) {
  const [newBoardModal, setNewBoardModal] = useState(false);
  const user = useSelector((state) => state.user);
  const boards = useSelector((state) => state.boards);
  const [errorHandler, setErrorHandler] = useState({
    error: false,
    message: "",
  });
  const dispatch = useDispatch();

  const handleCreateNewBoard = () => {
    setNewBoardModal(true);
  };

  const fetchBoards = async () => {
    let user_id = await user._id;
    dispatch(
      getBoards(
        {
          user: user_id,
        },
        setErrorHandler
      )
    );
  };

  useEffect(() => {
    setCurrentPage("boards");
    fetchBoards();
  }, [user]);

  return (
    <div className="boards-page">
      {/* NEW BOARD MODAL */}
      {newBoardModal && <NewBoardModal setNewBoardModal={setNewBoardModal} />}
      {/* HEADER */}
      <SC.gradientText>Job Searches</SC.gradientText>
      {/* ADD BOARD BUTTON */}
      <div className="board-add-button-container">
        {boards.length < 10 ? (
          <SC.primaryColorButtonInverse onClick={() => handleCreateNewBoard()}>
            + Add new search
          </SC.primaryColorButtonInverse>
        ) : (
          <SC.textOnBgColor>Max searches reached</SC.textOnBgColor>
        )}
      </div>
      {/* BOARDS */}
      <SC.homeContentContainer className="boards-container">
        <SC.fadeContainer></SC.fadeContainer>
        {boards.length === 0 ? (
          <SC.subtextOnBgColor
            style={{ minWidth: "400px", fontSize: "30px", textAlign: "center" }}
          >
            Add a your first job search!
          </SC.subtextOnBgColor>
        ) : (
          boards.map((board, i) => {
            return <Board_Link board={board} key={i} />;
          })
        )}
        <SC.fadeContainer className="bottom"></SC.fadeContainer>
      </SC.homeContentContainer>
    </div>
  );
}
