import styled from "styled-components";

const colWidth_favorite = 60;
const colWidth_company = 150;
const colWidth_position = 200;
const colWidth_edit = 40;
const colWidth_view = 40;
const colWidth_applied = 80;
const colWidth_appDate = 130;
const colWidth_city = 150;
const colWidth_locationState = 70;
const colWidth_remote = 70;
const colWidth_status = 150;
const colWidth_result = 150;
const colWidth_jobType = 150;
const colWidth_jobSite = 150;
const colWidth_link = 150;
const colWidth_pay = 150;
const maxW =
  colWidth_favorite +
  colWidth_company +
  colWidth_position +
  colWidth_edit +
  colWidth_view +
  colWidth_applied +
  colWidth_appDate +
  colWidth_city +
  colWidth_locationState +
  colWidth_remote +
  colWidth_status +
  colWidth_result +
  colWidth_jobType +
  colWidth_jobSite +
  colWidth_link +
  colWidth_pay +
  150;

const colWidth_favorite_MOBILE = 40;
const colWidth_company_MOBILE = 100;
const colWidth_position_MOBILE = 100;
const colWidth_edit_MOBILE = 40;
const colWidth_view_MOBILE = 40;
const colWidth_applied_MOBILE = 0;
const colWidth_appDate_MOBILE = 0;
const colWidth_city_MOBILE = 0;
const colWidth_locationState_MOBILE = 0;
const colWidth_remote_MOBILE = 0;
const colWidth_status_MOBILE = 0;
const colWidth_result_MOBILE = 0;
const colWidth_jobType_MOBILE = 0;
const colWidth_jobSite_MOBILE = 0;
const colWidth_link_MOBILE = 0;
const colWidth_pay_MOBILE = 0;
const maxW_MOBILE =
  colWidth_favorite_MOBILE +
  colWidth_company_MOBILE +
  colWidth_position_MOBILE +
  colWidth_edit_MOBILE +
  colWidth_view_MOBILE +
  colWidth_applied_MOBILE +
  colWidth_appDate_MOBILE +
  colWidth_city_MOBILE +
  colWidth_locationState_MOBILE +
  colWidth_remote_MOBILE +
  colWidth_status_MOBILE +
  colWidth_result_MOBILE +
  colWidth_jobType_MOBILE +
  colWidth_jobSite_MOBILE +
  colWidth_link_MOBILE +
  colWidth_pay_MOBILE +
  150;

