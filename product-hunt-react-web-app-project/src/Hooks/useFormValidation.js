import { useState, useEffect } from "react";
import { toast } from "../utils/toast";

export default function useFormValidation(initialState, validate, action) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        action();
        setValues(initialState);
        setLoading(false);
      } else {
        toast(Object.values(errors).join(" "));
        setLoading(false);
      }
    }
  }, [errors]);

  function handleChange(event) {
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setLoading(true);
  }

  return {
    handleChange,
    handleSubmit,
    values,
    setValues,
    loading,
  };
}
