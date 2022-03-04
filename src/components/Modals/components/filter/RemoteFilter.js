/* eslint-disable react/jsx-pascal-case */
import React from "react";
import SC from "../../../../themes/StyledComponents";

export default function RemoteFilter({ filter, setFilter }) {
  return (
    <div className="job-input-container-w-radio">
      <span className="input-label filter">Remote</span>
      <div className="center-content">
        <SC.jobRadioContainer className="job-radio-container">
          <SC.subtextOnBgColor>Filter for a remote of:</SC.subtextOnBgColor>
          <div className="job-radio-buttons-container">
            {/* YES */}
            <div className="job-radio-wrapper">
              <SC.jobFormRadioLabel
                htmlFor="remote-yes"
                className={`job-radio-label ${filter === "yes"}`}
              >
                yes
              </SC.jobFormRadioLabel>
              <input
                type="radio"
                name="remote"
                id="remote-yes"
                className="job-radio-input"
                onChange={() => setFilter("yes")}
              />
            </div>
            {/* NO */}
            <div className="job-radio-wrapper">
              <SC.jobFormRadioLabel
                htmlFor="remote-no"
                className={`job-radio-label ${filter === "no"}`}
              >
                no
              </SC.jobFormRadioLabel>
              <input
                type="radio"
                name="remote"
                id="remote-no"
                className="job-radio-input"
                onChange={() => setFilter("no")}
              />
            </div>
            {/* N/A */}
            <div className="job-radio-wrapper">
              <SC.jobFormRadioLabel
                htmlFor="remote-na"
                className={`job-radio-label ${filter === "n/a"}`}
              >
                n/a
              </SC.jobFormRadioLabel>
              <input
                type="radio"
                name="remote"
                id="remote-na"
                className="job-radio-input"
                onChange={() => setFilter("n/a")}
              />
            </div>
          </div>
        </SC.jobRadioContainer>
      </div>
    </div>
  );
}
