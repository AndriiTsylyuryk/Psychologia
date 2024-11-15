import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import style from "./ResetPasswordForm.module.css";
import { useDispatch } from "react-redux";
import { resetThunk } from "@/redux/auth/operations";
import toast from "react-hot-toast";

const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const schema = Yup.object({
    email: Yup.string()
      .email(t("valid email required"))
      .required(t("required field")),
  });

  const initialValues = {
    email: "",
  };

  const handleSubmit = (value, { resetForm }) => {
    console.log(value.email)
    toast.promise(
      dispatch(resetThunk(value.email))
        .unwrap()
        .then(() => resetForm())
        .catch((e) => {
          console.error(e);
          throw e;
        }),
      {
        loading: t("sending request..."),
        success: t("request sent successfully!"),
        error: t("request failed"),
      }
    );
  };

  return (
    <div className={style.formContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={style.form}>
          <Field
            name="email"
            type="email"
            placeholder={t("enter your email")}
            className={style.input}
          />
          <ErrorMessage name="email" component="div" className={style.error} />
          <button type="submit" className={style.button}>
            {t("send")}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ResetPasswordForm;
