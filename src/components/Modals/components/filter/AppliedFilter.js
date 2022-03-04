/* eslint-disable react/jsx-pascal-case */
import React from "react";
import SC from "../../../../themes/StyledComponents";

export default function AppliedFilter({ filter, setFilter }) {
  return (
    <div className="job-input-container-w-radio">
      <span className="input-label filter">Applied</span>
      <div className="center-content">
        <SC.jobRadioContainer className="job-radio-container">
          <SC.subtextOnBgColor>
            Filter for applied status of:
          </SC.subtextOnBgColor>
          <div className="job-radio-buttons-container">
            {/* YES */}
            <div className="job-radio-wrapper">
              <SC.jobFormRadioLabel
                htmlFor="applied-yes"
                className={`job-radio-label ${filter === "true"}`}
              >
                yes
              </SC.jobFormRadioLabel>
              <input
                type="radio"
                name="applied"
                id="applied-yes"
                className="job-radio-input"
                onChange={() => setFilter("true")}
              />
            </div>
            {/* NO */}
            <div className="job-radio-wrapper">
              <SC.jobFormRadioLabel
                htmlFor="applied-no"
                className={`job-radio-label ${filter === "false"}`}
              >
                no
              </SC.jobFormRadioLabel>
              <input
                type="radio"
                name="applied"
                id="applied-no"
                className="job-radio-input"
                onChange={() => setFilter("false")}
              />
            </div>
          </div>
        </SC.jobRadioContainer>
      </div>
    </div>
  );
}
