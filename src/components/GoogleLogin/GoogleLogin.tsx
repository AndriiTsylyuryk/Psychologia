import { myAPI } from "@/config/API";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import style from "./GoogleLogin.module.css";
const GoogleLogin = () => {
  const handleLogin = async () => {
    try {
      const response = await myAPI.get("auth/get-oauth-url");
      const googleUrl = response.data.data.url;
      window.location.href = googleUrl;
    } catch (error) {
      console.error("Error:", error);
    }
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
