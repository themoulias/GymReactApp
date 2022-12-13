const LoadMembers = (data) => {
  const loadedMembers = [];
  for (const key in data) {
    loadedMembers.push({
      //Member
      id: data[key].id,
      name: data[key].name,
      email: data[key].email,
      phone: data[key].phone,
      dob: data[key].dob,
      gender: data[key].gender,
      // Address
      city: data[key].address.city,
      street: data[key].address.street,
      streetNumber: data[key].address.streetNumber,
      postCode: data[key].address.postCode,
      // Payment
      amount: data[key].membership.payment.amount,
      signupFee: data[key].membership.payment.signupFee,
      paymentDate: data[key].membership.payment.paymentDate,
      paymentMethod: data[key].membership.payment.paymentMethod,
      // Membership
      membershipType: data[key].membership.membershipType,
      period: data[key].membership.period,
      active: data[key].membership.active + "",
    });
  }
  return loadedMembers;
};
export default LoadMembers;
