import React from "react";

import "./MembersFilter.css";

const MembersFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="members-filter">
      <div className="members-filter__control">
        <h2 >{""}</h2>
        <select value={props.selected} onChange={dropdownChangeHandler} >
          <option value="true">Active Memberships</option>
          <option value="false">Non Active Memberships</option>
          <option value="All_members">All Members </option>
        </select>
      </div>
    </div>
  );
};

export default MembersFilter;
