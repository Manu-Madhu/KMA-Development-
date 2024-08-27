
const ValidationLogin = (values) => {
    let errors={};
    if(!values.username){
        errors.username="Username is Required";
    }else if(values.username.length < 3){
        errors.username="Username must be at least 3 characters"
    }
    if(!values.password){
        errors.password="Password is required";
    }else if(values.password.length < 6){
        errors.password = "Password must be atleast 6 characters";
    }
  return errors;
}

export default ValidationLogin
