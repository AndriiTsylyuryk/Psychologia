import { FcGoogle } from "react-icons/fc";
import style from "./GoogleLogin.module.css";
import { useDispatch } from "react-redux";
import { getLoginWithGoogle } from "@/redux/auth/operations";
import { useTranslation } from "react-i18next";

const GoogleLogin = () => {
  const dispath = useDispatch();
  const { t } = useTranslation();

  const handleLogin = () => {
    dispath(getLoginWithGoogle());
  };

  return (
    <div>
      <button className={style.button} onClick={handleLogin}>
        <FcGoogle size={40} />
        {t("sign up with google")}
      </button>
    </div>
  );
};

export default GoogleLogin;
