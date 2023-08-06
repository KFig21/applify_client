/* eslint-disable react/jsx-pascal-case */
import React from "react";
import SC from "../../../../themes/StyledComponents";

export default function JobtypeInput({ jobtype, setJobtype }) {
  return (
    <div className="job-input-container">
      <span className="input-label">Job type</span>
      <div className="job-radio-container">
        <div className="job-radio-buttons-container">
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="jobtype-full"
              className={`job-radio-label ${jobtype === "full"}`}
            >
              full-time
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="jobtype"
              id="jobtype-full"
              className="job-radio-input"
              onChange={() => setJobtype("full")}
            />
          </div>
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="jobtype-part"
              className={`job-radio-label ${jobtype === "part"}`}
            >
              part-time
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="jobtype"
              id="jobtype-part"
              className="job-radio-input"
              onChange={() => setJobtype("part")}
            />
          </div>
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="jobtype-contract"
              className={`job-radio-label ${jobtype === "contract"}`}
            >
              contract
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="jobtype"
              id="jobtype-contract"
              className="job-radio-input"
              onChange={() => setJobtype("contract")}
            />
          </div>
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="jobtype-na"
              className={`job-radio-label ${jobtype === "n/a"}`}
            >
              n/a
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="jobtype"
              id="jobtype-na"
              className="job-radio-input"
              onChange={() => setJobtype("n/a")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
