import React from "react";

import "../NewMember/NewMember.css"; // use the same style

import EditMemberForm from "./EditMemberForm";

const EditMember = (props) => {

  const saveEditedDataHandler = (memberData,addressData,membershipData,paymentData) => { 
    props.onSaveEdit(); //Close the Edit form
    props.onEditMember(props.member.id,memberData,addressData,membershipData,paymentData);   
  };

  return (
    <div >
      <EditMemberForm
        onSaveEditedData={saveEditedDataHandler}
        member={props.member}
      />
    </div>
  );
};

export default EditMember;
