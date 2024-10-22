import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { myAPI, setToken } from "@/config/API";

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleGoogleLogin = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      if (code) {
        try {
          const response = await myAPI.post("/auth/confirm-oauth", { code });
          const { accessToken } = response.data.data;

          setToken(accessToken);
          
          navigate("/");
        } catch (error) {
          console.error("Помилка під час логіну через Google:", error);
        }
      } else {
        console.error("Немає коду авторизації в URL");
      }
    };

    handleGoogleLogin();
  }, [navigate]);

  return <div>Авторизація через Google...</div>;
};

export default GoogleCallback;
