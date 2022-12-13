import React, { useState } from "react";

import EditMember from "./EditMember/EditMember";

import "./Member.css";
import "./Second.css";

const Member = (props) => {
  const [isMore, setIsMore] = useState(false);
  const [isMoreMemberShip, setIsMoreMemberShip] = useState(false);
  const [isMoreAddress, setIsMoreAddress] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDelete, setIsDelete] = useState(true);

  const activeMembership = (props) => {
    if (props.member.active === "true") {
      return <div className="member-active">{props.member.membershipType}</div>;
    }
    return <div className="member-not-active">{props.member.membershipType}</div>;
  };

  const ageCalculator = (props) => {
    const yearOfBirth = new Date(props.member.dob).getFullYear();
    let dateNow = Date.now();
    dateNow = new Date(dateNow);
    const yearNow = dateNow.getFullYear();
    let memberAge = yearNow - yearOfBirth;
    return memberAge;
  };
  // Show more
  const showMoreHandler = () => {
    setIsMore(true);
  };
  const showLessHandler = () => {
    setIsMore(false);
    setIsMoreMemberShip(false);
    setIsMoreAddress(false);
  };
  // Show more2
  const showMoreHandler2 = () => {
    setIsMoreMemberShip(true);
  };
  // Show more3
  const showMoreHandler3 = () => {
    setIsMoreAddress(true);
  };
  
  // Edit Member
  const startEditHandler = () => {
    showLessHandler(); // hide more info on edit
    hideDeleteHandler();
    setIsEditing(true);
  };
  const stopEditHandler = () => {    
    showLessHandler(); // hide more info on edit save or cancel 
    showDeleteHandler();
    setIsEditing(false);
  };
  //Delete Member
  const showDeleteHandler = () => {
    setIsDelete(true);
  };
  const hideDeleteHandler = () => {
    setIsDelete(false);
  };
  const deleteMemberHandler = () => {
    props.onDelete(props.id);
  };

  
  const showMorePayment = (props) => {
    return (
      <div className="member">
        <div className="member-inside__description3">
        <h3>Payment</h3>
          <label>Amount: {props.member.amount} €</label>
          <label>Signup Fee: {props.member.signupFee} €</label>
          <label>Payment Date: {props.member.paymentDate}</label>
          <label>Payment Method: {props.member.paymentMethod}</label>         
          <div></div><div></div>
        </div>
      </div>
    );
  };

  const showMoreAddress = (props) => {
    return (
      <div className="member">
        <div className="member-inside__description2">
        <h3>Address</h3>
          <label>City: {props.member.city}</label>
          <label>Street: {props.member.street}</label>
          <label>Street Number: {props.member.streetNumber}</label>
          <label>Postal Code: {props.member.postCode}</label>
          {isMoreAddress && showMorePayment(props)}
          {!isMoreAddress && (
            <button onClick={showMoreHandler3}>Show more</button>
          )}
        </div>
      </div>
    );
  };

  const showMoreMember = (props) => {
    return (
      <div className="member">
         <div className="member-inside__description">
          <label>Phone Number : {props.member.phone}</label>
          <label>Gender : {props.member.gender}</label>
          <label>Membership Period: {props.member.period}</label>         
          {isMoreMemberShip && showMoreAddress(props)}
          {!isMoreMemberShip && (
            <button onClick={showMoreHandler2}>Show more</button>
          )}         
        </div>
       </div>
    );
  };

  return (
    <div className="member">
      <div className="member__description">
        <div>{activeMembership(props)} </div>
        {/* <h3>Member</h3> */}<div></div>
        <label>Name : {props.member.name} </label>
        <label>E-mail : {props.member.email}</label>
        <label>Age: {ageCalculator(props)}</label>
        {isMore && showMoreMember(props)}
        {!isMore && <button onClick={showMoreHandler}>Show more</button>}
        {isMore && <button onClick={showLessHandler}>Show less</button>}
        <div>
          {isEditing && (
            <EditMember
              onSaveEdit={stopEditHandler}
              member={props.member} // To know which member gonna edit
              onEditMember={props.onEditMember}
            />
          )}
          <div className="second">
            {!isEditing && (
              <button onClick={startEditHandler}>Edit Member</button>
            )}
            {isEditing && (
              <div className="second__red">
                <button onClick={stopEditHandler}>Cancel</button>
              </div>
            )}
            {isDelete && (
              <div className="second__red">
                <button onClick={deleteMemberHandler}>
                  Delete Member {props.children}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
