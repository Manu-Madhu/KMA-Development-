import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';

const useFormValidation = (initialValues, validate, navigation) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      const result = await signIn('credentials', {
        redirect: false,
        username: values.username,
        password: values.password,
      });

      if (result.ok) {
        toast.success('Login successful!');
        navigation.push('/profile'); 
      } else {
        toast.error(result.error || 'Login failed');
      }
    } else {
      setIsSubmitted(false);
    }
  };

  return { values, errors, isSubmitted, handleChange, handleSubmit };
};

export default useFormValidation;
