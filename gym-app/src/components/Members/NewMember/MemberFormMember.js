import React from "react";

const MemberFormMember = ({ handleInputChange, data }) => {
  return (
    <div>
      <div>        
        <label>Name</label>
        <input
          type="text"
          name="memberName"          
          value={data.memberName}   
          onChange={handleInputChange}       
        />
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={data.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Date of Birth</label>
          <input
            type="Date"
            name="dob"
            min="1920-01-01"
            max="2004-12-31"
            value={data.dob}
            onChange={handleInputChange}
          />
        </div>       
        <label>Gender</label>
        <div className="members-filter__form">
          <select
            name="gender"
            onChange={handleInputChange}
            value={data.gender}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MemberFormMember;
