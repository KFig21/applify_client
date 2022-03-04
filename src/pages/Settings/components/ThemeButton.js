/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import SC from "../../../themes/StyledComponents";
import "./ThemeButton.scss";
import { updateTheme } from "../../../store/actions/authActions";
import darkThemeAqua from "../../../themes/DarkTheme_Aqua";
import darkThemeGreen from "../../../themes/DarkTheme_Green";
import lightThemeGreen from "../../../themes/LightTheme_Green";
import { useDispatch, useSelector } from "react-redux";
import { RadioButtonChecked, RadioButtonUnchecked } from "@material-ui/icons";
import { changeTheme } from "../../../themes/ThemeChange";
import lightThemeRoyal from "../../../themes/LightTheme_Royal";
import darkThemeYellow from "../../../themes/DarkTheme_Yellow";
import lightThemeViolet from "../../../themes/LightTheme_Violet";

export default function ThemeButton({ name, setTheme }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [buttonTheme, setButtonTheme] = useState(darkThemeGreen);

  const handleThemeChange = (theme) => {
    changeTheme(setTheme, theme, user);
  };

  const changeTheme = (setTheme, newTheme, user) => {
    if (newTheme.toLowerCase() === "dark aqua") {
      setTheme(darkThemeAqua);
      dispatch(
        updateTheme({
          theme: "dark aqua",
          user: user._id,
        })
      );
    } else if (newTheme.toLowerCase() === "dark green") {
      setTheme(darkThemeGreen);
      dispatch(
        updateTheme({
          theme: "dark green",
          user: user._id,
        })
      );
    } else if (newTheme.toLowerCase() === "dark yellow") {
      setTheme(darkThemeYellow);
      dispatch(
        updateTheme({
          theme: "dark yellow",
          user: user._id,
        })
      );
    } else if (newTheme.toLowerCase() === "light royal") {
      setTheme(lightThemeRoyal);
      dispatch(
        updateTheme({
          theme: "light royal",
          user: user._id,
        })
      );
    } else if (newTheme.toLowerCase() === "light green") {
      setTheme(lightThemeGreen);
      dispatch(
        updateTheme({
          theme: "light green",
          user: user._id,
        })
      );
    } else if (newTheme.toLowerCase() === "light violet") {
      setTheme(lightThemeViolet);
      dispatch(
        updateTheme({
          theme: "light violet",
          user: user._id,
        })
      );
    } else {
      setTheme(darkThemeYellow);
      dispatch(
        updateTheme({
          theme: "dark yellow",
          user: user._id,
        })
      );
    }
  };

  const handleButtonTheme = async () => {
    await changeTheme(setButtonTheme, name);
  };

  useEffect(() => {
    handleButtonTheme();
  }, [name]);

  return (
    <SC.themeChangeButton
      className={`theme-button `}
      onClick={() => handleThemeChange(name)}
      style={{
        backgroundColor: buttonTheme.colors.rowHoverColorPrimary,
        borderColor: buttonTheme.colors.primaryColor,
        color: buttonTheme.colors.textOnBgColor,
      }}
    >
      {user.theme === name.toLowerCase() ? (
        <RadioButtonChecked
          className={`theme-radio-icon`}
          style={{
            color: buttonTheme.colors.primaryColor,
          }}
        />
      ) : (
        <RadioButtonUnchecked
          className={`theme-radio-icon`}
          style={{
            color: buttonTheme.colors.primaryColor,
          }}
        />
      )}
      <span className="theme-name">{name}</span>
    </SC.themeChangeButton>
  );
}
