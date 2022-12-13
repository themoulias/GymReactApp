import React from "react";

const MemberFormAddress = ({handleInputChange, data}) =>{//, addressData}) => {
  return (
    <div>
      {/* <h2>Address:</h2> */}
      <label>City</label>
      <input
        type="text"
        name="city"
        onChange={handleInputChange}
        value={data.city}
      />
      <label>Street</label>
        <input
          type="text"
          name = "street"
          onChange={handleInputChange}
          value={data.street}
        />
        <label>Street Number</label>
        <input
          type="text"
          name = "streetNumber"
          onChange={handleInputChange}
          value={data.streetNumber}
        />
        <label>Postal Code</label>
        <input
          type="text"
          name = "postCode"
          onChange={handleInputChange}
          value={data.postCode}
        />
    </div>
  );
};
export default MemberFormAddress;
