import { Field, Formik, Form } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selector";

const Login = () => {
  const isLoggendIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options: any) => {
    options.resetForm();
    dispatch(loginThunk(values));
  };
  if (isLoggendIn) {
    return <Navigate to="/" />;
  }

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
