/* eslint-disable react/jsx-pascal-case */
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { getJobInfoScrape, url } from "../../helpers/Api";
import SC from "../../themes/StyledComponents";
import AppliedInput from "./components/job/AppliedInput";
import JobtypeInput from "./components/job/JobtypeInput";
import PayInput from "./components/job/PayInput";
import RemoteInput from "./components/job/RemoteInput";
import ResultInput from "./components/job/ResultInput";
import StatusInput from "./components/job/StatusInput";
import { closeAnimation } from "./HelperFunctions";
import "./Modal.scss";
import Loader from "../Loader/Loader";

export default function NewJobModal({ board }) {
  const [isValid, setIsValid] = useState(false);
  const [errorHandler, setErrorHandler] = useState({
    error: false,
    message: "",
  });
  const state = useSelector((state) => state.user);
  // FORM HOOKS
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [applied, setApplied] = useState(true);
  const [city, setCity] = useState("");
  const [locationState, setLocationState] = useState("");
  const [remote, setRemote] = useState("yes");
  const [status, setStatus] = useState("applied");
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
  // application date
  const timestamp = new Date(Date.now());
  const year = timestamp.getFullYear();
  const month = String(timestamp.getMonth() + 1).padStart(2, '0');
  const day = String(timestamp.getDate()).padStart(2, '0');
  let date = `${year}-${month}-${day}`;
  const [appDate, setAppDate] = useState(date);
  // Modal
  const [showModal, setShowModal] = useState(false);
  // Scrape loader
  const [scrapeLoader, setScrapeLoader] = useState(false)

  // When the modal opens, focus on the first input
  const inputRef = useRef(null);
  useEffect(() => {
    if (showModal) {
      inputRef.current.focus();
    }
  }, [showModal]);

  const handleAddNewJob = () => {
    try {
      const sendJobData = async () => {
        try {
          await axios
            .post(`${url}/jobs/new`, {
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
              favorite: false,
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
      sendJobData();
    } catch (err) {
      console.log(err);
      console.log(errorHandler);
    }
  };

  useEffect(() => {
    if (
      company.length > 0 &&
      position.length > 0 &&
      city.length > 0 &&
      locationState.length > 0 &&
      jobsite.length > 0 &&
      link.length > 0
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [company, position, city, locationState, jobsite, link]);

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
    const year = timestamp.getFullYear();
    const month = String(timestamp.getMonth() + 1).padStart(2, '0');
    const day = String(timestamp.getDate()).padStart(2, '0');
    let date = `${year}-${month}-${day}`;
    setAppDate(date)
  }

  const handleNoLocation = () => {
    setCity("Remote")
    setLocationState("NA")
  }

  const jobSiteMapping = {
    linkedin: 'LinkedIn',
    indeed: 'Indeed',
    glassdoor: 'Glassdoor',
    monster: 'Monster',
    ziprecruiter: 'ZipRecruiter',
    google: 'Google',
  };
  
  const handleSetLink = (link) => {
    setLink(link);
    let detectedSite = 'Direct/Other'; // Default site name for unmatched links
    // Check if the link matches any known job site
    for (const [key, site] of Object.entries(jobSiteMapping)) {
      if (new RegExp(key, 'i').test(link)) {
        detectedSite = site;
        break;
      }
    }
    setJobsite(detectedSite);
  };

  const scrape = async () => {
    try {
      setScrapeLoader(true)
      const data = await getJobInfoScrape({url: link})

      if(data.companyName) { setCompany(data.companyName) }
      if(data.jobTitle) { setPosition(data.jobTitle) }
      if(data.notes) { setNotes(data.notes) }
      // pages dont show remote/onsite status
      // if(data.remote) { setRemote(data.remote) }
      if(data.city) { 
        if (data.city === 'n/a'){
          setCity('Remote')
        } else {
          setCity(data.city)
        }
       }
      if(data.state) { 
        if (data.state === 'United States'){
          setLocationState('NA')
        } else {
          setLocationState(data.state)
        }
      }
      setScrapeLoader(false)
    } catch (error) {
      console.error('Error fetching data:', error);
      setScrapeLoader(false)
    }
  }

  // Keypress event listener to open the modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === '+' || event.key === '=') {
        handleOpenModal();
      } else if (event.key === 'Escape' && showModal) {
        handleCloseAnimation();
      }
    };
  
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal]);

  // Keypress event listener to submit the form
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check for Command (Mac) or Control (Windows) key
      const isCommandOrCtrlPressed = event.metaKey || event.ctrlKey;
      
      // Check if Enter key is pressed
      if (isCommandOrCtrlPressed && event.key === "Enter") {
        handleAddNewJob();
      } else if (event.key === "Escape" && showModal) {
        handleCloseAnimation();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal, company, position, city, locationState, jobsite, link ]);

  return (
    <>
    {showModal && <div className={"modal-wrapper " + (animation ? "in" : "out")}>
      <SC.jobFormContainer
        className={"modal-container job " + (animation ? "in" : "out")}
      >
        <SC.modalTitleContainer className="modal-title-container">
          <SC.modalTitle className="modal-name">New job </SC.modalTitle>
          <SC.modalTitleBoxShadow>⠀</SC.modalTitleBoxShadow>
        </SC.modalTitleContainer>
        <div className="modal-inputs-container">
          {/* LINK */}
          <div className="job-input-container">
            <span className="input-label">Link</span>
            <SC.authInput
              className="modal-input job"
              type="text"
              maxLength="500"
              placeholder="Listing URL (Cmd/Ctrl + L)"
              ref={inputRef}
              onChange={(e) => handleSetLink(e.target.value)}
              required
            ></SC.authInput>
          </div>
          {/* LISTING SCRAPER */}
          {/* {!scrapeLoader ? <div className="job-input-container scraper">
            <span className="input-label"></span>
            <SC.primaryColorButtonInverse
                className={`modal-button ${isValid}`}
                onClick={() => scrape()}
              >
              Fetch Listing Data
            </SC.primaryColorButtonInverse>
            <div className="scraper-message">
              <SC.subtextOnBgColor>{"( LinkedIn or Indeed only )"}</SC.subtextOnBgColor>
            </div>
          </div> :
          <div className="job-input-container">
            <Loader type={'small'} />
          </div>
          } */}
          {/* COMPANY */}
          <div className="job-input-container">
            <span className="input-label">Company</span>
            <SC.authInput
              className="modal-input job"
              type="text"
              maxLength="50"
              placeholder="Company name"
              onChange={(e) => setCompany(e.target.value)}
              value={company}
              required
            ></SC.authInput>
          </div>
          {/* POSITION */}
          <div className="job-input-container">
            <span className="input-label">Position</span>
            <SC.authInput
              className="modal-input job"
              type="text"
              maxLength="50"
              placeholder="Position title"
              onChange={(e) => setPosition(e.target.value)}
              value={position}
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
              maxLength="50"
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
              maxLength="2"
              placeholder="State (NY, PA)"
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
              maxLength="50"
              placeholder="indeed, monster..."
              onChange={(e) => setJobsite(e.target.value)}
              value={jobsite}
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
              maxLength="50"
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
              maxLength="50"
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
              maxLength="10000"
              placeholder="Notes about the job (description, requirements, point of contact, shift...)"
              onChange={(e) => setNotes(e.target.value)}
              value={notes}
              required
            ></SC.jobNotesTextarea>
          </div>
          {/* BUTTONS */}
          <div className="error-message-container">
            {errorHandler.error && errorHandler.message}
          </div>
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
    </div>}
    <SC.primaryColorButtonInverse onClick={() => handleOpenModal()}>
      + Add a job
    </SC.primaryColorButtonInverse>
    </>
  );
}
