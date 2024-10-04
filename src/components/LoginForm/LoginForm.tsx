import { loginThunk } from "@/redux/auth/operations";
import { selectIsLoggedIn } from "@/redux/auth/selector";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import * as Yup from "yup";
import YupPassword from "yup-password";
import style from "./LoginForm.module.css";
import { AppDispatch } from "@/redux/store";
YupPassword(Yup);

const LoginForm = () => {
  const isLoggendIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch<AppDispatch>();

  const schema = Yup.object({
    email: Yup.string()
      .email("Має бути валідний емейл!")
      .required("Це поле необхідне!"),
    password: Yup.string().password().required("Це поле необхідне!"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    options.resetForm();
    dispatch(loginThunk(values));
  };

  if (isLoggendIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <Form className={style.form} onSubmit={handleSubmit}>
            <Field
              name="email"
              type="email"
              placeholder="Введіть ваш емейл"
              className={style.input}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={style.error}
            />

            <Field
              name="password"
              type="password"
              placeholder="Введіть ваш пароль"
              className={style.input}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={style.error}
            />

            <button type="submit" className={style.button}>
              Вхід
            </button>

            <div className={style.registration}>
              <p className={style.text}>Немає аккаунта?</p>
              <Link to="/register" className={style.link}>
                Тиць
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
