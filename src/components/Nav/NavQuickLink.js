/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react'
import SC from '../../themes/StyledComponents';
import { Visibility } from "@material-ui/icons";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function NavQuickLink({link}) {
    const [floating, setFloating] = useState(false);

    const handleLinkCopy = (link) => {
      navigator.clipboard.writeText(link.value);
      setFloating(true);
      setTimeout(() => {
        setFloating(false);
      }, 1000);
    }
    
  return (
    <SC.navLinkSub className='NavQuickLink'>
        <SC.quicklinksIcon
            className="copy-icon-container"
            value={link.value}
            onClick={() => handleLinkCopy(link)}
        >
          <ContentCopyIcon className="quicklinks-icon" />
        </SC.quicklinksIcon>
        <div onClick={() => handleLinkCopy(link)}>
          <SC.navQuickLink className={`${floating && "active"}`}>
            {floating ? "Copied!" : link.name}
          </SC.navQuickLink>
        </div>
        <SC.quicklinksIcon className="NavQuickLink">
          {link.type === 'link' && <a href={link.value} target="_blank" rel="noopener noreferrer" style={{minWidth: "unset"}}>
            <Visibility className="quicklinks-icon" />
          </a>}
        </SC.quicklinksIcon>
    </SC.navLinkSub>
  )
}
