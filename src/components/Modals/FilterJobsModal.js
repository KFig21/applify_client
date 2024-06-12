/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import SC from "../../themes/StyledComponents";
import AppliedFilter from "./components/filter/AppliedFilter";
import ColumnButtons from "./components/filter/ColumnButtons";
import RemoteFilter from "./components/filter/RemoteFilter";
import ResultFilter from "./components/filter/ResultFilter";
import StatusFilter from "./components/filter/StatusFilter";
import TypeFilter from "./components/filter/TypeFilter";
import { closeAnimation } from "./HelperFunctions";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import "./Modal.scss";

export default function FilterJobsModal({
  setFilter,
  setFilterCol,
  filter,
  filterCol,
  fetchBoard,
  setLoaded,
  isFiltered,
  setIsFiltered,
  resetBoard,
}) {
  const [isValid, setIsValid] = useState(false);
  // Modal
  const [showModal, setShowModal] = useState(false);

  const handleClearFilter = () => {
    setLoaded(false);
    setIsFiltered(false);
    setFilter("none");
    setFilterCol("none");
    resetBoard();
    setShowModal(false);
  };

  const handleFilter = () => {
    setLoaded(false);
    setIsFiltered(true);
    fetchBoard();
    setShowModal(false);
  };

  const handleChangeCol = (newCol) => {
    setFilterCol(newCol);
    setFilter("none");
  };

  useEffect(() => {
    if (filterCol !== "none" && filter !== "none") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [filterCol, filter]);

  // modal animation
  const [animation, setAnimation] = useState(true);

  const handleOpenModal = () => {
    setAnimation(true)
    setShowModal(true);
  }

  const handleCloseAnimation = () => {
    setAnimation(false);
    closeAnimation(setShowModal);
  };

  return (
    <>
   {showModal && <div className={"modal-wrapper " + (animation ? "in" : "out")}>
      <SC.authModalContainer
        className={"modal-container  " + (animation ? "in" : "out")}
      >
        <SC.modalTitleContainer className="modal-title-container board-name-edit">
          <SC.modalTitle className="modal-name"> Select a filter</SC.modalTitle>
          <SC.modalTitleBoxShadow>⠀</SC.modalTitleBoxShadow>
        </SC.modalTitleContainer>
        <div className="modal-inputs-container">
          <ColumnButtons
            filterCol={filterCol}
            handleChangeCol={handleChangeCol}
          />
          <div className="filter-container">
            {filterCol === "status" && (
              <StatusFilter filter={filter} setFilter={setFilter} />
            )}
            {filterCol === "result" && (
              <ResultFilter filter={filter} setFilter={setFilter} />
            )}
            {filterCol === "remote" && (
              <RemoteFilter filter={filter} setFilter={setFilter} />
            )}
            {filterCol === "applied" && (
              <AppliedFilter filter={filter} setFilter={setFilter} />
            )}
            {filterCol === "jobtype" && (
              <TypeFilter filter={filter} setFilter={setFilter} />
            )}
          </div>
          <div className="modal-buttons-container new-board">
            <SC.primaryColorButtonInverse
              className={`modal-button ${isValid}`}
              onClick={() => handleFilter()}
            >
              Filter
            </SC.primaryColorButtonInverse>
            <SC.primaryColorButtonInverse
              className="modal-button"
              onClick={() => {
                isValid ? handleClearFilter() : handleCloseAnimation();
              }}
            >
              Clear
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
    </div>}
    <SC.primaryColorButtonInverse
    className={`filter-icon-container ${isFiltered && " filtered"}`}
    onClick={() => handleOpenModal()}
    >
      <FilterAltIcon className="filter-icon" />
      {filterCol === "none" && filter === "none" && (
        <span className="filter-text">filter</span>
      )}
      {filterCol !== "none" && filter !== "none" && (
        <strong className="filter-text">{`${filterCol}: ${filter}`}</strong>
      )}
    </SC.primaryColorButtonInverse>
    </>
  );
}
