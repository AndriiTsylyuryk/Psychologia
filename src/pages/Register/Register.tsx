import { Field, Formik, Form } from "formik";
import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const initialValues = {
    name: "",
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
          <Field name="name" placeholder="Введіть вашe ім'я"></Field>
          <Field name="email" placeholder="Введіть ваш емейл"></Field>
          <Field
            name="password"
            type="password"
            placeholder="Введіть ваш пароль"
          ></Field>
          <button type="submit">Вхід</button>

          <p>Вже маєш аккаунт?</p>
          <Link to="/login">Тиць</Link>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
