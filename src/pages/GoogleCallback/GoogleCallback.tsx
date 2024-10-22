import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginWithGoogle } from "@/redux/auth/operations"; // імпортуй свій Thunk

const GoogleCallback = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleGoogleLogin = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      if (code) {
        // Викликаємо Thunk для обробки авторизації через Google
        dispatch(loginWithGoogle(code))
          .unwrap()
          .then(() => {
            console.log(code);
            navigate("/about");
          })
          .catch((error) => {
            console.error("Помилка під час логіну через Google:", error);
          });
      } else {
        console.error("Немає коду авторизації в URL");
      }
    };

    handleGoogleLogin();
  }, [dispatch, navigate]);

  return <div>Авторизація через Google...</div>;
};

export default GoogleCallback;
