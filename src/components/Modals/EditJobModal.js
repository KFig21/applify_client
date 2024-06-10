/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteJob, editJob } from "../../store/actions/jobActions";
import SC from "../../themes/StyledComponents";
import AppliedInput from "./components/job/AppliedInput";
import JobtypeInput from "./components/job/JobtypeInput";
import PayInput from "./components/job/PayInput";
import RemoteInput from "./components/job/RemoteInput";
import ResultInput from "./components/job/ResultInput";
import StatusInput from "./components/job/StatusInput";
import "./Modal.scss";
import { Create, StarOutlineRounded, Star } from "@material-ui/icons";
import { favJob } from "../../helpers/Api";
import { closeAnimation } from "./HelperFunctions";
import axios from "axios";
import { url } from "../../helpers/Api";

export default function EditJobModal({ cell, stickyBG, col, job, board }) {
  const [isValid, setIsValid] = useState(false);
  const [errorHandler, setErrorHandler] = useState({
    error: false,
    message: "",
  });
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  // FORM HOOKS
  const [company, setCompany] = useState(job.company);
  const [position, setPosition] = useState(job.position);
  const [applied, setApplied] = useState(job.applied);
  const [appDate, setAppDate] = useState(job.appDate);
  const [city, setCity] = useState(job.city);
  const [locationState, setLocationState] = useState(job.locationState);
  const [remote, setRemote] = useState(job.remote);
  const [status, setStatus] = useState(job.status);
  const [result, setResult] = useState(job.result);
  const [jobtype, setJobtype] = useState(job.jobtype);
  const [jobsite, setJobsite] = useState(job.jobsite);
  const [username, setUsername] = useState(job.username);
  const [password, setPassword] = useState(job.password);
  const [link, setLink] = useState(job.link);
  const [payType, setPayType] = useState(job.payType);
  const [payScale, setPayScale] = useState(job.payScale);
  const [payMin, setPayMin] = useState(job.payMin);
  const [payMax, setPayMax] = useState(job.payMax);
  const [pay, setPay] = useState(job.pay);
  const [notes, setNotes] = useState(job.notes);
  const [favorite, setFavorite] = useState(job.favorite);
  const [isFav, setIsFav] = useState(false);
  // Modal
  const [showModal, setShowModal] = useState(false);

  // get favorite status
  useEffect(() => {
    setIsFav(job.favorite);
  }, [job]);

  // toggle fav
  const favHandler = () => {
    try {
      favJob(job._id);
    } catch (err) {}
    setIsFav(!isFav);
    job.favorite = !job.favorite;
  };

  const handleEditJob = () => {
    try {
      const editJobData = async () => {
        try {
          await axios
            .put(`${url}/jobs/edit`, {
              user: state._id,
              job: job._id,
              board: board._id,
              company: company,
              position: position,
              applied: applied,
              appDate: appDate,
              city: city,
              locationState: locationState,
              remote: remote,
              status: status,
              result: result,
              jobtype: jobtype,
              jobsite: jobsite,
              username: username,
              password: password,
              link: link,
              payType: payType,
              payScale: payScale,
              payMin: payMin,
              payMax: payMax,
              pay: pay,
              notes: notes,
              favorite: favorite,
            })
            .then(() => {
              setErrorHandler({ error: false, message: "" });
              setShowModal(false);
              window.location.reload();
            })
            .catch((error) => {
              setErrorHandler({
                error: true,
                message: error.response.data.message,
              });
            });
        } catch (err) {
          console.log(err);
        }
      };
      editJobData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteJob = () => {
    dispatch(
      deleteJob(
        {
          user: state._id,
          job: job._id,
          board: board._id,
        },
        setErrorHandler
      )
    );
    setShowModal(false);
    window.location.reload();
  };

  useEffect(() => {
    if (company) {
      if (company.length > 0) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
    console.log(job);
  }, [company]);

  // modal animation
  const [animation, setAnimation] = useState(true);

  const handleOpenModal = () => {
    setAnimation(true)
    setShowModal(true);
  }

  const handleCloseAnimation = () => {
    setAnimation(false);
    closeAnimation(setShowModal);
  };

  const setAsToday = () => {
    const timestamp = new Date(Date.now());
    const year = timestamp.getUTCFullYear();
    const month = String(timestamp.getUTCMonth() + 1).padStart(2, '0');
    const day = String(timestamp.getUTCDate()).padStart(2, '0');
    let date = `${year}-${month}-${day}`;
    console.log('date', date)
    setAppDate(date)
  }

  const handleNoLocation = () => {
    setCity("Remote")
    setLocationState("NA")
  }

  return (
    <>{showModal && <div className={"modal-wrapper " + (animation ? "in" : "out")}>
      {job && (
        <SC.jobFormContainer
          className={"modal-container job " + (animation ? "in" : "out")}
        >
          <SC.modalTitleContainer className="modal-title-container">
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
            <SC.modalTitle className="modal-name">
              {job.position} at {job.company}
            </SC.modalTitle>
            <SC.modalTitleBoxShadow>⠀</SC.modalTitleBoxShadow>
          </SC.modalTitleContainer>
          <div className="modal-inputs-container">
            {/* COMPANY */}
            <div className="job-input-container">
              <span className="input-label">Company</span>
              <SC.authInput
                className="modal-input job"
                type="text"
                placeholder="Company name"
                onChange={(e) => setCompany(e.target.value)}
                defaultValue={job.company}
                required
              ></SC.authInput>
            </div>
            {/* POSITION */}
            <div className="job-input-container">
              <span className="input-label">Position</span>
              <SC.authInput
                className="modal-input job"
                type="text"
                placeholder="Position title"
                onChange={(e) => setPosition(e.target.value)}
                defaultValue={job.position}
                required
              ></SC.authInput>
            </div>
            {/* APPLIED */}
            <AppliedInput
              applied={applied}
              setApplied={setApplied}
              setStatus={setStatus}
            />
            {/* DATE APPLIED */}
            <div className="job-input-container date-input">
              <span className="input-label">Date Applied</span>
              <SC.authInput
                type="date"
                className="modal-input job date"
                name=""
                id=""
                value={appDate}
                onChange={(e) => setAppDate(e.target.value)}
              ></SC.authInput>
              <SC.primaryColorButtonInverse
                className={`modal-button ${isValid}`}
                onClick={() => setAsToday()}
              >
                today
              </SC.primaryColorButtonInverse>
            </div>
            {/* CITY */}
            <div className="job-input-container">
              <span className="input-label">City</span>
              <SC.authInput
                className="modal-input job"
                type="text"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
                value={city}
                required
              ></SC.authInput>
            </div>
            {/* STATE */}
            <div className="job-input-container">
              <span className="input-label">State</span>
              <SC.authInput
                className="modal-input job"
                type="text"
                placeholder="State"
                onChange={(e) => setLocationState(e.target.value)}
                value={locationState}
                required
              ></SC.authInput>
            </div>
            <div className="job-input-container">
              <span className="input-label"></span>
              <SC.primaryColorButtonInverse
                  className={`modal-button ${isValid}`}
                  onClick={() => handleNoLocation()}
                >
                  remote/no location
              </SC.primaryColorButtonInverse>
            </div>
            {/* REMOTE */}
            <RemoteInput remote={remote} setRemote={setRemote} />
            {/* STATUS */}
            <StatusInput status={status} setStatus={setStatus} />
            {/* RESULT */}
            <ResultInput result={result} setResult={setResult} />
            {/* TYPE */}
            <JobtypeInput jobtype={jobtype} setJobtype={setJobtype} />
            {/* SITE */}
            <div className="job-input-container">
              <span className="input-label">Site</span>
              <SC.authInput
                className="modal-input job"
                type="text"
                placeholder="indeed, monster..."
                onChange={(e) => setJobsite(e.target.value)}
                value={jobsite}
                required
              ></SC.authInput>
            </div>
            <div className="job-input-container">
              <span className="input-label"></span>
              <div style={{display: 'flex', justifyContent:"space-around", width: "100%"}}>
                <SC.primaryColorButtonInverse
                    className={`modal-button ${isValid}`}
                    onClick={() => setJobsite('Indeed')}
                  >
                    indeed
                </SC.primaryColorButtonInverse>
                <SC.primaryColorButtonInverse
                    className={`modal-button ${isValid}`}
                    onClick={() => setJobsite("LinkedIn")}
                  >
                    linkedIn
                </SC.primaryColorButtonInverse>
                <SC.primaryColorButtonInverse
                    className={`modal-button ${isValid}`}
                    onClick={() => setJobsite("ZipRecruiter")}
                  >
                    zipRecruiter
                </SC.primaryColorButtonInverse>
              </div>
            </div>
            {/* LINK */}
            <div className="job-input-container">
              <span className="input-label">Link</span>
              <SC.authInput
                className="modal-input job"
                type="text"
                placeholder="Listing URL (Cmd/Ctrl + L)"
                onChange={(e) => setLink(e.target.value)}
                defaultValue={job.link}
                required
              ></SC.authInput>
            </div>
            {/* USERNAME */}
            <div className="job-input-container">
              <span className="input-label">
                Username{" "}
                <span className="input-label-subtext">
                  <SC.subtextOnBgColor>{"(optional)"}</SC.subtextOnBgColor>
                </span>
              </span>
              <SC.authInput
                className="modal-input job"
                type="text"
                placeholder="Site username"
                onChange={(e) => setUsername(e.target.value)}
                defaultValue={job.username}
                required
              ></SC.authInput>
            </div>
            {/* PASSWORD */}
            <div className="job-input-container">
              <span className="input-label">
                Password{" "}
                <span className="input-label-subtext">
                  <SC.subtextOnBgColor>{"(optional)"}</SC.subtextOnBgColor>
                </span>
              </span>
              <SC.authInput
                className="modal-input job"
                type="text"
                placeholder="Site password"
                onChange={(e) => setPassword(e.target.value)}
                defaultValue={job.password}
                required
              ></SC.authInput>
            </div>
            {/* PAY */}
            <PayInput
              payType={payType}
              setPayType={setPayType}
              payScale={payScale}
              setPayScale={setPayScale}
              setPayMin={setPayMin}
              setPayMax={setPayMax}
              setPay={setPay}
              payMin={payMin}
              payMax={payMax}
              pay={pay}
            />
            {/* NOTES */}
            <div className="job-input-container-w-radio">
              <span className="input-label">Notes</span>
              <SC.jobNotesTextarea
                className="modal-input job"
                type="text"
                placeholder="Notes about the job (description, requirements, point of contact, shift...)"
                onChange={(e) => setNotes(e.target.value)}
                defaultValue={job.notes}
                required
              ></SC.jobNotesTextarea>
            </div>
            {/* BUTTONS */}
            <div className="error-message-container">
              {errorHandler.error && errorHandler.message}
            </div>
            <SC.jobButtonContainer className="modal-buttons-container job">
              {!showDeleteButton ? (
                <>
                  <SC.primaryColorButtonInverse
                    className={`modal-button ${isValid}`}
                    onClick={isValid ? () => handleEditJob() : null}
                  >
                    Save Changes
                  </SC.primaryColorButtonInverse>
                  <SC.primaryColorButtonInverse
                    className="modal-button"
                    onClick={() => handleCloseAnimation(false)}
                  >
                    Cancel
                  </SC.primaryColorButtonInverse>
                  <SC.deleteButtonInverse
                    className="modal-button"
                    onClick={() => setShowDeleteButton(true)}
                  >
                    Delete?
                  </SC.deleteButtonInverse>
                </>
              ) : (
                <>
                  <span>Are you sure you want to delete this entry?</span>
                  <SC.primaryColorButtonInverse
                    className="modal-button"
                    onClick={() => setShowDeleteButton(false)}
                  >
                    Cancel
                  </SC.primaryColorButtonInverse>
                  <SC.deleteButtonInverse
                    className="modal-button"
                    onClick={() => handleDeleteJob()}
                  >
                    Delete?
                  </SC.deleteButtonInverse>
                </>
              )}
            </SC.jobButtonContainer>
          </div>
        </SC.jobFormContainer>
      )}
      <SC.modalBackground
        className={"modal-background " + (animation ? "in" : "out")}
        onClick={() => handleCloseAnimation(false)}
      ></SC.modalBackground>
    </div>}
    <SC.ST_cell_sticky
      {...cell.getCellProps()}
      className={`${stickyBG} ${col} center`}
      onClick={() => handleOpenModal()}
    >
      <SC.subtextOnBgColor className="icon-container">
        <Create className="favorite-icon" />
      </SC.subtextOnBgColor>
    </SC.ST_cell_sticky>
    </>
  );
}
