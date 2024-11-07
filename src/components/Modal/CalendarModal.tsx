import { selectIsModalOpen } from "@/redux/modal/selectors";
import { setRequest, toggleModal } from "@/redux/modal/slice";

import { Box, Modal } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

const CalendarModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const isOpen = useSelector(selectIsModalOpen);

  const validationSchema = Yup.object({
    request: Yup.string().required(t("required field")),
  });

  const handleSubmit = (values: string) => {
    dispatch(setRequest(values.request));
    dispatch(toggleModal());
  };

  return (
    <div>
      <Modal open={isOpen}>
        <Box>
          <Formik
            initialValues={{ request: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Field name="request" type="text" />
              <button type="submit">send</button>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};

export default CalendarModal;
