import { Field, Formik, Form } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selector";
import styles from "./Login.module.css";

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
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.textBackground}>
        <h2 className={styles.title}>Психолог Аліна Смєлянець</h2>
      </div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={styles.form}>
          <Field
            name="email"
            placeholder="Введіть ваш емейл"
            className={styles.input}
          />
          <Field
            name="password"
            type="password"
            placeholder="Введіть ваш пароль"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Вхід
          </button>
          <div className={styles.registration}>
            <p className={styles.text}>Немає аккаунта?</p>
            <Link to="/register" className={styles.link}>
              Тиць
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
