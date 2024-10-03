import { Field, Formik, Form } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import styles from "./Register.module.css"; // Додаємо файл стилів
import { Fade } from "react-awesome-reveal";
import AppBar from "../../components/AppBar/AppBar";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Register = () => {
 

  return (
    
    <div className={styles.container}>
       <div className={styles.overlay}></div>
      {/* {<AppBar/>} */}
      <Fade>
      {/* <h2 className={styles.title}>Реєстрація</h2> */}
      <RegisterForm/>
      </Fade>
    </div>
  );
};

export default Register;
