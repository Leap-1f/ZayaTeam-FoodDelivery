import { Box, Stack, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
interface FormValues {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export default function ResetNewPassword() {
  const router = useRouter();
  const [jumpAnotherPage, setJumpAnotherPage] = useState<boolean>(false);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Stack>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={(values: FormValues, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
            }, 1000);
          }}
        >
          {({ isSubmitting, isValid, setFieldValue }) => (
            <Form
              style={{
                display: "flex",
                alignItems: "center",
                width: "384px",
                padding: "32px",
                flexDirection: "column",
                rowGap: "48px",
              }}
            >
              <h1 style={{ fontFamily: "San Francisco" }}>Нууц үг сэргээх</h1>

              <Stack sx={{ width: "100%" }} direction="column">
                <InputLabel shrink htmlFor="email">
                  Имэйл
                </InputLabel>
                <Field
                  as={TextField}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFieldValue("email", e.target.value);
                  }}
                  sx={{ backgroundColor: "#ECEDF0" }}
                  id="email"
                  name="email"
                  label="Имэйл хаягаа оруулна уу"
                  variant="outlined"
                />
                <ErrorMessage name="email" component="div" />
              </Stack>
              <Button
                type="submit"
                onClick={() => {
                  console.log(isValid);

                  if (isValid) {
                    router.push("../components/ResetNewPasswordPageTwo");
                  } else {
                    console.log(isValid);
                  }
                }}
                style={{
                  width: "100%",
                  border: "none",
                  color: isValid ? "#FFFFFF " : "#1C20243D",
                  backgroundColor: isValid ? "#18BA51" : "#EEEFF2",
                }}
                variant="outlined"
                disabled={!isValid}
              >
                {isSubmitting ? "Submitting..." : "Үргэлжлүүлэх"}
              </Button>
            </Form>
          )}
        </Formik>
      </Stack>
    </Box>
  );
}
