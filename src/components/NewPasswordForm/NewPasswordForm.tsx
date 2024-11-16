import React from "react";
import * as Yup from "yup";
import toast from "react-hot-toast";

import style from "./NewPasswordForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { selectShowPassword } from "@/redux/password/selector";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { togglePasswordVisibility } from "@/redux/password/slice";
import { resetThunk, sendNewPassword } from "@/redux/auth/operations";
import { useNavigate } from "react-router-dom";

const NewPasswordForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const token = new URLSearchParams(window.location.search).get("token");
  const schema = Yup.object({
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
    password: "",
  };

  const handleSubmit = (value, { resetForm }) => {
    const payload = {
      password: value.password,
      token,
    };
    toast.promise(
      dispatch(sendNewPassword(payload))
        .unwrap()
        .then(() => resetForm(), navigate("/login"))
        .catch((e) => {
          console.error(e);
        }),
      {
        loading: t("sending request..."),
        success: t("password updated"),
        error: t("request failed"),
      }
    );
  };
  const handleTogglePassword = () => {
    dispatch(togglePasswordVisibility());
  };

  const showPassword = useSelector(selectShowPassword);
  return (
    <div className={style.formContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={style.form}>
          <Field
            name="password"
            type={showPassword ? "password" : "text"}
            placeholder={t("enter new password")}
            className={style.input}
          />
          {showPassword ? (
            <HiOutlineEye
              className={style.eyeBtn}
              onClick={handleTogglePassword}
            />
          ) : (
            <HiOutlineEyeOff
              className={style.eyeBtn}
              onClick={handleTogglePassword}
            />
          )}
          <ErrorMessage
            name="password"
            component="div"
            className={style.error}
          />
          <button type="submit" className={style.button}>
            {t("send")}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default NewPasswordForm;
