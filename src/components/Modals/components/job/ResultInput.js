/* eslint-disable react/jsx-pascal-case */
import React from "react";
import SC from "../../../../themes/StyledComponents";

export default function ResultInput({ result, setResult }) {
  return (
    <div className="job-input-container-w-radio">
      <span className="input-label mobile-mb">Result</span>
      <SC.jobRadioContainer className="job-radio-container">
        <SC.subtextOnBgColor>
          end result of the application:
        </SC.subtextOnBgColor>
        {/* WAITING */}
        <div className="job-radio-buttons-container">
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="result-waiting"
              className={`job-radio-label waiting ${result === "waiting"}`}
            >
              waiting
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="result"
              id="result-waiting"
              className="job-radio-input"
              onChange={() => setResult("waiting")}
            />
          </div>
          {/* PASSED */}
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="result-passed"
              className={`job-radio-label passed ${result === "passed"}`}
            >
              passed
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="result"
              id="result-passed"
              className="job-radio-input"
              onChange={() => setResult("passed")}
            />
          </div>
          {/* ACCEPTED */}
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="result-accepted"
              className={`job-radio-label accepted ${result === "accepted"}`}
            >
              accepted
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="result"
              id="result-accepted"
              className="job-radio-input"
              onChange={() => setResult("accepted")}
            />
          </div>
          {/* REJECTED */}
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="result-rejected"
              className={`job-radio-label rejected ${result === "rejected"}`}
            >
              rejected
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="result"
              id="result-rejected"
              className="job-radio-input"
              onChange={() => setResult("rejected")}
            />
          </div>
          {/* CLOSED */}
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="result-closed"
              className={`job-radio-label closed ${result === "closed"}`}
            >
              closed
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="result"
              id="result-closed"
              className="job-radio-input"
              onChange={() => setResult("closed")}
            />
          </div>
        </div>
      </SC.jobRadioContainer>
    </div>
  );
}
