/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SC from "../../themes/StyledComponents";
import LinkIcon from '@mui/icons-material/Link';
import "./Nav.scss";
import {
  HomeRounded,
  HomeOutlined,
  Search,
  Settings,
  SettingsOutlined,
} from "@material-ui/icons";
import NavBoardLink from "./NavBoardLink";
import { getBoards } from "../../helpers/Api";
import NavQuickLink from "./NavQuickLink";

export default function Nav({ currentPage }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const [boards, setBoards] = useState([]);
  const [links, setLinks] = useState([]);

  const fetchBoards = async () => {
    setBoards(await getBoards(state._id));
  };

  const fetchLinks = async () => {
    setLinks(state.quicklinks);
  };

  useEffect(() => {
    fetchBoards();
    fetchLinks();
  }, [state]);

  return (
    <SC.nav className="nav">
      <div className="nav-list-container">
        <SC.navLogoText className="navbar-logo-text">Applify</SC.navLogoText>
        <ul className="nav-list">
          {/* HOME */}
          <Link to="/">
            <SC.navLink
              className={
                "sidebar-link " +
                (currentPage === "home" ? "active-nav-link" : "")
              }
            >
              {currentPage === "home" ? (
                <HomeRounded className="sidebar-icon" />
              ) : (
                <HomeOutlined className="sidebar-icon" />
              )}{" "}
              {/* <li className="sidebar-link-text">Home</li> */}
            </SC.navLink>
          </Link>
          {/* BOARDS */}
          <SC.boardsLink className="boards-link">
            <Link to="/boards">
              <SC.navLink
                className={
                  "sidebar-link boards " +
                  (currentPage === "boards" ? "active-nav-link" : "")
                }
              >
                {currentPage === "boards" ? (
                  <Search className="sidebar-icon" />
                ) : (
                  <Search className="sidebar-icon" />
                )}{" "}
                {/* <li className="sidebar-link-text">Boards</li> */}
              </SC.navLink>
            </Link>
            {boards.length > 0 && (
              <SC.boardListContainer className="boards-list-container">
                {boards.map((board, i) => {
                  return <NavBoardLink board={board} key={i} />;
                })}
              </SC.boardListContainer>
            )}
          </SC.boardsLink>
          {/* QUICKLINKS */}
          <SC.boardsLink className="boards-link">
              <SC.navLink
                className={
                  "sidebar-link boards " +
                  (currentPage === "boards" ? "active-nav-link" : "")
                }
              >
                {currentPage === "boards" ? (
                  <LinkIcon className="sidebar-icon" />
                ) : (
                  <LinkIcon className="sidebar-icon" />
                )}{" "}
              </SC.navLink>
            {links.length > 0 && (
              <SC.boardListContainer className="boards-list-container">
                {links.map((link, i) => {
                  if(link.value !== ""){
                    return <NavQuickLink link ={link} key={i}/>
                  }
                })}
              </SC.boardListContainer>
            )}
          </SC.boardsLink>
          {/* SETTINGS */}
          <Link to="/settings">
            <SC.navLink
              className={
                "sidebar-link " +
                (currentPage === "settings" ? "active-nav-link" : "")
              }
            >
              {currentPage === "settings" ? (
                <Settings className="sidebar-icon" />
              ) : (
                <SettingsOutlined className="sidebar-icon" />
              )}
            </SC.navLink>
          </Link>
        </ul>
      </div>
    </SC.nav>
  );
}
