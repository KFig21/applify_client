/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewBoard } from "../../store/actions/boardActions";
import SC from "../../themes/StyledComponents";
import { closeAnimation } from "./HelperFunctions";
import "./Modal.scss";

export default function NewBoardModal({ setNewBoardModal }) {
  const [boardname, setBoardname] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorHandler, setErrorHandler] = useState({
    error: false,
    message: "",
  });
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  const handleAddNewBoard = () => {
    if (boardname.length > 0) {
      dispatch(
        createNewBoard(
          {
            user: state._id,
            boardname: boardname,
          },
          setErrorHandler
        )
      );
      setBoardname("");
    }
    setNewBoardModal(false);
    window.location.reload();
  };

  useEffect(() => {
    if (boardname.length > 0 && boardname.length < 26) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [boardname]);

  // modal animation
  const [animation, setAnimation] = useState(true);

  const handleCloseAnimation = () => {
    setAnimation(false);
    closeAnimation(setNewBoardModal);
  };

  return (
    <div className={"modal-wrapper " + (animation ? "in" : "out")}>
      <SC.authModalContainer
        className={"modal-container  " + (animation ? "in" : "out")}
      >
        <SC.modalTitleContainer className="modal-title-container board-name-edit">
          <SC.modalTitle className="modal-name">New Job Search</SC.modalTitle>
          <SC.modalTitleBoxShadow>⠀</SC.modalTitleBoxShadow>
        </SC.modalTitleContainer>
        <div className="modal-inputs-container">
          <SC.authInput
            className="modal-input new-board"
            type="text"
            placeholder="Job search title"
            onChange={(e) => setBoardname(e.target.value)}
            maxLength="25"
            required
          ></SC.authInput>

          <div className="modal-buttons-container new-board">
            <SC.primaryColorButtonInverse
              className={`modal-button ${isValid}`}
              onClick={isValid ? () => handleAddNewBoard() : null}
            >
              Add
            </SC.primaryColorButtonInverse>
            <SC.primaryColorButtonInverse
              className="modal-button"
              onClick={() => handleCloseAnimation()}
            >
              Cancel
            </SC.primaryColorButtonInverse>
          </div>
        </div>
      </SC.authModalContainer>
      <SC.modalBackground
        className={"modal-background " + (animation ? "in" : "out")}
        onClick={() => handleCloseAnimation()}
      ></SC.modalBackground>
    </div>
  );
}
