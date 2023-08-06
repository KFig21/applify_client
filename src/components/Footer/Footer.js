/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./Footer.scss";
import { GitHub } from "@material-ui/icons";
import KF from "./KF";
import SC from "../../themes/StyledComponents";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <SC.footerContent>
          <KF />
          <SC.MadeBy className="made-by">Made by KFig21</SC.MadeBy>
          <SC.GitHubA
            href="https://github.com/KFig21/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub className="footer-icon" />
          </SC.GitHubA>
        </SC.footerContent>
      </div>
    </div>
  );
}
