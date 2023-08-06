/* eslint-disable react/jsx-pascal-case */
import React from "react";
import SC from "../../../../../themes/StyledComponents";

export default function PayTypeInput({ payType, setPayType }) {
  return (
    <>
      <SC.subtextOnBgColor>pay type:</SC.subtextOnBgColor>
      <div className="job-radio-buttons-container">
        {/* SALARY */}
        <div className="job-radio-wrapper">
          <SC.jobFormRadioLabel
            htmlFor="payType-salary"
            className={`job-radio-label ${payType === "salary"}`}
          >
            salary
          </SC.jobFormRadioLabel>
          <input
            type="radio"
            name="payType"
            id="payType-salary"
            className="job-radio-input"
            onChange={() => setPayType("salary")}
          />
        </div>
        {/* PASSED */}
        <div className="job-radio-wrapper">
          <SC.jobFormRadioLabel
            htmlFor="payType-hourly"
            className={`job-radio-label ${payType === "hourly"}`}
          >
            hourly
          </SC.jobFormRadioLabel>
          <input
            type="radio"
            name="payType"
            id="payType-hourly"
            className="job-radio-input"
            onChange={() => setPayType("hourly")}
          />
        </div>
        {/* N/A */}
        <div className="job-radio-wrapper">
          <SC.jobFormRadioLabel
            htmlFor="payType-na"
            className={`job-radio-label ${payType === "na"}`}
          >
            n/a
          </SC.jobFormRadioLabel>
          <input
            type="radio"
            name="payType"
            id="payType-na"
            className="job-radio-input"
            onChange={() => setPayType("na")}
          />
        </div>
      </div>
    </>
  );
}
