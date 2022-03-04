import darkThemeAqua from "./DarkTheme_Aqua";
import darkThemeGreen from "./DarkTheme_Green";
import darkThemeYellow from "./DarkTheme_Yellow";
import lightThemeGreen from "./LightTheme_Green";
import lightThemeRoyal from "./LightTheme_Royal";
import lightThemeViolet from "./LightTheme_Violet";

export const changeTheme = (setter, theme) => {
  if (theme.toLowerCase() === "dark aqua") {
    setter(darkThemeAqua);
  } else if (theme.toLowerCase() === "dark green") {
    setter(darkThemeGreen);
  } else if (theme.toLowerCase() === "dark yellow") {
    setter(darkThemeYellow);
  } else if (theme.toLowerCase() === "light royal") {
    setter(lightThemeRoyal);
  } else if (theme.toLowerCase() === "light green") {
    setter(lightThemeGreen);
  } else if (theme.toLowerCase() === "light violet") {
    setter(lightThemeViolet);
  } else {
    setter(darkThemeYellow);
  }
};
