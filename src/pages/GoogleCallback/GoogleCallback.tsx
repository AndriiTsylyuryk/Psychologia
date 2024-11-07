import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginWithGoogle } from "@/redux/auth/operations";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const GoogleCallback = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get("code");
    const { t } = useTranslation();
    if (code) {
      dispatch(loginWithGoogle(code))
        .unwrap()
        .then(() => {
          toast.success(t("you have successfully logged in"));
          navigate("/about");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [dispatch, location.search, navigate]);

  return <div>Авторизація через Google...</div>;
};

export default GoogleCallback;
