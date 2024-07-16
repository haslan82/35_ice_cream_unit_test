import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked)
  return (
    <div className="d-flex mb-5 justify-content-center gap-3 align-items-center">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        id="terms"
        type="checkbox"
        className="form-check-input"
      />
      <label htmlFor="terms">Koşulları okudum ve kabul ediyorum</label>
      <button disabled={!isChecked} className="btn btn-primary">Siparişi Onayla</button>
    </div>
  );
};

export default Form;
