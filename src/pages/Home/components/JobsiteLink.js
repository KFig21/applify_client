/* eslint-disable react/jsx-pascal-case */
import React from "react";
import SC from "../../../themes/StyledComponents";

export default function JobsiteLink({ site }) {
  return (
    <SC.jobSiteContainer className="jobsite-container">
      <a href={site.link} target="_blank" rel="noopener noreferrer">
        <div className="jobsite-img-container">
          <img src={site.img} alt="" />
        </div>
        <span className="jobsite-name">{site.name}</span>
      </a>
    </SC.jobSiteContainer>
  );
}
