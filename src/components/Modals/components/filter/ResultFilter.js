/* eslint-disable react/jsx-pascal-case */
import React from "react";
import SC from "../../../../themes/StyledComponents";

export default function ResultFilter({ filter, setFilter }) {
  return (
    <div className="job-input-container-w-radio">
      <span className="input-label filter">Result</span>
      <div className="center-content">
        <SC.jobRadioContainer className="job-radio-container">
          <SC.subtextOnBgColor>Filter for a result of:</SC.subtextOnBgColor>
          <div className="job-radio-buttons-container">
            {/* WAITING */}
            <div className="job-radio-wrapper">
              <SC.jobFormRadioLabel
                htmlFor="result-waiting"
                className={`job-radio-label waiting ${filter === "waiting"}`}
              >
                waiting
              </SC.jobFormRadioLabel>
              <input
                type="radio"
                name="result"
                id="result-waiting"
                className="job-radio-input"
                onChange={() => setFilter("waiting")}
              />
            </div>
            {/* PASSED */}
            <div className="job-radio-wrapper">
              <SC.jobFormRadioLabel
                htmlFor="result-passed"
                className={`job-radio-label passed ${filter === "passed"}`}
              >
                passed
              </SC.jobFormRadioLabel>
              <input
                type="radio"
                name="result"
                id="result-passed"
                className="job-radio-input"
                onChange={() => setFilter("passed")}
              />
            </div>
            {/* ACCEPTED */}
            <div className="job-radio-wrapper">
              <SC.jobFormRadioLabel
                htmlFor="result-accepted"
                className={`job-radio-label accepted ${filter === "accepted"}`}
              >
                accepted
              </SC.jobFormRadioLabel>
              <input
                type="radio"
                name="result"
                id="result-accepted"
                className="job-radio-input"
                onChange={() => setFilter("accepted")}
              />
            </div>
            {/* REJECTED */}
            <div className="job-radio-wrapper">
              <SC.jobFormRadioLabel
                htmlFor="result-rejected"
                className={`job-radio-label rejected ${filter === "rejected"}`}
              >
                rejected
              </SC.jobFormRadioLabel>
              <input
                type="radio"
                name="result"
                id="result-rejected"
                className="job-radio-input"
                onChange={() => setFilter("rejected")}
              />
            </div>
            {/* CLOSED */}
            <div className="job-radio-wrapper">
              <SC.jobFormRadioLabel
                htmlFor="result-closed"
                className={`job-radio-label closed ${filter === "closed"}`}
              >
                closed
              </SC.jobFormRadioLabel>
              <input
                type="radio"
                name="result"
                id="result-closed"
                className="job-radio-input"
                onChange={() => setFilter("closed")}
              />
            </div>
          </div>
        </SC.jobRadioContainer>
      </div>
    </div>
  );
}
