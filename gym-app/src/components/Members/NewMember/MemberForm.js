import React, { useState } from "react";

import "./MemberForm.css";

import "../MembersFilter.css";

import MemberFormAddress from "./MemberFormAddress";
import MemberFormMemberShip from "./MemberFormMembership";
import MemberFormPayment from "./MemberFormPayment";
import MemberFormMember from "./MemberFormMember";
import SubmitButton from "./SubmitButton";

const MemberForm = (props) => {
  const current = new Date();
  const [formInputData, setFormInputData] = useState({
    // Defaults shown
    // member
    memberName: "",
    email: "",
    phone: "+30 69 ",
    dob: "2001-11-09",
    gender: "Male",
    // address
    city: "",
    street: "",
    streetNumber: "",
    postCode: "",
    // payment
    amount: "",
    signupFee: "",    
    paymentDate: current.getFullYear() +"-"+ (current.getMonth()+1) + "-" + current.getDate(),
    paymentMethod: "Cash",
    // membership
    membershipType: "Personal",
    period: "1 Week",
    active: "true",
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
      name: formInputData.memberName,
      email: formInputData.email,
      phone: formInputData.phone,
      dob: formInputData.dob,      
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
      active: formInputData.active,
    };    
   
    props.onSaveMemberData(memberData,addressData,membershipData,paymentData);

  };

  return (
    <form>
      <div className="new-member">
        <div className="new-member__controls">
          <div className="new-member__control">
            <div>
              <h2>Members:</h2>
              <MemberFormMember                
                handleInputChange={handleInputChange}     
                data={formInputData}           
              />
            </div>
          </div>
          <div>
            <h2>Address:</h2>
            <MemberFormAddress             
              handleInputChange={handleInputChange}
              data={formInputData}
            />
          </div>
          <div>
            <h2>Payment:</h2>
            <MemberFormPayment             
              handleInputChange={handleInputChange}
              data={formInputData}
            />
          </div>{" "}
          <div>
            <h2>Membership:</h2>
            <MemberFormMemberShip              
              handleInputChange={handleInputChange}
              data={formInputData}
            />
          </div>
        </div>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <SubmitButton
          handleFormSubmit={handleFormSubmit}
          buttonName="Add New Member"
        />
      </div>
    </form>
  );
};

export default MemberForm;
