import { myAPI } from "@/config/API";

import { FcGoogle } from "react-icons/fc";
import style from "./GoogleLogin.module.css";
import { useDispatch } from "react-redux";
import { getLoginWithGoogle } from "@/redux/auth/operations";
const GoogleLogin = () => {
  const dispath = useDispatch();


  const handleLogin = () => {
    dispath(getLoginWithGoogle())
  };

  return (
    <div>
      <button className={style.button} onClick={handleLogin}>
        <FcGoogle size={40} />
        Увійти через Google
      </button>
    </div>
  );
};

export default GoogleLogin;
