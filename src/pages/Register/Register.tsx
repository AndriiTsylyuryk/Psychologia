import { Field, Formik, Form } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import styles from "./Register.module.css"; // Додаємо файл стилів
import { Fade } from "react-awesome-reveal";
import AppBar from "../../components/AppBar/AppBar";

const Register = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    options.resetForm();
    dispatch(registerThunk(values));
  };

  return (
    
    <div className={styles.container}>
       <div className={styles.overlay}></div>
      {<AppBar/>}
      <Fade>
      <h2 className={styles.title}>Реєстрація</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={styles.form}>
          <Field
            className={styles.input}
            name="name"
            placeholder="Введіть вашe ім'я"
          />
          <Field
            className={styles.input}
            name="email"
            placeholder="Введіть ваш емейл"
          />
          <Field
            className={styles.input}
            name="password"
            type="password"
            placeholder="Введіть ваш пароль"
          />
          <button className={styles.button} type="submit">
            Вхід
          </button>

          <p className={styles.text}>Вже маєш аккаунт?</p>
          <Link className={styles.link} to="/login">
            Тиць
          </Link>
        </Form>
      </Formik>
      </Fade>
    </div>
  );
};

export default Register;
