/* eslint-disable react/jsx-pascal-case */
import React from "react";
import SC from "../../themes/StyledComponents";
import { StarOutlineRounded, Star } from "@material-ui/icons";
import "../Board/Board.scss";

export default function Job({ job, setEditJobModal, setJobToEdit, key }) {
  const formatAppDate = (date) => {
    let arr = date.split("-");
    let formattedDate = arr[1] + "/" + arr[2] + "/" + arr[0];
    return formattedDate;
  };

  const handleEditJob = () => {
    setJobToEdit(job);
    setEditJobModal(true);
  };

  return (
    <SC.tableBorderColorTR
      className="board-job-row"
      onClick={() => handleEditJob()}
      key={key}
    >
      {/* FAVORITE */}
      <td className="board-job-cell">
        {job.favorite ? (
          <SC.primaryColorText className="icon-container">
            <Star className="favorite-icon" />
          </SC.primaryColorText>
        ) : (
          <SC.primaryColorText className="icon-container">
            <StarOutlineRounded className="favorite-icon" />
          </SC.primaryColorText>
        )}
      </td>
      {/* COMPANY */}
      <td className="board-job-cell min100">
        <SC.textOnBgColor>{job.company}</SC.textOnBgColor>
      </td>
      {/* POSITION */}
      <SC.tableFreezeCol className="board-job-cell">
        <SC.textOnBgColor>{job.position}</SC.textOnBgColor>
      </SC.tableFreezeCol>
      {/* APPLIED */}
      <td className="board-job-cell center">
        <SC.booleanColorText className={job.applied ? "true" : "false"}>
          {job.applied ? "Y" : "N"}
        </SC.booleanColorText>
      </td>
      {/* APPDATE */}
      <td className="board-job-cell ">
        <SC.textOnBgColor>
          {job.appDate !== "-" && job.appDate !== ""
            ? formatAppDate(job.appDate)
            : ""}
        </SC.textOnBgColor>
      </td>
      {/* CITY */}
      <td className="board-job-cell">
        <SC.textOnBgColor>{job.city}</SC.textOnBgColor>
      </td>
      {/* STATE */}
      <td className="board-job-cell center">
        <SC.textOnBgColor>{job.locationState}</SC.textOnBgColor>
      </td>
      {/* REMOTE */}
      <td className="board-job-cell  center">
        <SC.booleanColorText
          className={
            job.remote === "yes" ? "true" : job.remote === "no" ? "false" : "na"
          }
        >
          {job.remote === "yes" ? "Y" : job.remote === "no" ? "N" : "N/A"}
        </SC.booleanColorText>
      </td>
      {/* STATUS */}
      <td className="board-job-cell center min80">
        <div className={`job-status-res-container ${job.status}`}>
          <span className={`job-status-res ${job.status}`}>{job.status}</span>
        </div>
      </td>
      {/* RESULT */}
      <td className="board-job-cell center min80">
        <div className={`job-status-res-container ${job.result}`}>
          <span className={`job-status-res result ${job.result}`}>
            {job.result}
          </span>
        </div>
      </td>
      {/* TYPE */}
      <td className="board-job-cell">
        <SC.textOnBgColor>
          {job.jobtype === "full"
            ? "Full-Time"
            : job.jobtype === "part"
            ? "Part-Time"
            : job.jobtype === "contract"
            ? "Contract"
            : "N/A"}
        </SC.textOnBgColor>
      </td>
      {/* JOBSITE */}
      <td className="board-job-cell">
        <SC.textOnBgColor>{job.jobsite}</SC.textOnBgColor>
      </td>
      {/* LINK */}
      <td className="board-job-cell">
        <SC.listingLink
          className="listing-link"
          href={job.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Listing
        </SC.listingLink>
      </td>
      {/* PAY */}
      <td className="board-job-cell">
        {job.payScale === "amount" ? (
          <SC.textOnBgColor>
            ${job.pay.toLocaleString()}
            {job.payType === "salary" ? "/yr" : "/hr"}
          </SC.textOnBgColor>
        ) : job.payScale === "range" ? (
          <SC.textOnBgColor>
            ${job.payMin.toLocaleString()} to ${job.payMax.toLocaleString()}
            {job.payType === "salary" ? "/yr" : "/hr"}
          </SC.textOnBgColor>
        ) : (
          "N/A"
        )}
      </td>
    </SC.tableBorderColorTR>
  );
}
