import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  //! console.log(isChecked)
  const [isHover, setIsHover] = useState(false);
//! console.log(isHover)
  return (
    <div className="d-flex mb-5 justify-content-center gap-3 align-items-center">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        id="terms"
        type="checkbox"
        className="form-check-input"
      />
      <div className="wrapper">
        <p style={{ opacity: isHover ? 1 : 0 }}>
          Size gerçekten birşey teslim etmeyeceğiz
        </p>
        <label htmlFor="terms">Koşulları okudum ve kabul ediyorum</label>
      </div>
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        disabled={!isChecked}
        className="btn btn-primary"
      >
        Siparişi Onayla
      </button>
    </div>
  );
};

export default Form;
