/* eslint-disable react/jsx-pascal-case */
import React from "react";
import SC from "../../../../themes/StyledComponents";

export default function StatusInput({ status, setStatus }) {
  return (
    <div className="job-input-container-w-radio">
      <span className="input-label">Status</span>
      <SC.jobRadioContainer className="job-radio-container">
        <SC.subtextOnBgColor>
          furthest progression of the application:
        </SC.subtextOnBgColor>
        <div className="job-radio-buttons-container">
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="status-waiting"
              className={`job-radio-label waiting ${status === "waiting"}`}
            >
              waiting
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="status"
              id="status-waiting"
              className="job-radio-input"
              onChange={() => setStatus("waiting")}
            />
          </div>
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="status-applied"
              className={`job-radio-label applied ${status === "applied"}`}
            >
              applied
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="status"
              id="status-applied"
              className="job-radio-input"
              onChange={() => setStatus("applied")}
            />
          </div>
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="status-viewed"
              className={`job-radio-label viewed ${status === "viewed"}`}
            >
              viewed
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="status"
              id="status-viewed"
              className="job-radio-input"
              onChange={() => setStatus("viewed")}
            />
          </div>
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="status-interviewed"
              className={`job-radio-label interviewed ${
                status === "interviewed"
              }`}
            >
              interviewed
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="status"
              id="status-interviewed"
              className="job-radio-input"
              onChange={() => setStatus("interviewed")}
            />
          </div>
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="status-offered"
              className={`job-radio-label offered ${status === "offered"}`}
            >
              offered
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="status"
              id="status-offered"
              className="job-radio-input"
              onChange={() => setStatus("offered")}
            />
          </div>
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="status-accepted"
              className={`job-radio-label accepted ${status === "accepted"}`}
            >
              accepted
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="status"
              id="status-accepted"
              className="job-radio-input"
              onChange={() => setStatus("accepted")}
            />
          </div>
          {/* <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="status-rejected"
              className={`job-radio-label rejected ${status === "rejected"}`}
            >
              rejected
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="status"
              id="status-rejected"
              className="job-radio-input"
              onChange={() => setStatus("rejected")}
            />
          </div>
          <div className="job-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="status-closed"
              className={`job-radio-label closed ${status === "closed"}`}
            >
              closed
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="status"
              id="status-closed"
              className="job-radio-input"
              onChange={() => setStatus("closed")}
            />
          </div> */}
        </div>
      </SC.jobRadioContainer>
    </div>
  );
}
