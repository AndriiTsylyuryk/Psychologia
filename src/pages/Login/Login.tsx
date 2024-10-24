import { Field, Formik, Form } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selector";
import styles from "./Login.module.css";
import Layout from "../../components/Layout/Layout";
import AppBar from "../../components/AppBar/AppBar";
import { Fade } from "react-awesome-reveal";
import LoginForm from "@/components/LoginForm/LoginForm";

const Login = () => {
  const isLoggendIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  
  return (
    <div className={styles.login}>
     
        <LoginForm/>
      
    </div>
  );
};

export default Login;
