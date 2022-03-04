/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuicklinks } from "../../store/actions/authActions";
import SC from "../../themes/StyledComponents";
import { closeAnimation } from "./HelperFunctions";
import "./Modal.scss";

export default function QuickLinkModal({ setQuickLinkModal, linkToEdit }) {
  const [value, setValue] = useState(linkToEdit.value);
  const [type, setType] = useState(linkToEdit.type);
  const [name, setName] = useState(linkToEdit.name);
  const [isValid, setIsValid] = useState(false);
  const [errorHandler, setErrorHandler] = useState({
    error: false,
    message: "",
  });
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  const editQuickLink = () => {
    if (value.length > 0) {
      dispatch(
        updateQuicklinks(
          {
            user: state._id,
            linkId: linkToEdit.id,
            name: name,
            type: type,
            value: value,
          },
          setErrorHandler
        )
      );
      setValue("");
    }
    setQuickLinkModal(false);
    window.location.reload();
  };

  useEffect(() => {
    console.log(type);
    if (value) {
      if (value.length > 0) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
  }, [value]);

  // modal animation
  const [animation, setAnimation] = useState(true);

  const handleCloseAnimation = () => {
    setAnimation(false);
    closeAnimation(setQuickLinkModal);
  };

  return (
    <div className={"modal-wrapper " + (animation ? "in" : "out")}>
      <SC.authModalContainer
        className={`modal-container ${
          linkToEdit.type === "text" && " resume"
        } ${animation ? "in" : "out"}`}
      >
        {/* TITLE */}
        <SC.modalTitleContainer className="modal-title-container  ">
          <span className="modal-name">
            Edit{" "}
            <SC.primaryColorUnderline
              style={{ display: "inline-block", margin: "0px 5px" }}
            >
              {linkToEdit.name}
            </SC.primaryColorUnderline>{" "}
            quick-link
          </span>
          <SC.modalTitleBoxShadow>⠀</SC.modalTitleBoxShadow>
        </SC.modalTitleContainer>
        <div className="modal-inputs-container resume">
          {/* NAME */}
          <div className="job-input-container">
            <span className="input-label">Name</span>
            <SC.authInput
              className="modal-input job"
              type="text"
              placeholder="Company name"
              onChange={(e) => setName(e.target.value)}
              defaultValue={linkToEdit.name}
              required
              maxLength={20}
            ></SC.authInput>
          </div>
          {/* TYPE */}
          <div className="job-input-container">
            <span className="input-label">Type</span>
            <div className="job-radio-container">
              <div className="job-radio-buttons-container">
                <div className="job-radio-wrapper">
                  <SC.jobFormRadioLabel
                    htmlFor="type-link"
                    className={`job-radio-label ${type === "link"} quicklink`}
                  >
                    link
                  </SC.jobFormRadioLabel>
                  <input
                    type="radio"
                    name="type"
                    id="type-link"
                    className="job-radio-input"
                    onChange={() => setType("link")}
                  />
                </div>
                <div className="job-radio-wrapper">
                  <SC.jobFormRadioLabel
                    htmlFor="type-text"
                    className={`job-radio-label ${type === "text"} quicklink`}
                  >
                    text
                  </SC.jobFormRadioLabel>
                  <input
                    type="radio"
                    name="type"
                    id="type-text"
                    className="job-radio-input"
                    onChange={() => setType("text")}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* VALUE INPUT */}
          {/* LINK */}
          {type === "link" && (
            <div className="job-input-container">
              <span className="input-label">Link</span>
              <SC.authInput
                className="modal-input new-board"
                type="text"
                placeholder={`Link to ${name}`}
                onChange={(e) => setValue(e.target.value)}
                defaultValue={value}
                required
              ></SC.authInput>
            </div>
          )}
          {/* TEXT */}
          {type === "text" && (
            <SC.quickLinkTextarea
              className="modal-input resume"
              type="text"
              placeholder={`Enter ${name} ${
                name === "Cover Letter" ? "template" : "text"
              }`}
              onChange={(e) => setValue(e.target.value)}
              defaultValue={value}
              required
            ></SC.quickLinkTextarea>
          )}

          <div className="modal-buttons-container new-board">
            <SC.primaryColorButtonInverse
              className={`modal-button ${isValid}`}
              onClick={isValid ? () => editQuickLink() : null}
            >
              Save
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
