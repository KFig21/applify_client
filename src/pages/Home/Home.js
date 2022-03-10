/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBoards } from "../../store/actions/boardActions";
import BoardLink from "./components/BoardLink";
import SC from "../../themes/StyledComponents";
import "./Home.scss";
import JobsiteLink from "./components/JobsiteLink";

// jobsite images
import indeed from "../../assets/indeed.jpg";
import ziprecruiter from "../../assets/ziprecruiter.png";
import linkedin from "../../assets/linkedin.png";
import monster from "../../assets/monster.png";
import careerbuilder from "../../assets/careerbuilder.jpg";
import QuickLink from "./components/QuickLink";
import QuickLinkModal from "../../components/Modals/QuickLinkModal";
import { getQuickLinks } from "../../helpers/Api";
import Loader from "../../components/Loader/Loader";
import NewBoardModal from "../../components/Modals/NewBoardModal";

export default function Home({ setCurrentPage }) {
  const user = useSelector((state) => state.user);
  const boards = useSelector((state) => state.boards);
  const [quickLinkModal, setQuickLinkModal] = useState(false);
  const [newBoardModal, setNewBoardModal] = useState(false);
  const [quickLinks, setQuickLinks] = useState([]);
  const [quickLinksLoaded, setQuickLinksLoaded] = useState(false);
  const [boardsLoaded, setBoardsLoaded] = useState(false);
  const [linkToEdit, setLinkToEdit] = useState({});
  const [errorHandler, setErrorHandler] = useState({
    error: false,
    message: "",
  });
  const dispatch = useDispatch();
  const jobSites = [
    {
      name: "indeed",
      link: "https://www.indeed.com/",
      img: indeed,
    },
    {
      name: "ZipRecruiter",
      link: "https://www.ziprecruiter.com/",
      img: ziprecruiter,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/",
      img: linkedin,
    },
    {
      name: "monster",
      link: "https://www.monster.com/",
      img: monster,
    },
    {
      name: "careerbuilder",
      link: "https://www.careerbuilder.com/",
      img: careerbuilder,
    },
  ];

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
    setTimeout(() => {
      setBoardsLoaded(true);
    }, 200);
  };

  const fetchQuickLinks = async () => {
    setQuickLinks(await getQuickLinks(user._id));
    setTimeout(() => {
      setQuickLinksLoaded(true);
    }, 200);
  };

  useEffect(() => {
    setCurrentPage("home");
    fetchBoards();
    fetchQuickLinks();
  }, [user]);

  return (
    <div className="home-page">
      {quickLinkModal && (
        <QuickLinkModal
          setQuickLinkModal={setQuickLinkModal}
          linkToEdit={linkToEdit}
        />
      )}
      {/* NEW BOARD MODAL */}
      {newBoardModal && <NewBoardModal setNewBoardModal={setNewBoardModal} />}

      <SC.gradientText>Welcome {user.username}</SC.gradientText>

      <SC.homeContentContainer className="home-content-container">
        {boardsLoaded && quickLinksLoaded ? (
          <>
            <SC.fadeContainer></SC.fadeContainer>
            {/* JOB SEARCHES */}
            <div className="boards">
              <Link to="/boards">
                <SC.homeSectionTitle className="title">
                  Job Searches
                </SC.homeSectionTitle>
                <SC.subtextOnBgColor className="boards-length">{`(${boards.length})`}</SC.subtextOnBgColor>
              </Link>
              <div className="boards-container">
                {/* limit to 3 */}
                {boards.map((board, i) => {
                  if (i < 3) {
                    return <BoardLink board={board} key={i} />;
                  }
                  return <></>;
                })}
                {boards.length < 3 && (
                  <a
                    className="board-link-container"
                    onClick={() => setNewBoardModal(true)}
                  >
                    <SC.boardLinkHome className="board-container">
                      <SC.textOnBgColor className="board-link-name">
                        Add a new search
                      </SC.textOnBgColor>
                      <SC.textOnBgColor className="board-link-jobs">
                        by clicking here!
                      </SC.textOnBgColor>
                    </SC.boardLinkHome>
                  </a>
                )}
              </div>
            </div>
            {/* QUICK LINKS */}
            <div className="boards">
              <SC.homeSectionTitle className="title">
                Quick links
              </SC.homeSectionTitle>
              <div className="quicklinks-container">
                {quickLinks.map((link, i) => {
                  return (
                    <QuickLink
                      setQuickLinkModal={setQuickLinkModal}
                      setLinkToEdit={setLinkToEdit}
                      link={link}
                      key={i}
                    />
                  );
                })}
              </div>
            </div>
            {/* JOB SITES */}
            <div className="boards">
              <SC.homeSectionTitle className="title">
                Job Sites
              </SC.homeSectionTitle>

              <div className="job-sites-container">
                {jobSites.map((site, i) => {
                  return <JobsiteLink site={site} key={i} />;
                })}
              </div>
            </div>{" "}
            <SC.fadeContainer className="bottom"></SC.fadeContainer>
          </>
        ) : (
          <Loader type="home" />
        )}
      </SC.homeContentContainer>
    </div>
  );
}
