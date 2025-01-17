import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import styles from "./RegisterForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "@/redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { AppDispatch } from "@/redux/store";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { TbHandClick } from "react-icons/tb";
import { selectShowPassword } from "@/redux/password/selector";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { togglePasswordVisibility } from "@/redux/password/slice";

const RegisterForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const schema = Yup.object({
    name: Yup.string()
      .required(t("required field"))
      .min(3, t("min 3 characters"))
      .max(50, t("max 50 characters")),

    email: Yup.string()
      .email(t("valid email required"))
      .required(t("required field")),
    password: Yup.string()
      .password()
      .minLowercase(0)
      .min(0)
      .minWords(0)
      .minUppercase(0)
      .minSymbols(0)
      .minNumbers(0)
      .required(t("required field")),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => {
        toast.success(t("registration successful"));
        resetForm();
        navigate("/login");
      })
      .catch((error) => {
        if (error === "Email in use") {
          toast.error(t("email in use"));
        }
      });
  };
  const showPassword = useSelector(selectShowPassword);
  const handleTogglePassword = () => {
    dispatch(togglePasswordVisibility());
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <Field
            className={styles.input}
            name="name"
            placeholder={t("enter your name")}
          />
          <ErrorMessage name="name" component="div" className={styles.error} />

          <Field
            className={styles.input}
            name="email"
            placeholder={t("enter your email")}
          />
          <ErrorMessage name="email" component="div" className={styles.error} />

          <Field
            className={styles.input}
            name="password"
            type={showPassword ? "password" : "text"}
            placeholder={t("enter your password")}
          />
          {showPassword ? (
            <HiOutlineEye
              className={styles.eyeBtn}
              onClick={handleTogglePassword}
            />
          ) : (
            <HiOutlineEyeOff
              className={styles.eyeBtn}
              onClick={handleTogglePassword}
            />
          )}
          <ErrorMessage
            name="password"
            component="div"
            className={styles.error}
          />

          <button className={styles.button} type="submit">
            {t("register")}
          </button>
          <div className={styles.register}>
            <p className={styles.text}>{t("already have an account?")}</p>

            <Link className={styles.link} to="/login">
              {t("click")}
              <TbHandClick size={17} />
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
