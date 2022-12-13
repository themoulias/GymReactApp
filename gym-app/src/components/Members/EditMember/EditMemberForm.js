import React, { useState } from "react";

import "../NewMember/MemberForm.css"; 
import "../NewMember/NewMember.css";
import MemberFormMember from "../NewMember/MemberFormMember";
import MemberFormAddress from "../NewMember/MemberFormAddress";
import SubmitButton from "../NewMember/SubmitButton";
import MemberFormPayment from "../NewMember/MemberFormPayment";
import MemberFormMemberShip from "../NewMember/MemberFormMembership";

const EditMemberForm = (props) => {
  const [formInputData, setFormInputData] = useState({
    // member
    memberName: props.member.name,
    email: props.member.email,
    phone: props.member.phone,
    dob: props.member.dob,
    gender: props.member.gender,
    //address
    city: props.member.city,
    street: props.member.street,
    streetNumber: props.member.streetNumber,
    postCode: props.member.postCode,    
    //payment
    amount: props.member.amount,
    signupFee: props.member.signupFee,
    paymentDate: props.member.paymentDate,
    paymentMethod: props.member.paymentMethod, 
    //membership
    membershipType: props.member.membershipType,
    period: props.member.period,
    active: props.member.active,
  });

  const handleInputChange = (event) => {
    const inputFieldValue = event.target.value;
    const inputFieldName = event.target.name;
    const NewInputValue = {
      ...formInputData,
      [inputFieldName]: inputFieldValue,
    };
    setFormInputData(NewInputValue);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();    
    const memberData = {
      memberId: formInputData.id,
      name: formInputData.memberName,
      email: formInputData.email,
      phone: formInputData.phone,
      dob: formInputData.dob,
      active: formInputData.active,
      gender: formInputData.gender,
    };

    const addressData = {
      city: formInputData.city,
      street: formInputData.street,
      streetNumber: formInputData.streetNumber,
      postCode: formInputData.postCode,
    };
   
    const paymentData = {
      amount: formInputData.amount,
      signupFee: formInputData.signupFee,
      paymentDate: formInputData.paymentDate,
      paymentMethod: formInputData.paymentMethod,
    };
    
    const membershipData = {
      membershipType: formInputData.membershipType,
      period: formInputData.period,
      active: formInputData.active
    };    
    props.onSaveEditedData(memberData,addressData,membershipData,paymentData);   
  
  };

  return (
    <form>
      <div className="new-member">
        <div className="new-member__controls">
          <div className="new-member__control">
            <h2 >Member info</h2>
            <MemberFormMember
              handleInputChange={handleInputChange}
              data={formInputData}
            /><h2>Address info</h2>
            <MemberFormAddress
              handleInputChange={handleInputChange}
              data={formInputData}
            /><h2>Payment info</h2>
            <MemberFormPayment
              handleInputChange={handleInputChange}
              data={formInputData}
            /><h2>Membership info</h2>
            <MemberFormMemberShip
              handleInputChange={handleInputChange}
              data={formInputData}
            />
          </div>
        </div>
      </div>
      <div className="second">
        <SubmitButton
          handleFormSubmit={handleFormSubmit}
          buttonName="Save Edit"
        />
        {/* <button>Hit me</button><button>Hit me</button> */}
      </div>
    </form>
  );
};

export default EditMemberForm;
