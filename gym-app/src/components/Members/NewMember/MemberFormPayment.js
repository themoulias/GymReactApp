import React from "react";

const MemberFormPayment = ({ handleInputChange, data }) => {
  return (
    <div>      
      <label>Amount (€)</label>
      <input
        type="text"
        name="amount"
        onChange={handleInputChange}
        value={data.amount}
      />
      <label>Signup-Fee (€)</label>
      <input
        type="text"
        name="signupFee"
        onChange={handleInputChange}
        value={data.signupFee}
      />
      <label>Payment Date</label>
      <input
        type="Date"
        name="paymentDate"
        //min="1920-01-01"
        //max="2004-12-31"
        value={data.paymentDate}
        onChange={handleInputChange}
      />

      <label>Payment Method</label>
      <div className="members-filter__form">
        <select
          name="paymentMethod"
          onChange={handleInputChange}
          value={data.paymentMethod}
        >
          <option value="Cash">Cash</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Paypal">Paypal</option>
        </select>
      </div>
    </div>
  );
};

export default MemberFormPayment;
