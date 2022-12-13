import React, { useState } from "react";

import "./NewMember.css";

import MemberForm from "./MemberForm";

const NewMember = (props) => {
  
  const [isEditing, setIsEditing] = useState(false);

  // const saveMemberDataHandler = (enteredMemberData) => {
  const saveMemberDataHandler = (memberData,addressData,membershipData,paymentData) => {

    // const memberData = {
    //   ...enteredMemberData,
    //   id: Math.floor(Math.random() * (10000 - 1 + 1) + 1),     
      
    // };
    // console.log("EDW");
    // console.log(addressData);
    // console.log(memberData);
    // console.log(membershipData);
    // console.log(paymentData);

    // props.onAddMember(memberData);
    props.onAddMember(memberData,addressData,membershipData,paymentData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-member">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Member</button>
      )}
      {isEditing && (
        <MemberForm
        onSaveMemberData={saveMemberDataHandler}
        onCancel={stopEditingHandler}
      />        
      )}
    </div>
  );
};

export default NewMember;
