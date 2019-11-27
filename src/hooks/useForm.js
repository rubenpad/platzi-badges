/* eslint-disable import/prefer-default-export */
import React from 'react';

export function useForm(initialValues, submitData, redirect) {
  const [values, setValues] = React.useState({ ...initialValues });
  const [status, setStatus] = React.useState({ loading: false, error: null });

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, error: null });
    try {
      await submitData(values);
      setStatus({ loading: false, error: null });
      redirect();
    } catch (error) {
      setStatus({ loading: false, error });
    }
  };

  return {
    status,
    values,
    onChange,
    onSubmit,
  };
}
