import React from "react";
import style from "./ResetPassword.module.css";
import ResetPasswordForm from "@/components/ResetPasswordForm/ResetPasswordForm";
const ResetPassword = () => {
  return (
    <div className={style.reset}>
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPassword;
