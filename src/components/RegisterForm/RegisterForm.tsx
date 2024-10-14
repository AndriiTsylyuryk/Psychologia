import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import styles from "./RegisterForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "@/redux/auth/operations";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { AppDispatch } from "@/redux/store";
import { selectIsError } from "@/redux/auth/selector";
import toast, { Toaster } from 'react-hot-toast';
const RegisterForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const error = useSelector(selectIsError);

  
  const schema = Yup.object({
    name: Yup.string()
      .required("Це поле необхідне!")
      .min(3, "Мінімум 3 літери!")
      .max(50, "Максимум 50 літер!"),

    email: Yup.string()
      .email("Має бути валідний емейл!")
      .required("Це поле необхідне!"),
    password: Yup.string()
      .password()
      .minLowercase(0)
      .min(0)
      .minWords(0)
      .minUppercase(0)
      .minSymbols(0)
      .minNumbers(0)
      .required("Це поле необхідне!"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    options.resetForm();
    dispatch(registerThunk(values));
  };

  const notify = () => toast('Here is your toast.');

  return (
    <div>
      <div><Toaster/></div>
      {error && notify}
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <Field
            className={styles.input}
            name="name"
            placeholder="Введіть вашe ім'я"
          />
          <ErrorMessage name="name" component="div" className={styles.error} />

          <Field
            className={styles.input}
            name="email"
            placeholder="Введіть ваш емейл"
          />
          <ErrorMessage name="email" component="div" className={styles.error} />
          <Field
            className={styles.input}
            name="password"
            type="password"
            placeholder="Введіть ваш пароль"
          />
          <ErrorMessage
            name="password"
            component="div"
            className={styles.error}
          />
          <button className={styles.button} type="submit">
            Зареєструватися
          </button>
          <div className={styles.register}>
            <p className={styles.text}>Вже маєш аккаунт?</p>
            <Link className={styles.link} to="/login">
              Тиць
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
