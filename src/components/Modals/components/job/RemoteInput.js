/* eslint-disable react/jsx-pascal-case */
import React from "react";
import SC from "../../../../themes/StyledComponents";

export default function RemoteInput({ remote, setRemote }) {
  return (
    <div className="job-input-container">
      <span className="input-label">Remote</span>
      <div className="job-radio-container">
        <div className="job-radio-buttons-container">
          {/* YES */}
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="remote-yes"
              className={`job-radio-label ${remote === "yes"}`}
            >
              yes
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="remote"
              id="remote-yes"
              className="job-radio-input"
              onChange={() => setRemote("yes")}
            />
          </div>
          {/* NO */}
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="remote-no"
              className={`job-radio-label ${remote === "no"}`}
            >
              no
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="remote"
              id="remote-no"
              className="job-radio-input"
              onChange={() => setRemote("no")}
            />
          </div>
          {/* N/A */}
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="remote-na"
              className={`job-radio-label ${remote === "n/a"}`}
            >
              n/a
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="remote"
              id="remote-na"
              className="job-radio-input"
              onChange={() => setRemote("n/a")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