const SC = {
  // ---------- APP.JS ----------
  mainContent: styled.div`
    background-color: ${(props) =>
      props.theme.colors.backgroundColor} !important;
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) =>
        props.theme.colors.primaryColorFaded} !important;
      &:hover {
        background-color: ${(props) =>
          props.theme.colors.primaryColor} !important;
      }
    }
  };
  `,
  ScrollThumb: styled.div`
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) =>
        props.theme.colors.primaryColorFaded} !important;
      &:hover {
        background-color: ${(props) =>
          props.theme.colors.primaryColor} !important;
      }
    }
    ::-webkit-scrollbar-track {
      margin-top: 60px;
    }
  `,
  textOnBgColor: styled.span`
    color: ${(props) => props.theme.colors.textOnBgColor} !important;

  };
  `,
  subtextOnBgColor: styled.span`
    color: ${(props) => props.theme.colors.subtextOnBgColor} !important;
    &.icon-container {
      display: flex !important;
      cursor: pointer;
      opacity: .5;
      &:hover{
        opacity: 1;
      }
    }
  };
  `,
  primaryColorButton: styled.button`
    color: ${(props) => props.theme.colors.textOnPrimaryColor} !important;
    background-color: ${(props) =>
      props.theme.colors.primaryColorFaded} !important;
    &:hover {
      background-color: ${(props) =>
        props.theme.colors.primaryColor} !important;
    }
  `,
  primaryColorButtonInverse: styled.button`
    color: ${(props) => props.theme.colors.textOnBgColor} !important;
    background-color: ${(props) =>
      props.theme.colors.backgroundColor} !important;
    border: solid 2px;
    border-color: ${(props) => props.theme.colors.primaryColorFaded} !important;
    border-radius: 6px;
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    transition: all ease 0.12s;
    &:focus {
      background-color: ${(props) =>
        props.theme.colors.primaryColorFaded} !important;
      color: ${(props) => props.theme.colors.textOnPrimaryColor} !important;
      border-color: transparent !important;
    }
    &:hover {
      background-color: ${(props) =>
        props.theme.colors.primaryColor} !important;
      color: ${(props) => props.theme.colors.textOnPrimaryColor} !important;
      border-color: ${(props) => props.theme.colors.primaryColor} !important;
    }
    &.filtered {
      background-color: ${(props) =>
        props.theme.colors.primaryColor} !important;
      color: ${(props) => props.theme.colors.textOnPrimaryColor} !important;
      border-color: ${(props) => props.theme.colors.primaryColor} !important;
    }
  `,
  deleteButtonInverse: styled.button`
    color: ${(props) => props.theme.colors.textOnBgColor} !important;
    background-color: ${(props) =>
      props.theme.colors.backgroundColor} !important;
    border: solid 2px;
    border-color: ${(props) => props.theme.colors.deleteColorFaded} !important;
    border-radius: 6px;
    padding: 5px 12px;
    font-size: 16px;
    cursor: pointer;
    &.active {
      background-color: ${(props) =>
        props.theme.colors.deleteColorFaded} !important;
      color: ${(props) => props.theme.colors.textOnPrimaryColor} !important;
      border-color: transparent !important;
    }
    &:hover {
      background-color: ${(props) => props.theme.colors.deleteColor} !important;
      color: ${(props) => props.theme.colors.textOnPrimaryColor} !important;
      border-color: ${(props) => props.theme.colors.deleteColor} !important;
    }
  `,
  primaryColorText: styled.div`
    color: ${(props) => props.theme.colors.primaryColor} !important;
    text-decoration: none;
    &.icon-container {
      display: flex !important;
    }
  `,
  favIcon: styled.div`
    color: ${(props) => props.theme.colors.primaryColor} !important;
    text-decoration: none;
    display: flex !important;
    cursor: pointer;
    &.outline {
      color: ${(props) => props.theme.colors.subtextOnBgColor} !important;
      &:hover {
        color: ${(props) => props.theme.colors.primaryColor} !important;
      }
    }
  `,
  booleanColorText: styled.span`
    font-weight: 600;
    &.true {
      color: ${(props) => props.theme.colors.booleanTrueGreen} !important;
      text-decoration: none;
    }
    &.false {
      color: ${(props) => props.theme.colors.booleanFalseRed} !important;
      text-decoration: none;
    }
    &.na {
      color: ${(props) => props.theme.colors.subtextOnBgColor} !important;
      text-decoration: none;
    }
  `,

  // ---------- NAV ----------
  nav: styled.nav`
    background-color: ${(props) =>
      props.theme.colors.navBackgroundColor} !important;
    color: ${(props) => props.theme.colors.navTextColor} !important;

    box-shadow: ${(props) => props.theme.colors.navBoxShadow} !important;
  `,
  navLink: styled.div`
    color: ${(props) => props.theme.colors.navTextColor} !important;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 24px;
    min-width: 100px;
    height: 100%;
    position: relative;
    overflow: visible !important;

    @media (min-height: 421px) {
      @media (min-width: 800px) {
        &:hover {
          background-color: ${(props) =>
            props.theme.colors.primaryColor} !important;
          color: ${(props) => props.theme.colors.textOnPrimaryColor} !important;
        }
        &:hover {
          &.boards {
            background-color: ${(props) =>
              props.theme.colors.primaryColor} !important;
          }
        }
      }
    }
  `,
  boardsLink: styled.div`
    color: ${(props) => props.theme.colors.navTextColor} !important;
    position: relative;
    cursor: pointer;
    background-color: ${(props) =>
      props.theme.colors.navBackgroundColor} !important;

    @media (min-height: 421px) {
      @media (min-width: 800px) {
        &:hover {
          background-color: ${(props) =>
            props.theme.colors.primaryColor} !important;

          .boards {
            color: ${(props) =>
              props.theme.colors.textOnPrimaryColor} !important;
          }
        }
      }
    }
  `,
  boardListContainer: styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    flex-wrap: nowrap !important;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    display: none;
    overflow: hidden;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
    clip-path: inset(0px -10px -10px -10px);
    border: 2px solid ${(props) => props.theme.colors.primaryColor} !important;
    background-color: ${(props) =>
      props.theme.colors.navBackgroundColor} !important;
  `,
  navLinkSub: styled.div`
    color: ${(props) => props.theme.colors.navTextColor} !important;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-height: 24px;
    height: 100%;
    width: 100%;
    position: relative;
    flex-wrap: nowrap !important;
    cursor: pointer;
    white-space: nowrap;
    background-color: ${(props) =>
      props.theme.colors.navBackgroundColor} !important;
    &:hover {
      background-color: ${(props) =>
        props.theme.colors.rowHoverColorPrimary} !important;
    }
  `,
  navLogoText: styled.span`
    color: ${(props) => props.theme.colors.primaryColor} !important;
    background-image: linear-gradient(
      45deg,
      ${(props) => props.theme.colors.primaryGradientColor} 15%,
      ${(props) => props.theme.colors.secondaryGradientColor},
      ${(props) => props.theme.colors.secondaryGradientColor},
      ${(props) => props.theme.colors.primaryGradientColor} 85%
    );
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    font-weight: 700;
    font-family: "poppins", sans-serif;
  `,

  // ---------- AUTH ----------
  authContainer: styled.div`
    background-color: ${(props) =>
      props.theme.colors.authContainerBgColor} !important;
    color: ${(props) => props.theme.colors.navTextColor} !important;
  `,
  authModalContainer: styled.div`
    background-color: ${(props) =>
      props.theme.colors.modalContainerBgColor} !important;
    color: ${(props) => props.theme.colors.navTextColor} !important;
    box-shadow: ${(props) =>
      props.theme.colors.modalContainerBoxShadow} !important;

    ::-webkit-scrollbar-thumb {
      background-color: ${(props) =>
        props.theme.colors.primaryColorFaded} !important;
      &:hover {
        background-color: ${(props) =>
          props.theme.colors.primaryColor} !important;
      }
    }
  `,
  authInput: styled.input`
    background-color: transparent !important;
    color: ${(props) => props.theme.colors.inputTextColor} !important;
    border-bottom: solid 2px ${(props) => props.theme.colors.fadedInputColor} !important;
    transition: all 0.15s ease;
    padding: 7px 12px;
    border-radius: 3px 3px 0px 0px !important;
    &:focus {
      background-color: ${(props) =>
        props.theme.colors.modalInputBackgroundColor} !important;
      border-color: ${(props) => props.theme.colors.primaryColor} !important;
    }
    &.auth-input {
      &:focus {
        background-color: ${(props) =>
          props.theme.colors.inputBackgroundColor} !important;
      }
    }
  `,
  authScreenLogo: styled.span`
    background-color: ${(props) => props.theme.colors.primaryColor};
    background-image: linear-gradient(
      45deg,
      ${(props) => props.theme.colors.primaryGradientColor} 15%,
      ${(props) => props.theme.colors.secondaryGradientColor},
      ${(props) => props.theme.colors.secondaryGradientColor},
      ${(props) => props.theme.colors.primaryGradientColor} 85%
    );
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    font-weight: 700;
    font-size: 60px;
    margin-bottom: 6px;
    font-family: "poppins", sans-serif;
  `,

  // ---------- JOBS ----------
  modalTitleContainer: styled.div`
    background-color: ${(props) =>
      props.theme.colors.modalTitleBgColor} !important;
    position: relative;
  `,
  modalTitleBoxShadow: styled.div`
    box-shadow: ${(props) => props.theme.colors.modalTitleBoxShadow} !important;
    clip-path: ${(props) =>
      props.theme.colors.modalTitleBoxShadowClip} !important;
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
  `,
  modalTitle: styled.span`
    text-decoration: underline solid 4px
      ${(props) => props.theme.colors.primaryColor} !important;
    text-underline-offset: 0.5px;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;

    // firefox does not allow custom underlines
    @-moz-document url-prefix() {
      text-decoration: none !important;
    }
  `,
  jobFormRadioLabel: styled.label`
    color: ${(props) => props.theme.colors.textOnBgColor} !important;
    background-color: ${(props) =>
      props.theme.colors.backgroundColor} !important;
    border: solid 2px;
    border-color: ${(props) => props.theme.colors.primaryColorFaded} !important;
    border-radius: 50px;
    padding: 2px 12px 5px 12px;
    min-height: 21.6px;
    font-size: 16px;
    cursor: pointer;
    font-weight: 500;
    transition: all ease 0.12s;

    &.quicklink {
      padding: 3px 12px;
    }

    &:hover {
      background-color: ${(props) =>
        props.theme.colors.rowHoverColorPrimary} !important;
    }

    &.waiting {
      border-color: ${(props) => props.theme.colors.waiting_Border} !important;
      background-color: ${(props) => props.theme.colors.waiting_Bg} !important;
      color: ${(props) => props.theme.colors.waiting_Text} !important;
      &.true {
        border-color: ${(props) =>
          props.theme.colors.waiting_Border_true} !important;
        background-color: ${(props) =>
          props.theme.colors.waiting_Bg_true} !important;
        color: ${(props) => props.theme.colors.waiting_Text_true} !important;
      }
    }

    &.applied {
      border-color: ${(props) => props.theme.colors.waiting_Border} !important;
      background-color: ${(props) => props.theme.colors.waiting_Bg} !important;
      color: ${(props) => props.theme.colors.waiting_Text} !important;
      &.true {
        border-color: ${(props) =>
          props.theme.colors.waiting_Border_true} !important;
        background-color: ${(props) =>
          props.theme.colors.waiting_Bg_true} !important;
        color: ${(props) => props.theme.colors.waiting_Text_true} !important;
      }
    }
    &.viewed {
      border-color: ${(props) => props.theme.colors.viewed_Border} !important;
      background-color: ${(props) => props.theme.colors.viewed_Bg} !important;
      color: ${(props) => props.theme.colors.viewed_Text} !important;
      &.true {
        border-color: ${(props) =>
          props.theme.colors.viewed_Border_true} !important;
        background-color: ${(props) =>
          props.theme.colors.viewed_Bg_true} !important;
        color: ${(props) => props.theme.colors.viewed_Text_true} !important;
      }
    }
    &.interviewed {
      border-color: ${(props) =>
        props.theme.colors.interviewed_Border} !important;
      background-color: ${(props) =>
        props.theme.colors.interviewed_Bg} !important;
      color: ${(props) => props.theme.colors.interviewed_Text} !important;
      &.true {
        border-color: ${(props) =>
          props.theme.colors.interviewed_Border_true} !important;
        background-color: ${(props) =>
          props.theme.colors.interviewed_Bg_true} !important;
        color: ${(props) =>
          props.theme.colors.interviewed_Text_true} !important;
      }
    }
    &.offered {
      border-color: ${(props) => props.theme.colors.offered_Border} !important;
      background-color: ${(props) => props.theme.colors.offered_Bg} !important;
      color: ${(props) => props.theme.colors.offered_Text} !important;
      &.true {
        border-color: ${(props) =>
          props.theme.colors.offered_Border_true} !important;
        background-color: ${(props) =>
          props.theme.colors.offered_Bg_true} !important;
        color: ${(props) => props.theme.colors.offered_Text_true} !important;
      }
    }
    &.accepted {
      border-color: ${(props) => props.theme.colors.accepted_Border} !important;
      background-color: ${(props) => props.theme.colors.accepted_Bg} !important;
      color: ${(props) => props.theme.colors.accepted_Text} !important;
      &.true {
        border-color: ${(props) =>
          props.theme.colors.accepted_Border_true} !important;
        background-color: ${(props) =>
          props.theme.colors.accepted_Bg_true} !important;
        color: ${(props) => props.theme.colors.accepted_Text_true} !important;
      }
    }
    &.passed {
      border-color: ${(props) => props.theme.colors.passed_Border} !important;
      background-color: ${(props) => props.theme.colors.passed_Bg} !important;
      color: ${(props) => props.theme.colors.passed_Text} !important;
      &.true {
        border-color: ${(props) =>
          props.theme.colors.passed_Border_true} !important;
        background-color: ${(props) =>
          props.theme.colors.passed_Bg_true} !important;
        color: ${(props) => props.theme.colors.passed_Text_true} !important;
      }
    }
    &.rejected {
      border-color: ${(props) => props.theme.colors.rejected_Border} !important;
      background-color: ${(props) => props.theme.colors.rejected_Bg} !important;
      color: ${(props) => props.theme.colors.rejected_Text} !important;
      &.true {
        border-color: ${(props) =>
          props.theme.colors.rejected_Border_true} !important;
        background-color: ${(props) =>
          props.theme.colors.rejected_Bg_true} !important;
        color: ${(props) => props.theme.colors.rejected_Text_true} !important;
      }
    }
    &.closed {
      border-color: ${(props) => props.theme.colors.rejected_Border} !important;
      background-color: ${(props) => props.theme.colors.rejected_Bg} !important;
      color: ${(props) => props.theme.colors.rejected_Text} !important;
      &.true {
        border-color: ${(props) =>
          props.theme.colors.rejected_Border_true} !important;
        background-color: ${(props) =>
          props.theme.colors.rejected_Bg_true} !important;
        color: ${(props) => props.theme.colors.rejected_Text_true} !important;
      }
    }
    &.true {
      background-color: ${(props) =>
        props.theme.colors.primaryColor} !important;
      color: ${(props) => props.theme.colors.textOnPrimaryColor} !important;
      border-color: transparent !important;
    }
  `,
  jobFormContainer: styled.div`
    background-color: ${(props) =>
      props.theme.colors.modalContainerBgColor} !important;
    color: ${(props) => props.theme.colors.navTextColor} !important;
    box-shadow: ${(props) =>
      props.theme.colors.modalContainerBoxShadow} !important;

    ::-webkit-scrollbar-thumb {
      background-color: ${(props) =>
        props.theme.colors.primaryColorFaded} !important;
      &:hover {
        background-color: ${(props) =>
          props.theme.colors.primaryColor} !important;
      }
    }

    &.view {
      ::-webkit-scrollbar-track {
        margin-top: 102px;
      }
    }

    &.job {
      ::-webkit-scrollbar-track {
        margin-top: 72px;
      }
    }
  `,
  jobRadioContainer: styled.div`
    border: solid 2px;
    display: flex;
    flex-direction: column;
    border-color: ${(props) => props.theme.colors.fadedInputColor} !important;
    padding: 5px;
    border-radius: 10px;
  `,
  jobButtonContainer: styled.div`
    border-top: solid 2px ${(props) => props.theme.colors.primaryColorFaded};
    padding-top: 20px;
    margin-top: 15px !important;
  `,
  jobNotesTextarea: styled.textarea`
    background-color: transparent !important;
    color: ${(props) => props.theme.colors.inputTextColor} !important;
    border-bottom: solid 2px ${(props) => props.theme.colors.fadedInputColor} !important;
    border: none;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    outline: none;
    padding: 7px 12px;
    margin: 2px 0px 7px 0px;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    font-size: 16px;
    transition: all 0.15s ease;
    height: 80px;
    min-height: 60px;
    max-height: 200px;
    resize: vertical;
    &:focus {
      background-color: ${(props) =>
        props.theme.colors.inputBackgroundColor} !important;
      border-color: ${(props) => props.theme.colors.primaryColor} !important;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${(props) =>
        props.theme.colors.primaryColorFaded} !important;
      &:hover {
        background-color: ${(props) =>
          props.theme.colors.primaryColor} !important;
      }
    }

    @media (min-height: 421px) {
      @media (max-width: 800px) {
        width: 90%;
        min-width: 90%;
        max-width: 90%;
        height: 100px;
      }
    }
  `,

  // ---------- VIEW JOB ----------
  viewJobPosition: styled.div`
    font-size: 32px;
    font-weight: 200;

    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;

    @media (min-height: 421px) {
      @media (max-width: 800px) {
        font-size: 22px;
      }
    }
  `,
  viewJobCompany: styled.div`
    font-size: 22px;
    font-weight: 600;
    padding-bottom: 10px;

    @media (min-height: 421px) {
      @media (max-width: 800px) {
        font-size: 20px;
      }
    }
  `,
  viewPositionAndJob: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
  `,
  viewGrid: styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 100px 1fr;
    font-size: 18px;
    span {
      padding: 5px 0px;
    }
    .listing-link {
      font-size: inherit !important;
    }
    &.notes {
      align-items: flex-start;
      border-top: 2px solid ${(props) => props.theme.colors.subtextOnBgColor};
      margin-top: 12px;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          grid-template-columns: 1fr;
          padding-right: 10px !important;
        }
      }
    }
  `,
  closeModal: styled.div`
    z-index: 9;
    min-width: 24px;
    min-height: 24px;
    max-width: 24px;
    max-width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0px;
    position: absolute;
    top: 15px;
    right: 15px;
    border-radius: 20px;
    cursor: pointer;
    transform: scale(0.75);
    transition: all ease 0.2s;
    background-color: ${(props) => props.theme.colors.subtextOnBgColor};
    color: ${(props) => props.theme.colors.navBackgroundColor};
    opacity: 0.5;
    &:hover {
      background-color: ${(props) => props.theme.colors.primaryColor};
      opacity: 1;
    }

    .close-icon {
      min-width: 20px;
      min-height: 20px;
      max-width: 20px;
      max-width: 20px;
    }
  `,

  // ---------- TABLES ----------
  tablePage: styled.div`
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) =>
        props.theme.colors.primaryColorFaded} !important;
      &:hover {
        background-color: ${(props) =>
          props.theme.colors.primaryColor} !important;
      }
    }
    ::-webkit-scrollbar-track {
      margin-top: 60px;
    }
  `,

  // ---------- STICKY TABLE ----------
  ST_table: styled.div`
    padding: 0px 0px 23px 0px;
    overflow: overlay;
    width: 100%;
    max-height: 67vh;
    border-radius: 20px;
    box-shadow: ${(props) => props.theme.colors.containerShadow} !important;
    border-bottom: solid ${(props) => props.theme.colors.tableBorderPx}
      ${(props) => props.theme.colors.tableBorderColor};
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) =>
        props.theme.colors.primaryColorFaded} !important;
      &:hover {
        background-color: ${(props) =>
          props.theme.colors.primaryColor} !important;
      }
    }
    ::-webkit-scrollbar-track {
      margin-top: 40px;
    }
    ::-webkit-scrollbar-corner {
      background-color: transparent !important;
    }

    @media (min-height: 421px) {
      @media (max-width: 800px) {
        overflow-x: hidden !important;
        max-height: 60vh;
        padding: 0px;
      }
    }
    @media (max-height: 740px) {
      @media (max-width: 800px) {
        overflow-x: hidden !important;
        max-height: 50vh;
        padding: 0px;
      }
    }

    // firefox does not allow overflow:overlay
    @-moz-document url-prefix() {
      overflow: scroll;
      border-radius: 0px;
    }
  `,
  ST_header_header: styled.div`
    color: ${(props) => props.theme.colors.tableHeaderColor} !important;
    background-color: ${(props) =>
      props.theme.colors.tableHeaderBgColor} !important;
    top: 0;
    position: sticky;
    z-index: 4;
    width: fit-content;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    clip-path: inset(0px 0px -10px 0px);
    max-width: ${maxW}px !important;

    @media (min-height: 421px) {
      @media (max-width: 800px) {
        max-width: ${maxW_MOBILE}px !important;
      }
    }
  `,
  ST_header_tr: styled.div`
    max-width: ${maxW}px !important;
    color: ${(props) => props.theme.colors.tableHeaderColor} !important;
    background-color: ${(props) =>
      props.theme.colors.tableHeaderBgColor} !important;

    @media (min-height: 421px) {
      @media (max-width: 800px) {
        max-width: ${maxW_MOBILE}px !important;
      }
    }
  `,
  ST_header_th: styled.div`
    padding: 7px 0px;
    font-weight: 500;
    cursor: pointer;
    border-top: solid 3px ${(props) => props.theme.colors.tableHeaderBgColor};
    border-bottom: solid 3px ${(props) => props.theme.colors.tableHeaderBgColor};
    color: ${(props) => props.theme.colors.tableHeaderColor} !important;
    &.active {
      &.order-1 {
        border-top: solid 3px
          ${(props) => props.theme.colors.tableHeaderBgColor};
        border-bottom: solid 3px ${(props) => props.theme.colors.primaryColor};
      }
      &.order1 {
        border-top: solid 3px ${(props) => props.theme.colors.primaryColor};
        border-bottom: solid 3px
          ${(props) => props.theme.colors.tableHeaderBgColor};
      }
    }
    background-color: ${(props) =>
      props.theme.colors.tableHeaderBgColor} !important;

    &.favorite {
      min-width: ${colWidth_favorite}px !important;
      max-width: ${colWidth_favorite}px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      &.active {
        color: ${(props) => props.theme.colors.primaryColor} !important;
        border-top: solid 3px
          ${(props) => props.theme.colors.navBackgroundColor};
        border-bottom: solid 3px
          ${(props) => props.theme.colors.navBackgroundColor};
      }

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_favorite_MOBILE}px !important;
          max-width: ${colWidth_favorite_MOBILE}px !important;
        }
      }
    }
    &.company {
      min-width: ${colWidth_company}px !important;
      max-width: ${colWidth_company}px !important;
      left: calc(${colWidth_favorite}px) !important;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_company_MOBILE}px !important;
          max-width: ${colWidth_company_MOBILE}px !important;
          left: calc(${colWidth_favorite_MOBILE}px) !important;
        }
      }
    }
    &.position {
      min-width: ${colWidth_position}px !important;
      max-width: ${colWidth_position}px !important;
      left: calc(${colWidth_favorite}px + ${colWidth_company}px) !important;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_position_MOBILE}px !important;
          max-width: ${colWidth_position_MOBILE}px !important;
          left: calc(
            ${colWidth_favorite_MOBILE}px + ${colWidth_company_MOBILE}px
          ) !important;
        }
      }
    }
    &.edit {
      min-width: ${colWidth_edit}px !important;
      max-width: ${colWidth_edit}px !important;
      left: calc(
        ${colWidth_favorite}px + ${colWidth_company}px + ${colWidth_position}px
      ) !important;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_edit_MOBILE}px !important;
          max-width: ${colWidth_edit_MOBILE}px !important;
          left: calc(
            ${colWidth_favorite_MOBILE}px + ${colWidth_company_MOBILE}px +
              ${colWidth_position_MOBILE}px
          ) !important;
        }
      }
    }
    &.view {
      min-width: ${colWidth_view}px !important;
      max-width: ${colWidth_view}px !important;
      left: calc(
        ${colWidth_favorite}px + ${colWidth_company}px + ${colWidth_position}px +
          ${colWidth_edit}px
      ) !important;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
      clip-path: inset(0px -10px 0px 0px);

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_view_MOBILE}px !important;
          max-width: ${colWidth_view_MOBILE}px !important;
          left: calc(
            ${colWidth_favorite_MOBILE}px + ${colWidth_company_MOBILE}px +
              ${colWidth_position_MOBILE}px + ${colWidth_edit_MOBILE}px
          ) !important;

          box-shadow: none;
          clip-path: none;
        }
      }
    }
    &.applied {
      min-width: ${colWidth_applied}px;
      max-width: ${colWidth_applied}px;
      text-align: center;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_applied_MOBILE}px !important;
          max-width: ${colWidth_applied_MOBILE}px !important;
          display: none !important;
        }
      }
    }
    &.appDate {
      min-width: ${colWidth_appDate}px;
      max-width: ${colWidth_appDate}px;
      text-align: center;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_appDate_MOBILE}px !important;
          max-width: ${colWidth_appDate_MOBILE}px !important;
          display: none !important;
        }
      }
    }
    &.city {
      min-width: ${colWidth_city}px;
      max-width: ${colWidth_city}px;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_city_MOBILE}px !important;
          max-width: ${colWidth_city_MOBILE}px !important;
          display: none !important;
        }
      }
    }
    &.locationState {
      min-width: ${colWidth_locationState}px;
      max-width: ${colWidth_locationState}px;
      text-align: center;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_locationState_MOBILE}px !important;
          max-width: ${colWidth_locationState_MOBILE}px !important;
          display: none !important;
        }
      }
    }
    &.remote {
      min-width: ${colWidth_remote}px;
      max-width: ${colWidth_remote}px;
      text-align: center;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_remote_MOBILE}px !important;
          max-width: ${colWidth_remote_MOBILE}px !important;
          display: none !important;
        }
      }
    }
    &.status {
      min-width: ${colWidth_status}px;
      max-width: ${colWidth_status}px;
      text-align: center;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_status_MOBILE}px !important;
          max-width: ${colWidth_status_MOBILE}px !important;
          display: none !important;
        }
      }
    }
    &.result {
      min-width: ${colWidth_result}px;
      max-width: ${colWidth_result}px;
      text-align: center;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_result_MOBILE}px !important;
          max-width: ${colWidth_result_MOBILE}px !important;
          display: none !important;
        }
      }
    }
    &.jobType {
      min-width: ${colWidth_jobType}px;
      max-width: ${colWidth_jobType}px;
      text-align: center;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_jobType_MOBILE}px !important;
          max-width: ${colWidth_jobType_MOBILE}px !important;
          display: none !important;
        }
      }
    }
    &.jobSite {
      min-width: ${colWidth_jobSite}px;
      max-width: ${colWidth_jobSite}px;
      text-align: center;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_jobSite_MOBILE}px !important;
          max-width: ${colWidth_jobSite_MOBILE}px !important;
          display: none !important;
        }
      }
    }
    &.link {
      min-width: ${colWidth_link}px;
      max-width: ${colWidth_link}px;
      text-align: center;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_link_MOBILE}px !important;
          max-width: ${colWidth_link_MOBILE}px !important;
          display: none !important;
        }
      }
    }
    &.pay {
      min-width: ${colWidth_pay}px;
      max-width: ${colWidth_pay}px;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_pay_MOBILE}px !important;
          max-width: ${colWidth_pay_MOBILE}px !important;
          display: none !important;
        }
      }
    }
  `,
  ST_cell_sticky: styled.div`
    min-height: 32px;
    max-height: 32px;
    display: flex !important;
    align-items: center;
    white-space: nowrap;

    span {
      &.sticky {
        max-width: 90%;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }
    }

    background-color: ${(props) => props.theme.colors.tableAlternateRowColor};

    &.center {
      justify-content: center;
    }
    &.favorite {
      min-width: ${colWidth_favorite}px !important;
      max-width: ${colWidth_favorite}px !important;
      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_favorite_MOBILE}px !important;
          max-width: ${colWidth_favorite_MOBILE}px !important;
        }
      }
    }
    &.company {
      min-width: ${colWidth_company}px !important;
      max-width: ${colWidth_company}px !important;
      left: calc(${colWidth_favorite}px) !important;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_company_MOBILE}px !important;
          max-width: ${colWidth_company_MOBILE}px !important;
          left: calc(${colWidth_favorite_MOBILE}px) !important;
        }
      }
    }
    &.position {
      min-width: ${colWidth_position}px !important;
      max-width: ${colWidth_position}px !important;
      left: calc(${colWidth_favorite}px + ${colWidth_company}px) !important;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_position_MOBILE}px !important;
          max-width: ${colWidth_position_MOBILE}px !important;
          left: calc(
            ${colWidth_favorite_MOBILE}px + ${colWidth_company_MOBILE}px
          ) !important;
        }
      }
    }
    &.edit {
      min-width: ${colWidth_edit}px !important;
      max-width: ${colWidth_edit}px !important;
      left: calc(
        ${colWidth_favorite}px + ${colWidth_company}px + ${colWidth_position}px
      ) !important;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_edit_MOBILE}px !important;
          max-width: ${colWidth_edit_MOBILE}px !important;
          left: calc(
            ${colWidth_favorite_MOBILE}px + ${colWidth_company_MOBILE}px +
              ${colWidth_position_MOBILE}px
          ) !important;
        }
      }
    }
    &.view {
      min-width: ${colWidth_view}px !important;
      max-width: ${colWidth_view}px !important;
      left: calc(
        ${colWidth_favorite}px + ${colWidth_company}px + ${colWidth_position}px +
          ${colWidth_edit}px
      ) !important;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
      clip-path: inset(0px -10px 0px 0px);

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_view_MOBILE}px !important;
          max-width: ${colWidth_view_MOBILE}px !important;
          left: calc(
            ${colWidth_favorite_MOBILE}px + ${colWidth_company_MOBILE}px +
              ${colWidth_position_MOBILE}px + ${colWidth_edit_MOBILE}px
          ) !important;

          box-shadow: none;
          clip-path: none;
        }
      }
    }
  `,
  ST_tr: styled.div`
    color: ${(props) => props.theme.colors.textOnBgColor};
    display: flex;
    align-items: center;
    min-height: 32px;
    max-height: 32px;
    max-width: ${maxW}px !important;

    border-top: 3px solid ${(props) => props.theme.colors.backgroundColor};
    border-bottom: 3px solid ${(props) => props.theme.colors.backgroundColor};
    background-color: ${(props) => props.theme.colors.tableAlternateRowColor};

    &:hover {
      background-color: ${(props) =>
        props.theme.colors.rowHoverColorPrimary} !important;
      .odd {
        background-color: ${(props) =>
          props.theme.colors.rowHoverColorPrimary} !important;
      }
      .even {
        background-color: ${(props) =>
          props.theme.colors.rowHoverColorPrimary} !important;
      }
    }

    @media (min-height: 421px) {
      @media (max-width: 800px) {
        max-width: ${maxW_MOBILE}px !important;
      }
    }
  `,
  ST_cell_standard: styled.div`
    min-height: 32px;
    max-height: 32px;
    display: flex !important;
    align-items: center;
    white-space: nowrap;

    &.center {
      justify-content: center;
    }

    &.applied {
      min-width: ${colWidth_applied}px;
      max-width: ${colWidth_applied}px;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_applied_MOBILE}px !important;
          max-width: ${colWidth_applied_MOBILE}px !important;
          display: none !important;
        }
      }
    }
    &.appDate {
      min-width: ${colWidth_appDate}px;
      max-width: ${colWidth_appDate}px;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_appDate_MOBILE}px !important;
          max-width: ${colWidth_appDate_MOBILE}px !important;
          display: none !important;
        }
      }
    }
    &.city {
      min-width: ${colWidth_city}px;
      max-width: ${colWidth_city}px;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_city_MOBILE}px !important;
          max-width: ${colWidth_city_MOBILE}px !important;
          display: none !important;
        }
      }
    }
    &.locationState {
      min-width: ${colWidth_locationState}px;
      max-width: ${colWidth_locationState}px;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_locationState_MOBILE}px !important;
          max-width: ${colWidth_locationState_MOBILE}px !important;
          display: none !important;
        }
      }
    }
    &.remote {
      min-width: ${colWidth_remote}px;
      max-width: ${colWidth_remote}px;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_remote_MOBILE}px !important;
          max-width: ${colWidth_remote_MOBILE}px !important;
          display: none !important;
        }
      }
    }
    &.status {
      min-width: ${colWidth_status}px;
      max-width: ${colWidth_status}px;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_status_MOBILE}px !important;
          max-width: ${colWidth_status_MOBILE}px !important;
          display: none !important;
        }
      }
    }
    &.result {
      min-width: ${colWidth_result}px;
      max-width: ${colWidth_result}px;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_result_MOBILE}px !important;
          max-width: ${colWidth_result_MOBILE}px !important;
          display: none !important;
        }
      }
    }
    &.jobType {
      min-width: ${colWidth_jobType}px;
      max-width: ${colWidth_jobType}px;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_jobType_MOBILE}px !important;
          max-width: ${colWidth_jobType_MOBILE}px !important;
          display: none !important;
        }
      }
    }
    &.jobSite {
      min-width: ${colWidth_jobSite}px;
      max-width: ${colWidth_jobSite}px;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_jobSite_MOBILE}px !important;
          max-width: ${colWidth_jobSite_MOBILE}px !important;
          display: none !important;
        }
      }
    }
    &.link {
      min-width: ${colWidth_link}px;
      max-width: ${colWidth_link}px;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_link_MOBILE}px !important;
          max-width: ${colWidth_link_MOBILE}px !important;
          display: none !important;
        }
      }
    }
    &.pay {
      min-width: ${colWidth_pay}px;
      max-width: ${colWidth_pay}px;

      @media (min-height: 421px) {
        @media (max-width: 800px) {
          min-width: ${colWidth_pay_MOBILE}px !important;
          max-width: ${colWidth_pay_MOBILE}px !important;
          display: none !important;
        }
      }
    }
  `,
  ST_cell_status: styled.div`
    padding: 3px 8px;
    white-space: nowrap;

    &.center {
      text-align: center;
    }

    &.view {
      padding: 0px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    &.min100 {
      min-width: 100px;
    }

    &.min80 {
      min-width: 80px;
    }

    &.border-right {
      border-right: solid 1px gray;
    }

    .icon-container {
      max-height: 26px;
      max-width: 26px;
      min-height: 26px;
      min-width: 26px;
      margin-top: 1px;

      .favorite-icon {
        min-height: 26px;
        min-width: 26px;
        max-height: 26px;
        max-width: 26px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        cursor: pointer;
      }
    }

    .job-status-res-container {
      padding-bottom: 5px;
      .job-status-res {
        padding: 0px 8px 4px 8px;
        border: 2px solid;
        border-radius: 50px;
        font-weight: 500;
        font-size: 14px;
        &.waiting {
          border-color: ${(props) =>
            props.theme.colors.waiting_Border_true} !important;
          background-color: ${(props) =>
            props.theme.colors.waiting_Bg} !important;
          color: ${(props) =>
            props.theme.colors.waiting_Border_true} !important;
          &.result {
            border-color: rgba(150, 150, 150, 0) !important;
            color: ${(props) => props.theme.colors.waiting_Bg_true} !important;
            background-color: transparent !important;
            font-style: italic;
          }
          &.resolved {
            border-color: rgba(150, 150, 150, 0) !important;
            color: ${(props) => props.theme.colors.waiting_Bg_true} !important;
            background-color: transparent !important;
            font-style: italic;
          }
        }
        &.applied {
          border-color: ${(props) =>
            props.theme.colors.waiting_Border_true} !important;
          background-color: ${(props) =>
            props.theme.colors.waiting_Bg} !important;
          color: ${(props) =>
            props.theme.colors.waiting_Border_true} !important;
          &.result {
            border-color: rgba(150, 150, 150, 0) !important;
            color: ${(props) => props.theme.colors.waiting_Bg_true} !important;
            background-color: transparent !important;
            font-style: italic;
          }
          &.resolved {
            border-color: rgba(150, 150, 150, 0) !important;
            color: ${(props) => props.theme.colors.waiting_Bg_true} !important;
            background-color: transparent !important;
            font-style: italic;
          }
        }
        &.viewed {
          border-color: ${(props) =>
            props.theme.colors.viewed_Border_true} !important;
          color: ${(props) => props.theme.colors.viewed_Border_true};
          background-color: ${(props) =>
            props.theme.colors.viewed_Bg} !important;
        }
        &.interviewed {
          border-color: ${(props) =>
            props.theme.colors.interviewed_Border_true} !important;
          color: ${(props) => props.theme.colors.interviewed_Border_true};
          background-color: ${(props) =>
            props.theme.colors.interviewed_Bg} !important;
        }
        &.offered {
          border-color: ${(props) =>
            props.theme.colors.offered_Border_true} !important;
          color: ${(props) => props.theme.colors.offered_Border_true};
          background-color: ${(props) =>
            props.theme.colors.offered_Bg} !important;
        }
        &.accepted {
          border-color: ${(props) =>
            props.theme.colors.accepted_Border_true} !important;
          color: ${(props) => props.theme.colors.accepted_Border_true};
          background-color: ${(props) =>
            props.theme.colors.accepted_Bg} !important;
        }
        &.passed {
          border-color: ${(props) =>
            props.theme.colors.passed_Border_true} !important;
          color: ${(props) => props.theme.colors.passed_Border_true};
          background-color: ${(props) =>
            props.theme.colors.passed_Bg} !important;
        }
        &.rejected {
          border-color: ${(props) =>
            props.theme.colors.rejected_Border_true} !important;
          color: ${(props) => props.theme.colors.rejected_Border_true};
          background-color: ${(props) =>
            props.theme.colors.rejected_Bg} !important;
          &.status {
            border-color: rgba(150, 150, 150, 0) !important;
            color: rgba(220, 20, 60, 0.7);
            background-color: transparent !important;
            font-style: italic;
          }
        }
        &.closed {
          border-color: ${(props) =>
            props.theme.colors.rejected_Border_true} !important;
          color: ${(props) => props.theme.colors.rejected_Border_true};
          background-color: ${(props) =>
            props.theme.colors.rejected_Bg} !important;
          &.status {
            border-color: rgba(150, 150, 150, 0) !important;
            color: ${(props) => props.theme.colors.rejected_Text_status_col};
            background-color: transparent !important;
            font-style: italic;
          }
        }
      }
    }
  `,
  table_hr: styled.div`
    background-color: ${(props) => props.theme.colors.backgroundColor};
    max-height: 3px;
    min-height: 3px;
    max-width: 500px;
    min-width: 500px;
    margin: 10px auto;
    border-radius: 20px;
  `,
  paginationButtonsContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin: auto;
    border-radius: 10px;
    overflow: hidden;
    // border: solid 2px ${(props) => props.theme.colors.primaryColor};
    background-color: ${(props) => props.theme.colors.tableAlternateRowColor};
  `,
  paginationButton: styled.button`
    background-color: ${(props) => props.theme.colors.paginationButtonBgColor};
    color: ${(props) => props.theme.colors.paginationButtonColor};
    cursor: pointer;
    outline: none;
    font-size: 20px;
    padding: 4px 8px;
    &:hover {
      color: ${(props) => props.theme.colors.primaryColor};
    }
    &.RW {
      border-top-left-radius: inherit;
      border-bottom-left-radius: inherit;
    }
    &.FF {
      border-top-right-radius: inherit;
      border-bottom-right-radius: inherit;
    }
  `,
  boardStats: styled.div`
    border: 2px solid ${(props) => props.theme.colors.subtextOnBgColor};
    background-color: ${(props) => props.theme.colors.tableAlternateRowColor};
    border-radius: 10px;
    padding: 8px 6px;
    margin: 0px 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    .job-stats {
      font-weight: 500;
      padding: 3px 10px;
      border-right: 2px solid ${(props) => props.theme.colors.subtextOnBgColor};
    }
  `,

  // ---------- BOARD PAGE ----------
  boardLinkContainer: styled.div`
    color: ${(props) => props.theme.colors.textOnBgColor} !important;
    background-color: ${(props) =>
      props.theme.colors.boardLinkBgColor} !important;
    border-radius: 10px;
    box-shadow: ${(props) => props.theme.colors.containerShadow} !important;
    min-width: 450px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 8px 20px 5px 0px;
    margin: 10px 4px;
    transition: all 0.12s ease;
    .board-link-name {
      text-decoration: underline solid 3px
        ${(props) => props.theme.colors.subtextOnBgColor} !important;
      text-underline-offset: 1px;
    }
    @media (min-height: 421px) {
      @media (min-width: 800px) {
        &:hover {
          background: ${(props) => props.theme.colors.glassGradient};
          background-color: ${(props) =>
            props.theme.colors.rowHoverColorPrimary} !important;
          border-color: ${(props) =>
            props.theme.colors.primaryColor} !important;
          padding: 12px 24px 9px 4px;
          margin: 6px 0px;

          .board-link-name {
            text-decoration: underline solid 3px
              ${(props) => props.theme.colors.primaryColor} !important;
            text-underline-offset: 1px;
          }
        }
      }
    }

    @media (min-height: 421px) {
      @media (max-width: 800px) {
        min-width: 80%;
      }
    }
  `,

  // ---------- HOME ----------
  homeContentContainer: styled.div`
    padding: 0px 40px;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: ${(props) =>
      props.theme.colors.mainContainerBG} !important;
    box-shadow: ${(props) => props.theme.colors.containerShadow} !important;

    overflow: overlay;

    // firefox does not allow overflow:overlay
    @-moz-document url-prefix() {
      overflow: scroll;
      border-radius: 0px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${(props) =>
        props.theme.colors.primaryColorFaded} !important;
      &:hover {
        background-color: ${(props) =>
          props.theme.colors.primaryColor} !important;
      }
    }
    ::-webkit-scrollbar-track {
      margin-top: 40px;
      margin-bottom: 40px;
    }

    &.boards-container {
      border-radius: 20px !important;
      ::-webkit-scrollbar-track {
        margin-top: 5px;
        margin-bottom: 5px;
      }
    }

    @media (min-height: 421px) {
      @media (max-width: 800px) {
        min-width: 80%;
        padding: 0px 20px !important;
        border-radius: 10px;
        ::-webkit-scrollbar-track {
          margin-top: 0px;
          margin-bottom: 0px;
        }
      }
    }
  `,
  boardLinkHome: styled.div`
    color: ${(props) => props.theme.colors.textOnBgColor} !important;
    background-color: ${(props) =>
      props.theme.colors.quickLinkBgColor} !important;
    border-radius: 10px;
    padding: 5px 20px 6px 20px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: 10px;
    box-shadow: ${(props) => props.theme.colors.containerShadow} !important;
    transition: all 0.23s ease;
    .board-link-name {
      text-decoration: underline solid 3px
        ${(props) => props.theme.colors.subtextOnBgColor} !important;
      text-underline-offset: 1px;
    }

    @media (min-height: 421px) {
      @media (min-width: 801px) {
        &:hover {
          background: ${(props) => props.theme.colors.glassGradient};
          background-color: ${(props) =>
            props.theme.colors.rowHoverColorPrimary} !important;
          padding: 9px 24px 10px 24px;
          margin: 6px;
          .board-link-name {
            text-decoration: underline solid 3px
              ${(props) => props.theme.colors.primaryColor} !important;
            text-underline-offset: 1px;
          }
        }
      }
    }

    @media (min-height: 421px) {
      @media (max-width: 800px) {
        &:focus {
          background: ${(props) => props.theme.colors.glassGradient};
          background-color: ${(props) =>
            props.theme.colors.rowHoverColorPrimary} !important;
          padding: 9px 24px 10px 24px;
          margin: 6px;
          .board-link-name {
            text-decoration: underline solid 3px
              ${(props) => props.theme.colors.primaryColor} !important;
            text-underline-offset: 1px;
          }
        }
      }
    }
  `,
  homeSectionTitle: styled.div`
    font-size: 22px;
    color: ${(props) => props.theme.colors.textOnBgColor} !important;
    text-decoration: underline solid 3px
      ${(props) => props.theme.colors.primaryColor} !important;
    text-underline-offset: 1px;
    margin-bottom: 0px !important;
  `,
  jobSiteContainer: styled.div`
    border-radius: 10px;
    margin: 0px 10px;
    overflow: hidden;
    background-color: ${(props) => props.theme.colors.jobsiteBgColor};
    transition: transform 0.23s ease;
    box-shadow: ${(props) => props.theme.colors.containerShadow} !important;

    .jobsite-name {
      font-size: 15px;
      color: ${(props) => props.theme.colors.textOnBgColor};
      padding: 5px 0px;
    }

    &:hover {
      transform: translateY(-4%);
    }

    @media (min-height: 421px) {
      @media (max-width: 800px) {
        &:hover {
          transform: translateY(0%);
        }
      }
    }
  `,
  quickLink: styled.div`
    background-color: ${(props) =>
      props.theme.colors.quickLinkBgColor} !important;
    color: ${(props) => props.theme.colors.textOnBgColor} !important;
    box-shadow: ${(props) => props.theme.colors.containerShadow} !important;
    font-size: 16px;
    padding: 5px 10px;
    margin: 6px 10px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  quicklinksIcon: styled.div`
    opacity: 0.3;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 7px;
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
      opacity: 1;
      color: ${(props) => props.theme.colors.primaryColor} !important;
    }
    a {
      text-decoration: none;
      color: inherit !important;
    }
  `,
  quickLinkTextarea: styled.textarea`
    background-color: transparent !important;
    color: ${(props) => props.theme.colors.inputTextColor} !important;
    border-bottom: solid 2px ${(props) => props.theme.colors.fadedInputColor} !important;
    border: none;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    outline: none;
    padding: 7px 12px;
    margin: 2px 0px 7px 0px;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    font-size: 16px;
    transition: all 0.15s ease;
    height: 80px;
    min-height: 300px;
    max-height: 300px;
    resize: vertical;
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) =>
        props.theme.colors.primaryColorFaded} !important;
      &:hover {
        cursor: pointer !important;
        background-color: ${(props) =>
          props.theme.colors.primaryColor} !important;
      }
    }
    ::-webkit-scrollbar-corner {
      background-color: transparent !important;
    }
    &:focus {
      background-color: ${(props) =>
        props.theme.colors.inputBackgroundColor} !important;
      border-color: ${(props) => props.theme.colors.primaryColor} !important;
    }
  `,
  fadeContainer: styled.div`
  position: sticky;
  width:100%;
  min-width:100%;
  top: 0px;
  min-height 30px;
  max-height 30px;
  z-index:2;
  background: linear-gradient(${(props) =>
    props.theme.colors.mainContainerBG},${(props) =>
    props.theme.colors.mainContainerBG}, transparent);

    &.bottom{
      top: unset;
      bottom: 0px;
      background: linear-gradient(
        transparent,${(props) => props.theme.colors.mainContainerBG},${(
    props
  ) => props.theme.colors.mainContainerBG});
    }
  `,

  // ---------- SETTINGS ----------
  themeChangeButton: styled.button`
    border: solid 3px;
    border-radius: 6px;
    padding: 5px 12px;
    margin: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: all ease 0.2s;

    @media (min-height: 421px) {
      @media (min-width: 800px) {
        &:hover {
          padding: 8px 15px;
          margin: 7px;
        }
      }
    }

    @media (min-height: 421px) {
      @media (max-width: 800px) {
        margin: 5px;
        min-width: 160px;
      }
    }
  `,
  settingsInputContainer: styled.div`
    background-color: ${(props) =>
      props.theme.colors.quickLinkBgColor} !important;
    border: none;
    border-radius: 10px;
    box-shadow: ${(props) => props.theme.colors.containerShadow} !important;
  `,

  // ---------- MISC ----------
  Loader: styled.div`
    color: ${(props) => props.theme.colors.primaryColor} !important;
  `,
  primaryColorUnderline: styled.div`
    text-decoration: underline solid 4px
      ${(props) => props.theme.colors.primaryColor} !important;
    text-underline-offset: 0.5px;

    // firefox does not allow custom underlines
    @-moz-document url-prefix() {
      text-decoration: none !important;
    }
  `,
  primaryBorderColor: styled.div`
    border-color: ${(props) => props.theme.colors.primaryColor} !important;
  `,
  listingLink: styled.a`
    color: ${(props) => props.theme.colors.primaryColor} !important;
    text-decoration: none;
    border: none;
    &:hover {
      text-decoration: underline;
    }
  `,
  modalBackground: styled.div`
    justify-content: center;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    z-index: 5;
    background-color: ${(props) => props.theme.colors.modalBackgroundColor};

    // firefox specific
    @-moz-document url-prefix() {
      background-color: rgba(100, 100, 100, 0.8);
    }
  `,
  footerContent: styled.span`
    color: ${(props) => props.theme.colors.subtextOnBgColor} !important;
    display: flex;
    padding: 10px;
    line-height: 22px;
    &:hover {
      .made-by {
        opacity: 1;
        color: ${(props) => props.theme.colors.textOnBgColor} !important;
      }
    }
  `,
  MadeBy: styled.span`
    opacity: 0.5;
    color: ${(props) => props.theme.colors.subtextOnBgColor} !important;
    &:hover {
      color: ${(props) => props.theme.colors.primaryColor} !important;
    }
  `,
  GitHubA: styled.a`
    opacity: 0.5;
    color: ${(props) => props.theme.colors.subtextOnBgColor} !important;
    &:hover {
      opacity: 1;
      color: ${(props) => props.theme.colors.primaryColor} !important;
    }
  `,
  KFsvg: styled.svg`
    opacity: 0.5;
    background-color: ${(props) =>
      props.theme.colors.subtextOnBgColor} !important;
    &:hover {
      opacity: 1;
      background-color: ${(props) =>
        props.theme.colors.primaryColor} !important;
    }
  `,
  KFg: styled.g`
    fill: ${(props) => props.theme.colors.backgroundColor} !important;
  `,
  gradientText: styled.h1`
    background-color: ${(props) => props.theme.colors.primaryColor};
    background-image: linear-gradient(
      45deg,
      ${(props) => props.theme.colors.primaryGradientColor} 5%,
      ${(props) => props.theme.colors.secondaryGradientColor},
      ${(props) => props.theme.colors.secondaryGradientColor},
      ${(props) => props.theme.colors.primaryGradientColor} 95%
    );
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    font-weight: 700;
    font-size: 32px;
    margin: 15px;
    font-family: "poppins", sans-serif;
  `,
};

export default SC;
