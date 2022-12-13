import React from "react";

const MemberFormMemberShip = ({ handleInputChange, data }) => {
  return (
    <div>      
      <label>Membership Type</label>
      <div className="members-filter__form">
        <select onChange={handleInputChange} name="membershipType" value={data.membershipType}>
          <option value="Personal">Personal</option>
          <option value="Free Workout">Free Workout</option>
          <option value="Full">Full</option>
        </select>
      </div>
      <label>Membership Period</label>
      <div className="members-filter__form">
        <select onChange={handleInputChange} name="period" value={data.period}>
          <option value="1 Week">1 Week</option>
          <option value="1 Month">1 Month</option>
          <option value="3 Months">3 Months</option>
          <option value="6 Months">6 Months</option>
          <option value="9 Months">9 Months</option>
          <option value="1 Year">1 Year</option>
        </select>
      </div>{" "}
      <label>Active Membership</label>
      <div className="members-filter__form">
        <select
          name="active"
          onChange={handleInputChange}
          value= {data.active}
        >
          <option value="true">Active</option>
          <option value="false">Not Active</option>
        </select>
      </div>
    </div>
  );
};

export default MemberFormMemberShip;
