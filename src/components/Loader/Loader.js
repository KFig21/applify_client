import React, { useContext, useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { ThemeContext } from "styled-components";
import SC from "../../themes/StyledComponents";

export default function Loader({ type }) {
  const themeContext = useContext(ThemeContext);
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if(type === 'home' || type === 'board' || type === 'full-screen'){
        setShowMessage(true);
      }
    }, 8000);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <SC.Loader className={"loader-" + type}>
      <ReactLoading type={"bars"} color={themeContext.colors.primaryColor} />
      {showMessage && <span className="message">spinning up the server, may take a minute</span>}
    </SC.Loader>
  );
}
