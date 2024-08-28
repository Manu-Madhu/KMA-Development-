
const validateForm=(formData)=>{
    let errors={};
     
    if(!formData.username)errors.username="Username is required";
    if(!formData.password)errors.password="Password is required";
    if(!formData.name)errors.name="Name is required";
    if(!formData.email){
        errors.email="Email is required";
    }else if(!/\S+@\S+\.\S+/.test(formData.email)){
        errors.email="Email is invalid";
    }
    if(!formData.telephone)errors.telephone="Telephone is required";
    if(!formData.country)errors.country="Country is required";
    return errors;
};
export default validateForm;