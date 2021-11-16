import { useState, useEffect } from "react";



function useForm(initForm, callback, validate)
{
  const [values, setValues] = useState(initForm());
  const [errors, setErrors] = useState(validate(values));
  const [isSubmitting, setSubmitting] = useState(false);


  useEffect( () => {
    console.log("useEffect1 erros", errors)
     if(Object.keys(errors).length === 0 && isSubmitting) {
        callback();
        setSubmitting(false);
     }
  }, [errors])

  useEffect( () => {
    console.log("useEffect2 erros", errors)
    setErrors(validate( values) );
  }, [values])



  const handleSubmit = (e) => {
    if(e) e.preventDefault();
    console.log("handleSubmit erros", errors)
    setErrors(validate(values));
    setSubmitting(true);
  }

  const handleChange = (e) => {
   console.log("handleChange", e.target.name, "values", validate)
    setValues(values => ({...values, [e.target.name] : e.target.value}))
  }

   return { handleChange, handleSubmit, values, errors };
}

export default useForm