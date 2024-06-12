/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { getJobs } from "../../helpers/Api";
import SC from "../../themes/StyledComponents";
import Loader from "../Loader/Loader";
import { closeAnimation } from "./HelperFunctions";
import "./Modal.scss";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

export default function BoardStatsModal({
  board,
  setFilter,
  setFilterCol,
  fetchBoard,
  setLoaded,
  setIsFiltered,
}) {
  const [jobs, setJobs] = useState([]);
  const [loadedStats, setLoadedStats] = useState(false);
  const statusObj = {
    waiting: 0,
    applied: 0,
    viewed: 0,
    interviewed: 0,
    offered: 0,
    accepted: 0,
  };
  const resultsObj = {
    waiting: 0,
    passed: 0,
    offered: 0,
    accepted: 0,
    "not selected": 0,
  };
  const [statusStats, setStatusStats] = useState([]);
  const [resultsStats, setResultsStats] = useState([]);  
  // Modal
  const [showModal, setShowModal] = useState(false);

  const handleFilter = (_filter, _filterCol) => {
    setLoaded(false);
    setShowModal(false);
    setFilter(_filter);
    setFilterCol(_filterCol);
    setIsFiltered(true);
    fetchBoard(_filter, _filterCol);
  };

  const fetchJobs = async () => {
    let _board = await board._id;
    const fetchedJobs = await getJobs(
      _board,
      0,
      "status",
      -1,
      1000,
      "none",
      "none"
    );
    setJobs(fetchedJobs);
    fetchedJobs.forEach((job) => {
      // set statuses
      switch (job.status) {
        case "waiting":
          statusObj[job.status]++;
          break;
        case "applied":
          statusObj["applied"]++;
          break;
        case "viewed":
          statusObj["applied"]++;
          statusObj["viewed"]++;
          break;
        case "interviewed":
          statusObj["applied"]++;
          statusObj["viewed"]++;
          statusObj["interviewed"]++;
          break;
        case "offered":
          statusObj["applied"]++;
          statusObj["viewed"]++;
          statusObj["interviewed"]++;
          statusObj["offered"]++;
          break;
        case "accepted":
          statusObj["applied"]++;
          statusObj["viewed"]++;
          statusObj["interviewed"]++;
          statusObj["offered"]++;
          statusObj["accepted"]++;
          break;
        default:
          break;
      }
      // set results
      if (job.result !== "closed" && job.result !== "rejected") {
        resultsObj[job.result]++;
      } else {
        resultsObj["not selected"]++;
      }
    });
    let statusStatsTemp = [];
    let resultsStatsTemp = [];
    Object.entries(statusObj).forEach((e) => {
      statusStatsTemp.push({ name: e[0], count: e[1] });
    });
    Object.entries(resultsObj).forEach((e) => {
      resultsStatsTemp.push({ name: e[0], count: e[1] });
    });
    setStatusStats(statusStatsTemp);
    setResultsStats(resultsStatsTemp);
    setLoadedStats(true);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

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
        className={"modal-container " + (animation ? "in" : "out")}
      >
        <SC.modalTitleContainer className="modal-title-container board-name-edit">
          <SC.modalTitle className="modal-name">
            {board.boardname} stats
          </SC.modalTitle>
          <SC.modalTitleBoxShadow>⠀</SC.modalTitleBoxShadow>
        </SC.modalTitleContainer>
        {/* STATS CONTAINER */}

        <div className="modal-stats-container">
          {loadedStats ? (
            <>
              <SC.SingleStatContainer className="single-stat-container total">
                <span className="stat-name">Applications: </span>
                <span className="stat-count">{board.jobs.length}</span>
              </SC.SingleStatContainer>
              {/* STATUS STATS */}
              <div className="stat-wrapper">
                <SC.modalTitle>
                  <span className="modal-stats-title">Status</span>
                </SC.modalTitle>
                <div className="stats-container">
                  {statusStats.map((status) => {
                    return (
                      <SC.SingleStatContainer className="single-stat-container">
                        <span
                          className="stat-name"
                          onClick={() => handleFilter(status.name, "status")}
                        >
                          <FilterAltIcon className="stat-filter-icon" />
                          {status.name}
                        </span>
                        <span className="stat-count">{status.count}</span>
                        <SC.StatPercentageContainer
                          className={`${status.name}`}
                        >
                          <SC.StatBar
                            className={`${status.name}`}
                            style={{
                              width: `${
                                (status.count / board.jobs.length) * 100
                              }%`,
                            }}
                          >
                            <div className="stat-percentage">
                              {(
                                (status.count / board.jobs.length) *
                                100
                              ).toFixed(1)}{" "}
                              %
                            </div>
                          </SC.StatBar>
                        </SC.StatPercentageContainer>
                      </SC.SingleStatContainer>
                    );
                  })}
                </div>
              </div>
              {/* RESULTS STATS */}
              <div className="stat-wrapper">
                <SC.modalTitle>
                  <span className="modal-stats-title">Results</span>
                </SC.modalTitle>
                <div className="stats-container">
                  {resultsStats.map((result) => {
                    return (
                      <SC.SingleStatContainer
                        className="single-stat-container"
                        onClick={() => handleFilter(result.name, "result")}
                      >
                        <span className="stat-name">
                          <FilterAltIcon className="stat-filter-icon" />
                          {result.name}
                        </span>
                        <span className="stat-count">{result.count}</span>
                        <SC.StatPercentageContainer
                          className={`${result.name}`}
                        >
                          <SC.StatBar
                            className={`${result.name}`}
                            style={{
                              width: `${
                                (result.count / board.jobs.length) * 100
                              }%`,
                            }}
                          >
                            <div className="stat-percentage">
                              {(
                                (result.count / board.jobs.length) *
                                100
                              ).toFixed(1)}{" "}
                              %
                            </div>
                          </SC.StatBar>
                        </SC.StatPercentageContainer>
                      </SC.SingleStatContainer>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <Loader type="stats" />
          )}
        </div>
      </SC.authModalContainer>
      <SC.modalBackground
        className={"modal-background " + (animation ? "in" : "out")}
        onClick={() => handleCloseAnimation()}
      ></SC.modalBackground>
    </div>}
    <SC.primaryColorButtonInverse
      className={`filter-icon-container `}
      onClick={() => handleOpenModal()}
    >
      <QueryStatsIcon className="filter-icon" />
    </SC.primaryColorButtonInverse>
    </>
  );
}
