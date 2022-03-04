/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewJob } from "../../store/actions/jobActions";
import SC from "../../themes/StyledComponents";
import AppliedInput from "./components/job/AppliedInput";
import JobtypeInput from "./components/job/JobtypeInput";
import PayInput from "./components/job/PayInput";
import RemoteInput from "./components/job/RemoteInput";
import ResultInput from "./components/job/ResultInput";
import StatusInput from "./components/job/StatusInput";
import { closeAnimation } from "./HelperFunctions";
import "./Modal.scss";

export default function NewJobModal({ setNewJobModal, board }) {
  const [isValid, setIsValid] = useState(false);
  const [errorHandler, setErrorHandler] = useState({
    error: false,
    message: "",
  });
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  // FORM HOOKS
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [applied, setApplied] = useState(true);
  const [appDate, setAppDate] = useState("-");
  const [city, setCity] = useState("");
  const [locationState, setLocationState] = useState("");
  const [remote, setRemote] = useState("yes");
  const [status, setStatus] = useState("waiting");
  const [result, setResult] = useState("waiting");
  const [jobtype, setJobtype] = useState("full");
  const [jobsite, setJobsite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [link, setLink] = useState("");
  const [payType, setPayType] = useState("salary");
  const [payScale, setPayScale] = useState("amount");
  const [payMin, setPayMin] = useState(0);
  const [payMax, setPayMax] = useState(0);
  const [pay, setPay] = useState(0);
  const [notes, setNotes] = useState("");
  const [favorite, setFavorite] = useState(false);

  const handleAddNewJob = () => {
    dispatch(
      createNewJob(
        {
          user: state._id,
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
        },
        setErrorHandler
      )
    );
    setNewJobModal(false);
    window.location.reload();
  };

  useEffect(() => {
    if (company.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [company]);

  // modal animation
  const [animation, setAnimation] = useState(true);

  const handleCloseAnimation = () => {
    setAnimation(false);
    closeAnimation(setNewJobModal);
  };

  return (
    <div className={"modal-wrapper " + (animation ? "in" : "out")}>
      <SC.jobFormContainer
        className={"modal-container job " + (animation ? "in" : "out")}
      >
        <SC.modalTitleContainer className="modal-title-container">
          <SC.modalTitle className="modal-name">New job </SC.modalTitle>
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
              required
            ></SC.authInput>
          </div>
          {/* APPLIED */}
          <AppliedInput applied={applied} setApplied={setApplied} />
          {/* DATE APPLIED */}
          <div className="job-input-container date-input">
            <span className="input-label">Date Applied</span>
            <SC.authInput
              type="date"
              className="modal-input job date"
              name=""
              id=""
              onChange={(e) => setAppDate(e.target.value)}
            ></SC.authInput>
          </div>
          {/* CITY */}
          <div className="job-input-container">
            <span className="input-label">City</span>
            <SC.authInput
              className="modal-input job"
              type="text"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
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
              required
            ></SC.authInput>
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
              required
            ></SC.authInput>
          </div>
          {/* LINK */}
          <div className="job-input-container">
            <span className="input-label">Link</span>
            <SC.authInput
              className="modal-input job"
              type="text"
              placeholder="Listing URL"
              onChange={(e) => setLink(e.target.value)}
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
          />
          {/* NOTES */}
          <div className="job-input-container-w-radio">
            <span className="input-label">Notes</span>
            <SC.jobNotesTextarea
              className="modal-input job"
              type="text"
              placeholder="Notes about the job (description, requirements, point of contact, shift...)"
              onChange={(e) => setNotes(e.target.value)}
              required
            ></SC.jobNotesTextarea>
          </div>
          {/* BUTTONS */}
          <SC.jobButtonContainer className="modal-buttons-container job">
            <SC.primaryColorButtonInverse
              className={`modal-button ${isValid}`}
              onClick={isValid ? () => handleAddNewJob() : null}
            >
              Add
            </SC.primaryColorButtonInverse>
            <SC.primaryColorButtonInverse
              className="modal-button"
              onClick={() => handleCloseAnimation()}
            >
              Cancel
            </SC.primaryColorButtonInverse>
          </SC.jobButtonContainer>
        </div>
      </SC.jobFormContainer>
      <SC.modalBackground
        className={"modal-background " + (animation ? "in" : "out")}
        onClick={() => handleCloseAnimation()}
      ></SC.modalBackground>
    </div>
  );
}
