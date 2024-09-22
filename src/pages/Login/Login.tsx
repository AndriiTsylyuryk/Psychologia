import { Field, Formik, Form } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";

const Login = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options: any) => {
    options.resetForm();
    dispatch(loginThunk(values));
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
