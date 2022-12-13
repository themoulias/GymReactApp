const TransformData = (member,address,membership,payment) =>{
    const transformedData = ({      
      name: member.name,
      email: member.email,
      phone: member.phone,
      dob: member.dob,          
      gender: member.gender,
      // Address          
      city:address.city,
      street:address.street,
      streetNumber:address.streetNumber,
      postCode:address.postCode,
      // Payment 
      amount:payment.amount,
      signupFee:payment.signupFee,
      paymentDate:payment.paymentDate,
      paymentMethod:payment.paymentMethod,
      // Membership
      membershipType:membership.membershipType,
      period:membership.period,
      active: membership.active
    })
    return transformedData;
  }

  export default TransformData;