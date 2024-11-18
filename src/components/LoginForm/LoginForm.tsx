import { loginThunk } from "@/redux/auth/operations";
import { selectIsLoggedIn } from "@/redux/auth/selector";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import YupPassword from "yup-password";
import style from "./LoginForm.module.css";
import { AppDispatch } from "@/redux/store";
YupPassword(Yup);
import toast from "react-hot-toast";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { TbHandClick } from "react-icons/tb";
import { HiOutlineEye } from "react-icons/hi";
import { selectShowPassword } from "@/redux/password/selector";
import { HiOutlineEyeOff } from "react-icons/hi";
import { togglePasswordVisibility } from "@/redux/password/slice";

const LoginForm = () => {
  const { t } = useTranslation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const showPassword = useSelector(selectShowPassword);

  const schema = Yup.object({
    email: Yup.string()
      .email(t("valid email required"))
      .required(t("required field")),
    password: Yup.string()
      .minLowercase(0)
      .min(0)
      .minWords(0)
      .minUppercase(0)
      .minSymbols(0)
      .minNumbers(0)
      .required(t("required field")),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => {
        resetForm();
        toast.success(t("you have successfully logged in"));
        navigate("/calendar");
      })
      .catch((error) => {
        if (error === "Wrong password") {
          toast.error(t("wrong password"));
        } else if (error === "User not found") {
          toast.error(t("user not found"));
        }
      });
  };

  if (isLoggedIn) {
    return null;
  }

  const handleTogglePassword = () => {
    dispatch(togglePasswordVisibility());
  };

  return (
    <div className={style.formContainer}>
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
              placeholder={t("enter your email")}
              className={style.input}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={style.error}
            />
            <div className={style.passwordSection}>
              <Field
                name="password"
                type={showPassword ? "password" : "text"}
                placeholder={t("enter your password")}
                className={style.input}
              />
              <Link to="/reset-password-request">
                <p className={style.passwordText}>{t("forgot password?")}</p>
              </Link>
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
            </div>
            <button type="submit" className={style.button}>
              {t("sign in")}
            </button>
            <div className={style.registration}>
              <p className={style.text}>{t("no account?")}</p>
              <Link to="/register" className={style.link}>
                {t("click")}
                <TbHandClick size={16} />
              </Link>
            </div>
          </Form>
        )}
      </Formik>
      <GoogleLogin />
    </div>
  );
};

export default LoginForm;
