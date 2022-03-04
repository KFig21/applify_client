/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import SC from "../../../themes/StyledComponents";
import { Create, Visibility } from "@material-ui/icons";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function QuickLink({ link, setQuickLinkModal, setLinkToEdit }) {
  const [floating, setFloating] = useState(false);
  const handleLinkToEdit = () => {
    setLinkToEdit(link);
    setQuickLinkModal(true);
  };

  const handleCopyValue = () => {
    navigator.clipboard.writeText(link.value);
    setFloating(true);
    setTimeout(() => {
      setFloating(false);
    }, 1000);
  };

  return (
    <SC.quickLink>
      <span>{link.name}</span>
      <div className="quicklinks-icons-container">
        {link.type === "link" && link.value !== "" && (
          <SC.quicklinksIcon>
            <a href={link.value} target="_blank" rel="noopener noreferrer">
              <Visibility className="quicklinks-icon" />
            </a>
          </SC.quicklinksIcon>
        )}
        {link.value !== "" && (
          <SC.quicklinksIcon
            className="copy-icon-container"
            value={link.value}
            onClick={() => handleCopyValue()}
          >
            <ContentCopyIcon className="quicklinks-icon" />
            <span className={`floating-text ${floating && "active"}`}>
              Copied!
            </span>
          </SC.quicklinksIcon>
        )}
        <SC.quicklinksIcon>
          <Create
            className="quicklinks-icon"
            onClick={() => handleLinkToEdit()}
          />
        </SC.quicklinksIcon>
      </div>
    </SC.quickLink>
  );
}
