/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePageLimit } from "../../../store/actions/authActions";
import SC from "../../../themes/StyledComponents";
import "../Settings.scss";

export default function LimitInput() {
  const user = useSelector((state) => state.user);
  const [limit, setLimit] = useState(user.limit);
  const dispatch = useDispatch();

  const handleLimit = async (val) => {
    setLimit(val);
    dispatch(
      await updatePageLimit({
        limit: val,
        user: user._id,
      })
    );
  };

  return (
    <div className="settings-input-container-w-radio">
      <SC.textOnBgColor className="input-label">
        Select page limit
      </SC.textOnBgColor>
      <SC.settingsInputContainer className="settings-radio-container">
        <div className="settings-radio-buttons-container">
          <div className="settings-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="limit-20"
              className={`settings-radio-label ${limit === 20}`}
            >
              20
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="limit"
              id="limit-20"
              className="settings-radio-input"
              onClick={() => handleLimit(20)}
            />
          </div>
          <div className="settings-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="limit-25"
              className={`settings-radio-label ${limit === 25}`}
            >
              25
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="limit"
              id="limit-25"
              className="settings-radio-input"
              onClick={() => handleLimit(25)}
            />
          </div>
          <div className="settings-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="limit-30"
              className={`settings-radio-label ${limit === 30}`}
            >
              30
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="limit"
              id="limit-30"
              className="settings-radio-input"
              onClick={() => handleLimit(30)}
            />
          </div>
          <div className="settings-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="limit-35"
              className={`settings-radio-label ${limit === 35}`}
            >
              35
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="limit"
              id="limit-35"
              className="settings-radio-input"
              onClick={() => handleLimit(35)}
            />
          </div>
          <div className="settings-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="limit-40"
              className={`settings-radio-label ${limit === 40}`}
            >
              40
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="limit"
              id="limit-40"
              className="settings-radio-input"
              onClick={() => handleLimit(40)}
            />
          </div>
          <div className="settings-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="limit-50"
              className={`settings-radio-label ${limit === 50}`}
            >
              50
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="limit"
              id="limit-50"
              className="settings-radio-input"
              onClick={() => handleLimit(50)}
            />
          </div>
          <div className="settings-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="limit-75"
              className={`settings-radio-label ${limit === 75}`}
            >
              75
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="limit"
              id="limit-75"
              className="settings-radio-input"
              onClick={() => handleLimit(75)}
            />
          </div>
          <div className="settings-radio-wrapper">
            <SC.jobFormRadioLabel
              htmlFor="limit-100"
              className={`settings-radio-label ${limit === 100}`}
            >
              100
            </SC.jobFormRadioLabel>
            <input
              type="radio"
              name="limit"
              id="limit-100"
              className="settings-radio-input"
              onClick={() => handleLimit(100)}
            />
          </div>
        </div>
      </SC.settingsInputContainer>
    </div>
  );
}
