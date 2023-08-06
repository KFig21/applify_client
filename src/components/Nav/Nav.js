/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SC from "../../themes/StyledComponents";
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

export default function Nav({ currentPage }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const [boards, setBoards] = useState([]);

  const fetchBoards = async () => {
    setBoards(await getBoards(state._id));
  };

  useEffect(() => {
    fetchBoards();
  }, [state]);

  return (
    <SC.nav className="nav">
      <div className="nav-list-container">
        <SC.navLogoText className="navbar-logo-text">Applify</SC.navLogoText>
        <ul className="nav-list">
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
