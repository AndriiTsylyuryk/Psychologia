import { Field, Formik, Form } from "formik";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options: any) => {
    options.resetForm();
    console.log(values);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="email" placeholder="Введіть ваш емейл"></Field>
          <Field
            name="password"
            type="password"
            placeholder="Введіть ваш пароль"
          ></Field>
          <button type="submit">Вхід</button>
          <p>Немає аккаунта?</p>
          <Link to="/register">Тиць</Link>
        </Form>

    
      </Formik>
    </div>
  );
};

export default Login;
