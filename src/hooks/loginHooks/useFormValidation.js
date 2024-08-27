import React,{useState} from 'react'


const useFormValidation = (initialValues,validate,navigation) => {
    const [values,setValues]=useState(initialValues);
    const [errors,setErrors]=useState({});
    const [isSubmitted,setIsSubmitted]=useState(false);
    

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setValues({
            ...values,
            [name]:value,
        });
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        const validationErrors=validate(values);
        setErrors(validationErrors);

        if(Object.keys(validationErrors).length===0){
          setIsSubmitted(true);  
          console.log('Login Successfully');
          setTimeout(()=>{
            navigation.push('/profile');
          },1500);
        }
    }

  return {
      values,
      errors,
      isSubmitted,
      handleChange,
      handleSubmit,
    
  }
}

export default useFormValidation
