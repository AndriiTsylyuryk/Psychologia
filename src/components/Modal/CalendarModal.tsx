import { eventData, selectIsModalOpen } from "@/redux/modal/selectors";
import { setRequest, toggleModal } from "@/redux/modal/slice";
import style from "./CalendarModal.module.css";
import { Box, Modal } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { myAPI } from "@/config/API";
import { selectToken } from "@/redux/auth/selector";
import { selectIsLight } from "@/redux/burger/selectors";
import toast from "react-hot-toast";

const CalendarModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsModalOpen);
  const validationSchema = Yup.object({
    request: Yup.string().required(t("required field")),
  });
  const isDark = useSelector(selectIsLight);

  const token = useSelector(selectToken);
  const { start, end } = useSelector(eventData);

  const handleSubmit = async (values: { request: string }) => {
    const { request } = values;
    dispatch(setRequest(request));
    if (request && start && end) {
      toast.promise(
        myAPI.post(
          "calendar/event",
          { start, end, title: request },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ),
        {
          loading: t("sending request..."),
          success: t("request sent successfully!"),
          error: t("request failed"),
        }
      );
    }
    dispatch(toggleModal());
  };

  const handleClose = () => {
    dispatch(toggleModal());
  };

  return (
    <div>
      <Modal
        open={isOpen}
        className={style.modalContentMain}
        onClose={handleClose}
      >
        <Box className={style.modalContent}>
          <Formik
            initialValues={{ request: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className={style.form} data-theme={isDark ? "dark" : "light"}>
              <Field
                className={style.input}
                name="request"
                type="text"
                placeholder={t("Describe details...")}
              />
              <ErrorMessage
                name="request"
                component="div"
                className={style.error}
              />
              <button className={style.button} type="submit">
                {t("send")}
              </button>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};

export default CalendarModal;
