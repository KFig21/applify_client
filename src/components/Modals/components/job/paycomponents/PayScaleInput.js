/* eslint-disable react/jsx-pascal-case */
import React from "react";
import SC from "../../../../../themes/StyledComponents";

export default function PayScaleInput({ payScale, setPayScale }) {
  return (
    <>
      <SC.subtextOnBgColor>pay scale:</SC.subtextOnBgColor>
      <div className="job-radio-buttons-container">
        {/* AMOUNT */}
        <div className="job-radio-wrapper">
          <SC.jobFormRadioLabel
            htmlFor="payScale-amount"
            className={`job-radio-label ${payScale === "amount"}`}
          >
            amount
          </SC.jobFormRadioLabel>
          <input
            type="radio"
            name="payScale"
            id="payScale-amount"
            className="job-radio-input"
            onChange={() => setPayScale("amount")}
          />
        </div>
        {/* RANGE */}
        <div className="job-radio-wrapper">
          <SC.jobFormRadioLabel
            htmlFor="payScale-range"
            className={`job-radio-label ${payScale === "range"}`}
          >
            range
          </SC.jobFormRadioLabel>
          <input
            type="radio"
            name="payScale"
            id="payScale-range"
            className="job-radio-input"
            onChange={() => setPayScale("range")}
          />
        </div>
        {/* N/A */}
        <div className="job-radio-wrapper">
          <SC.jobFormRadioLabel
            htmlFor="payScale-na"
            className={`job-radio-label ${payScale === "na"}`}
          >
            n/a
          </SC.jobFormRadioLabel>
          <input
            type="radio"
            name="payScale"
            id="payScale-na"
            className="job-radio-input"
            onChange={() => setPayScale("na")}
          />
        </div>
      </div>
    </>
  );
}
