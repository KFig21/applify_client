/* eslint-disable react/jsx-pascal-case */
import React from "react";
import SC from "../../../../../themes/StyledComponents";

export default function PayAmountInput({
  payScale,
  payType,
  setPayMin,
  setPayMax,
  setPay,
  payMin,
  payMax,
  pay,
}) {
  return (
    <>
      <SC.subtextOnBgColor>pay amount:</SC.subtextOnBgColor>
      <div className="job-pay-amount-container">
        {payScale === "amount" && payType !== "na" && (
          <div>
            <SC.authInput
              className="modal-input job pay"
              type="number"
              placeholder={
                payType === "salary"
                  ? "60,000"
                  : payType === "hourly"
                  ? "35.50"
                  : "n/a"
              }
              onChange={(e) => setPay(e.target.value)}
              defaultValue={pay !== undefined ? pay : null}
              required
            ></SC.authInput>
          </div>
        )}
        {payScale === "range" && payType !== "na" && (
          <div>
            {/* MIN */}
            <SC.authInput
              className="modal-input job pay"
              type="number"
              placeholder={
                payType === "salary"
                  ? "50,000"
                  : payType === "hourly"
                  ? "32.00"
                  : "n/a"
              }
              onChange={(e) => setPayMin(e.target.value)}
              defaultValue={payMin !== undefined ? payMin : null}
              required
            ></SC.authInput>
            <span>to</span>
            {/* MAX */}
            <SC.authInput
              className="modal-input job pay"
              type="number"
              placeholder={
                payType === "salary"
                  ? "70,000"
                  : payType === "hourly"
                  ? "37.50"
                  : "n/a"
              }
              onChange={(e) => setPayMax(e.target.value)}
              defaultValue={payMax !== undefined ? payMax : null}
              required
            ></SC.authInput>
          </div>
        )}
        {(payScale === "na" || payType === "na") && (
          <div className="pay-na">n/a</div>
        )}
      </div>
    </>
  );
}
