/* eslint-disable react/jsx-pascal-case */
import React from "react";
import SC from "../../../../themes/StyledComponents";

export default function TypeFilter({ filter, setFilter }) {
  return (
    <div className="job-input-container-w-radio">
      <span className="input-label filter">Job Type</span>
      <div className="center-content">
        <SC.jobRadioContainer className="job-radio-container">
          <SC.subtextOnBgColor>Filter for a job type of:</SC.subtextOnBgColor>
          <div className="job-radio-buttons-container">
            {/* FULL TIME */}
            <div className="job-radio-wrapper">
              <SC.jobFormRadioLabel
                htmlFor="type-full"
                className={`job-radio-label ${filter === "full"}`}
              >
                full-time
              </SC.jobFormRadioLabel>
              <input
                type="radio"
                name="type"
                id="type-full"
                className="job-radio-input"
                onChange={() => setFilter("full")}
              />
            </div>
            {/* PART TIME */}
            <div className="job-radio-wrapper">
              <SC.jobFormRadioLabel
                htmlFor="type-part"
                className={`job-radio-label ${filter === "part"}`}
              >
                part-time
              </SC.jobFormRadioLabel>
              <input
                type="radio"
                name="type"
                id="type-part"
                className="job-radio-input"
                onChange={() => setFilter("part")}
              />
            </div>
            {/* CONTRACT */}
            <div className="job-radio-wrapper">
              <SC.jobFormRadioLabel
                htmlFor="type-contract"
                className={`job-radio-label ${filter === "contract"}`}
              >
                contract
              </SC.jobFormRadioLabel>
              <input
                type="radio"
                name="type"
                id="type-contract"
                className="job-radio-input"
                onChange={() => setFilter("contract")}
              />
            </div>
            {/* N/A */}
            <div className="job-radio-wrapper">
              <SC.jobFormRadioLabel
                htmlFor="type-na"
                className={`job-radio-label ${filter === "na"}`}
              >
                n/a
              </SC.jobFormRadioLabel>
              <input
                type="radio"
                name="type"
                id="type-na"
                className="job-radio-input"
                onChange={() => setFilter("na")}
              />
            </div>
          </div>
        </SC.jobRadioContainer>
      </div>
    </div>
  );
}
