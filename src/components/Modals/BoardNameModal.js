/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { changeBoardName, deleteBoard } from "../../store/actions/boardActions";
import SC from "../../themes/StyledComponents";
import { closeAnimation } from "./HelperFunctions";
import "./Modal.scss";

export default function BoardNameModal({ setBoardNameModal, board }) {
  const [boardname, setBoardname] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const redirect = useNavigate();
  const [errorHandler, setErrorHandler] = useState({
    error: false,
    message: "",
  });
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  const handleChangeBoardName = () => {
    if (boardname.length > 0) {
      dispatch(
        changeBoardName(
          {
            user: state._id,
            boardname: boardname,
            boardId: board._id,
          },
          setErrorHandler
        )
      );
      setBoardname("");
    }
    setBoardNameModal(false);
    window.location.reload();
  };

  const handleDeleteBoard = () => {
    dispatch(
      deleteBoard(
        {
          user: state._id,
          board: board._id,
        },
        setErrorHandler
      )
    );
    setBoardNameModal(false);
    return redirect("/");
  };

  useEffect(() => {
    if (boardname.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [boardname]);

  // modal animation
  const [animation, setAnimation] = useState(true);

  const handleCloseAnimation = () => {
    setAnimation(false);
    closeAnimation(setBoardNameModal);
  };

  return (
    <div className={"modal-wrapper " + (animation ? "in" : "out")}>
      <SC.authModalContainer
        className={"modal-container " + (animation ? "in" : "out")}
      >
        <SC.modalTitleContainer className="modal-title-container board-name-edit">
          <SC.modalTitle className="modal-name">
            edit '{board.boardname}'
          </SC.modalTitle>
          <SC.modalTitleBoxShadow>⠀</SC.modalTitleBoxShadow>
        </SC.modalTitleContainer>
        <div className="modal-inputs-container">
          <div className="job-input-container ">
            <span className="input-label edit-boardname">Name </span>
            <SC.authInput
              className="modal-input new-board"
              type="text"
              placeholder={board.boardname}
              onChange={(e) => setBoardname(e.target.value)}
              required
            ></SC.authInput>
          </div>
          <div className="modal-buttons-container new-board">
            {!showDeleteButton ? (
              <>
                <SC.primaryColorButtonInverse
                  className={`modal-button ${isValid}`}
                  onClick={isValid ? () => handleChangeBoardName() : null}
                >
                  Update
                </SC.primaryColorButtonInverse>
                <SC.primaryColorButtonInverse
                  className="modal-button"
                  onClick={() => handleCloseAnimation()}
                >
                  Cancel
                </SC.primaryColorButtonInverse>
                <SC.deleteButtonInverse
                  className="modal-button"
                  onClick={() => setShowDeleteButton(true)}
                >
                  Delete
                </SC.deleteButtonInverse>
              </>
            ) : (
              <>
                <span>Are you sure you want to delete this search?</span>
                <div className="delete-buttons-container">
                  <SC.primaryColorButtonInverse
                    className="modal-button"
                    onClick={() => setShowDeleteButton(false)}
                  >
                    Cancel
                  </SC.primaryColorButtonInverse>
                  <SC.deleteButtonInverse
                    className="modal-button"
                    onClick={() => handleDeleteBoard()}
                  >
                    Delete?
                  </SC.deleteButtonInverse>
                </div>
              </>
            )}
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
