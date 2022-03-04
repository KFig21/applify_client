/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/authActions";
import "./Settings.scss";
import SC from "../../themes/StyledComponents";
import ThemeButton from "./components/ThemeButton";
import LimitInput from "./components/LimitInput";

export default function Settings({ setCurrentPage, setTheme }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const redirect = useNavigate();

  useEffect(() => {
    setCurrentPage("settings");
  });

  const handleLogout = () => {
    dispatch(logout());
    return redirect("/login");
  };

  return (
    <div className="settings-page">
      <SC.gradientText>Settings</SC.gradientText>
      <SC.homeContentContainer className="settings-container">
        <div className="settings-section-container">
          <div className="settings-input-container-w-radio">
            <SC.textOnBgColor className="input-label">
              Select a theme
            </SC.textOnBgColor>
            <SC.settingsInputContainer className="settings-input-container-w-radio">
              <div className="settings-radio-buttons-container">
                <ThemeButton name="Dark Aqua" setTheme={setTheme} />
                <ThemeButton name="Dark Green" setTheme={setTheme} />
                <ThemeButton name="Dark Yellow" setTheme={setTheme} />
                <ThemeButton name="Light Royal" setTheme={setTheme} />
                <ThemeButton name="Light Green" setTheme={setTheme} />
                <ThemeButton name="Light Violet" setTheme={setTheme} />
              </div>
            </SC.settingsInputContainer>
          </div>
        </div>
        <div className="settings-section-container">
          <LimitInput />
        </div>
        <div className="logout-button-container">
          <SC.primaryColorButtonInverse onClick={() => handleLogout()}>
            Logout
          </SC.primaryColorButtonInverse>
        </div>
      </SC.homeContentContainer>
    </div>
  );
}
