/* eslint-disable react/jsx-pascal-case */
import React from "react";
import SC from "../../../../themes/StyledComponents";
import PayAmountInput from "./paycomponents/PayAmountInput";
import PayScaleInput from "./paycomponents/PayScaleInput";
import PayTypeInput from "./paycomponents/PayTypeInput";

export default function PayInput({
  payType,
  setPayType,
  payScale,
  setPayScale,
  setPayMin,
  setPayMax,
  setPay,
  payMin,
  payMax,
  pay,
}) {
  return (
    <div className="job-input-container-w-radio">
      <span className="input-label mobile-mb">Pay</span>
      <SC.jobRadioContainer className="job-radio-container">
        {/* PAY TYPE */}
        <PayTypeInput payType={payType} setPayType={setPayType} />
        {/* PAY SCALE */}
        <PayScaleInput payScale={payScale} setPayScale={setPayScale} />
        {/* PAY AMOUNT */}
        <PayAmountInput
          payScale={payScale}
          payType={payType}
          setPayMin={setPayMin}
          setPayMax={setPayMax}
          setPay={setPay}
          payMin={payMin}
          payMax={payMax}
          pay={pay}
        />
      </SC.jobRadioContainer>
    </div>
  );
}
