import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginWithGoogle } from "@/redux/auth/operations";


const GoogleCallback = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get("code");
    
    if (code) {
      dispatch(loginWithGoogle(code))
        .unwrap()
        .then(() => {
          navigate("/about");
        })
        .catch((error) => {
          console.error("Помилка під час логіну через Google:", error);
        });
    } else {
      console.error("Немає коду авторизації в URL");
    }
  }, [dispatch, location.search, navigate]);

  return <div>Авторизація через Google...</div>;
};

export default GoogleCallback;
