import { useState, useEffect } from "react";



function useForm(callback, validate)
{
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);


  useEffect( () => {
     if(Object.keys(errors).length === 0 && isSubmitting) {
        callback();
     }
  }, [errors])

  const handleSubmit = (e) => {
    if(e) e.preventDefault();
    setErrors(validate(values));
    setSubmitting(true);
  }

  const handleChange = (e) => {
    setValues(values => ({...values, [e.target.name] : e.target.value}))
  }

   return { handleChange, handleSubmit, values, errors };




}

export default useForm