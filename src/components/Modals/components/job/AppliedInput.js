import React from "react";
import SC from "../../../../themes/StyledComponents";

export default function AppliedInput({ applied, setApplied }) {
  return (
    <div className="job-input-container">
      <span className="input-label">Applied</span>
      <div className="job-radio-container">
        <div className="job-radio-buttons-container">
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="applied-yes"
              className={`job-radio-label ${applied}`}
            >
              yes
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="applied"
              id="applied-yes"
              className="job-radio-input"
              onChange={() => setApplied(true)}
              checked={applied}
            />
          </div>
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="applied-no"
              className={`job-radio-label ${!applied}`}
            >
              no
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="applied"
              id="applied-no"
              className="job-radio-input"
              onChange={() => setApplied(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
