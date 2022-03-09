/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SC from "../../themes/StyledComponents";

import "./Modal.scss";
import { StarOutlineRounded, Star } from "@material-ui/icons";
import CloseIcon from "@mui/icons-material/Close";
import { favJob } from "../../helpers/Api";
import { closeAnimation } from "./HelperFunctions";

export default function ViewJobModal({ setViewJobModal, job }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const [isFav, setIsFav] = useState(false);
  let jobRes = job.result === "waiting" ? "unresolved" : "resolved";

  // get favorite status
  useEffect(() => {
    setIsFav(job.favorite);
  }, [job]);

  const formatAppDate = (date) => {
    if (date !== undefined) {
      let arr = date.split("-");
      let formattedDate = arr[1] + "/" + arr[2] + "/" + arr[0];
      return formattedDate;
    }
  };

  // toggle fav
  const favHandler = () => {
    try {
      favJob(job._id);
    } catch (err) {}
    setIsFav(!isFav);
    job.favorite = !job.favorite;
  };

  // modal animation
  const [animation, setAnimation] = useState(true);

  const handleCloseAnimation = () => {
    setAnimation(false);
    closeAnimation(setViewJobModal);
  };

  return (
    <div className={"modal-wrapper " + (animation ? "in" : "out")}>
      <SC.jobFormContainer
        className={"modal-container view " + (animation ? "in" : "out")}
      >
        <SC.modalTitleContainer className="view-modal-title-container">
          <SC.closeModal
            className="close"
            onClick={() => handleCloseAnimation()}
          >
            <CloseIcon className="close-icon" />
          </SC.closeModal>
          <SC.viewPositionAndJob className="modal-view-title">
            {isFav ? (
              <SC.favIcon
                className="icon-container"
                onClick={() => favHandler()}
              >
                <Star className="favorite-icon" />
              </SC.favIcon>
            ) : (
              <SC.favIcon
                className="icon-container outline"
                onClick={() => favHandler()}
              >
                <StarOutlineRounded className="favorite-icon" />
              </SC.favIcon>
            )}
            <div className="modal-title-company-and-title">
              {/* POSITION */}
              <SC.viewJobPosition className="company-name">
                {job.position}
              </SC.viewJobPosition>
              {/* COMPANY */}
              <SC.viewJobCompany className="position-name">
                {job.company}
              </SC.viewJobCompany>
            </div>
          </SC.viewPositionAndJob>
          <SC.modalTitleBoxShadow>⠀</SC.modalTitleBoxShadow>
        </SC.modalTitleContainer>
        <div className="modal-view-container">
          <div className="view-details">
            {/* LOCATION */}
            <SC.viewGrid className="view-location">
              <SC.subtextOnBgColor>Location:</SC.subtextOnBgColor>
              <SC.textOnBgColor>
                {job.city}, {job.locationState}
              </SC.textOnBgColor>
            </SC.viewGrid>
            {/* REMOTE */}
            <SC.viewGrid className="view-location">
              <SC.subtextOnBgColor>Remote:</SC.subtextOnBgColor>
              <SC.booleanColorText
                className={
                  job.remote === "yes"
                    ? "true"
                    : job.remote === "no"
                    ? "false"
                    : "na"
                }
              >
                {job.remote === "yes" ? "Y" : job.remote === "no" ? "N" : "N/A"}
              </SC.booleanColorText>
            </SC.viewGrid>
            {/* APPLIED */}
            <SC.viewGrid className="view-location">
              <SC.subtextOnBgColor>Applied:</SC.subtextOnBgColor>
              <SC.textOnBgColor>
                {job.applied ? formatAppDate(job.appDate) : job.applied}
              </SC.textOnBgColor>
            </SC.viewGrid>
            {/* STATUS */}
            <SC.viewGrid className="view-location">
              <SC.subtextOnBgColor>Status:</SC.subtextOnBgColor>
              <SC.ST_cell_status className="board-job-cell view min80">
                <div
                  className={`job-status-res-container view ${job.status} ${jobRes}`}
                >
                  <span
                    className={`job-status-res status ${job.status} ${jobRes}`}
                  >
                    {job.status}
                  </span>
                </div>
              </SC.ST_cell_status>
            </SC.viewGrid>
            {/* RESULT */}
            <SC.viewGrid className="view-location">
              <SC.subtextOnBgColor>Result:</SC.subtextOnBgColor>
              <SC.ST_cell_status className="board-job-cell view min80">
                <div className={`job-status-res-container view ${job.result}`}>
                  <span className={`job-status-res result ${job.result}`}>
                    {job.result}
                  </span>
                </div>
              </SC.ST_cell_status>
            </SC.viewGrid>
            {/* TYPE */}
            <SC.viewGrid className="view-location">
              <SC.subtextOnBgColor>Type:</SC.subtextOnBgColor>
              <SC.textOnBgColor>
                {job.jobtype === "full"
                  ? "Full-Time"
                  : job.jobtype === "part"
                  ? "Part-Time"
                  : job.jobtype === "contract"
                  ? "Contract"
                  : "N/A"}
              </SC.textOnBgColor>
            </SC.viewGrid>
            {/* SITE */}

            {/* LINK */}
            <SC.viewGrid className="view-location">
              <SC.subtextOnBgColor>Listing:</SC.subtextOnBgColor>
              <SC.listingLink
                className="listing-link view"
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {job.jobsite ? job.jobsite : "Link"}
              </SC.listingLink>
            </SC.viewGrid>
            {/* USERNAME */}
            {job.username && (
              <SC.viewGrid className="view-location">
                <SC.subtextOnBgColor>Username:</SC.subtextOnBgColor>
                <SC.textOnBgColor>{job.username}</SC.textOnBgColor>
              </SC.viewGrid>
            )}
            {/* PASSWORD */}
            {job.password && (
              <SC.viewGrid className="view-location">
                <SC.subtextOnBgColor>Password:</SC.subtextOnBgColor>
                <SC.textOnBgColor>{job.password}</SC.textOnBgColor>
              </SC.viewGrid>
            )}
            {/* PAY */}
            <SC.viewGrid className="view-location">
              <SC.subtextOnBgColor>Pay:</SC.subtextOnBgColor>
              <SC.textOnBgColor>
                {job.payScale === "amount" ? (
                  <SC.textOnBgColor>
                    ${job.pay.toLocaleString()}
                    {job.payType === "salary" ? "/yr" : "/hr"}
                  </SC.textOnBgColor>
                ) : job.payScale === "range" ? (
                  <SC.textOnBgColor>
                    ${job.payMin.toLocaleString()} to $
                    {job.payMax.toLocaleString()}
                    {job.payType === "salary" ? "/yr" : "/hr"}
                  </SC.textOnBgColor>
                ) : (
                  "N/A"
                )}
              </SC.textOnBgColor>
            </SC.viewGrid>
            {/* NOTES */}
            {job.notes && (
              <SC.viewGrid className="view-location notes">
                <SC.subtextOnBgColor>Notes:</SC.subtextOnBgColor>
                <SC.textOnBgColor className="view-notes">
                  {job.notes}
                </SC.textOnBgColor>
              </SC.viewGrid>
            )}
          </div>
        </div>
      </SC.jobFormContainer>
      <SC.modalBackground
        className={"modal-background " + (animation ? "in" : "out")}
        onClick={() => handleCloseAnimation()}
      ></SC.modalBackground>
    </div>
  );
}
