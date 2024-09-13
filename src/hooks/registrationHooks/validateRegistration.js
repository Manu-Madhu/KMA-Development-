const validateForm = (formData) => {
    let errors = {};
  
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!formData.username.trim()) errors.username = "Username is required";
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      errors.password = "Password must contain uppercase, lowercase, number, and special character";
    }
    if (!formData.applicantName) errors.applicantName = "Applicant Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.identityProof) errors.identityProof = "Identity proof is required";
    if (!formData.phone) errors.phone = "Telephone is required";
    if (!formData.membershipType) errors.membershipType = "Membership Type is required";
    if (!formData.country) errors.country = "Country is required";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.hasRenewalPay) errors.hasRenewalPay = "Checkbox is required";
    if (!formData.payMode) errors.payMode = "Payment Mode is required";
  
    return errors;
  };
  
  export default validateForm;
  