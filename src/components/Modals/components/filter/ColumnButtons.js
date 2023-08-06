/* eslint-disable react/jsx-pascal-case */
import React from "react";
import SC from "../../../../themes/StyledComponents";

export default function ColumnButtons({ filterCol, handleChangeCol }) {
  return (
    <div className="job-input-container ">
      <span className="input-label filter">Column </span>
      <div className="job-radio-container">
        <div className="job-radio-buttons-container filter">
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="filterCol-status"
              className={`job-radio-label ${filterCol === "status"}`}
            >
              status
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="filterCol"
              id="filterCol-status"
              className="job-radio-input"
              onChange={() => handleChangeCol("status")}
            />
          </div>
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="filterCol-result"
              className={`job-radio-label ${filterCol === "result"}`}
            >
              result
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="filterCol"
              id="filterCol-result"
              className="job-radio-input"
              onChange={() => handleChangeCol("result")}
            />
          </div>
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="filterCol-remote"
              className={`job-radio-label ${filterCol === "remote"}`}
            >
              remote
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="filterCol"
              id="filterCol-remote"
              className="job-radio-input"
              onChange={() => handleChangeCol("remote")}
            />
          </div>
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="filterCol-type"
              className={`job-radio-label ${filterCol === "jobtype"}`}
            >
              type
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="filterCol"
              id="filterCol-type"
              className="job-radio-input"
              onChange={() => handleChangeCol("jobtype")}
            />
          </div>
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="filterCol-applied"
              className={`job-radio-label ${filterCol === "applied"}`}
            >
              applied
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="filterCol"
              id="filterCol-applied"
              className="job-radio-input"
              onChange={() => handleChangeCol("applied")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
