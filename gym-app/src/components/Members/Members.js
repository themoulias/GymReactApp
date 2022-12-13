import React, { useState } from "react";

import Member from "./Member";
import MembersFilter from "./MemberFilter";
import "./Member.css";

const Members = (props) => {

  const [isActive, setIsActive] = useState("true");
  const filterChangeHandler = (selectedActive) => {
    setIsActive(selectedActive);
  };

  const filteredMembers = props.items.filter((member) => {
    return member.active === isActive;
  });

  // Defines whose members gonna shown (active, not active, all members)
  let membersShown = props.items.map((member) => (
    <Member
      member={member}
      key={member.id}
      id={member.id}
      onDelete={props.onDeleteMember}
      onEditMember = {props.onEditMember}
    />
  ));

  // Defines whose members gonna shown (active, not active, all members)
  if (filteredMembers.length > 0) {
    membersShown = filteredMembers.map((member) => (
      <Member
        member={member}
        key={member.id}
        id={member.id}
        onDelete={props.onDeleteMember}        
        onEditMember = {props.onEditMember}
      />
    ));
  }
  const showAllMembers = (props) => {
    return (
      <div>
        <MembersFilter
          selected={isActive}
          onChangeFilter={filterChangeHandler}
        />
        {membersShown}
      </div>
    );
  };

  return <div>{showAllMembers(props)}</div>;
};

export default Members;
