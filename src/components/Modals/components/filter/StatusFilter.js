/* eslint-disable react/jsx-pascal-case */
import React from "react";
import SC from "../../../../themes/StyledComponents";

export default function StatusFilter({ filter, setFilter }) {
  return (
    <div className="job-input-container-w-radio">
      <span className="input-label filter">Status</span>
      <div className="center-content">
        <SC.jobRadioContainer className="job-radio-container">
          <SC.subtextOnBgColor>Filter for a status of:</SC.subtextOnBgColor>
          <div className="job-radio-buttons-container">
            {/* WAITING */}
            <div className="job-radio-wrapper">
              <SC.jobFormRadioLabel
                htmlFor="status-waiting"
                className={`job-radio-label waiting ${filter === "waiting"}`}
              >
                waiting
              </SC.jobFormRadioLabel>
              <input
                type="radio"
                name="status"
                id="status-waiting"
                className="job-radio-input"
                onChange={() => setFilter("waiting")}
              />
            </div>
            {/* VIEWED */}
            <div className="job-radio-wrapper">
              <SC.jobFormRadioLabel
                htmlFor="status-viewed"
                className={`job-radio-label viewed ${filter === "viewed"}`}
              >
                viewed
              </SC.jobFormRadioLabel>
              <input
                type="radio"
                name="status"
                id="status-viewed"
                className="job-radio-input"
                onChange={() => setFilter("viewed")}
              />
            </div>
            {/* INTERVIEWED */}
            <div className="job-radio-wrapper">
              <SC.jobFormRadioLabel
                htmlFor="status-interviewed"
                className={`job-radio-label interviewed ${
                  filter === "interviewed"
                }`}
              >
                interviewed
              </SC.jobFormRadioLabel>
              <input
                type="radio"
                name="status"
                id="status-interviewed"
                className="job-radio-input"
                onChange={() => setFilter("interviewed")}
              />
            </div>
            {/* OFFERED */}
            <div className="job-radio-wrapper">
              <SC.jobFormRadioLabel
                htmlFor="status-offered"
                className={`job-radio-label offered ${filter === "offered"}`}
              >
                offered
              </SC.jobFormRadioLabel>
              <input
                type="radio"
                name="status"
                id="status-offered"
                className="job-radio-input"
                onChange={() => setFilter("offered")}
              />
            </div>
            {/* ACCEPTED */}
            <div className="job-radio-wrapper">
              <SC.jobFormRadioLabel
                htmlFor="status-accepted"
                className={`job-radio-label accepted ${filter === "accepted"}`}
              >
                accepted
              </SC.jobFormRadioLabel>
              <input
                type="radio"
                name="status"
                id="status-accepted"
                className="job-radio-input"
                onChange={() => setFilter("accepted")}
              />
            </div>
            {/* REJECTED */}
            <div className="job-radio-wrapper">
              <SC.jobFormRadioLabel
                htmlFor="status-rejected"
                className={`job-radio-label rejected ${filter === "rejected"}`}
              >
                rejected
              </SC.jobFormRadioLabel>
              <input
                type="radio"
                name="status"
                id="status-rejected"
                className="job-radio-input"
                onChange={() => setFilter("rejected")}
              />
            </div>
            {/* CLOSED */}
            <div className="job-radio-wrapper">
              <SC.jobFormRadioLabel
                htmlFor="status-closed"
                className={`job-radio-label closed ${filter === "closed"}`}
              >
                closed
              </SC.jobFormRadioLabel>
              <input
                type="radio"
                name="status"
                id="status-closed"
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
