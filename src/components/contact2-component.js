import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Typography, TextField, Button, Collapse } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

import SendIcon from "@material-ui/icons/Send";

// Set up EmailJS for sending e-mails without requiring backend
import * as emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    background: "#00064D",
    zIndex: -1,
    "& label.MuiInputLabel-root": {
      color: "white",
    },
    // Does not work
    "& .MuiButton-root": {
      justifyContent: "right",
    },
  },
  header: {
    textAlign: "center",
    color: "white",
  },
}));

const Contact2 = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Alert boolean for form submission
  const [alertParams, setAlartParams] = useState({
    visible: false,
    severity: "success",
    title: "Success",
    message: "Form data successfully sent.",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "contact_service",
        "template_nuhdbmn",
        values,
        "user_Uo3w87JyZv5toLgJGDNyH"
      )
      .then((response) => {
        !alertParams["visible"] &&
          setAlartParams({
            ...alertParams,
            visible: true,
            severity: "success",
            title: "Success",
            message: "Form data successfully sent.",
          });

        setTimeout(() => {
          setAlartParams({ ...alertParams, visible: false });
        }, 2000);

        e.target.reset();
      })
      .catch((error) => {
        !alertParams["visible"] &&
          setAlartParams({
            ...alertParams,
            visible: true,
            severity: "error",
            title: "Error",
            message:
              "An error has occured trying to send the form data: " + error,
          });

        setTimeout(() => {
          setAlartParams({ ...alertParams, visible: false });
        }, 2000);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h5" className={classes.header}>
          Contact Me
        </Typography>
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          inputProps={{ style: { color: "white" } }}
          required
          fullWidth
          onChange={(event) => {
            handleInputChange(event);
          }}
        ></TextField>
        <TextField
          name="email"
          label="E-mail"
          variant="outlined"
          inputProps={{ style: { color: "white" } }}
          required
          fullWidth
          onChange={(event) => {
            handleInputChange(event);
          }}
        ></TextField>
        <TextField
          name="subject"
          label="Subject"
          variant="outlined"
          inputProps={{ style: { color: "white" } }}
          required
          fullWidth
          onChange={(event) => {
            handleInputChange(event);
          }}
        ></TextField>
        <TextField
          name="message"
          label="Message"
          variant="outlined"
          inputProps={{ style: { color: "white" } }}
          required
          fullWidth
          multiline
          rowsMax={6}
          onChange={(event) => {
            handleInputChange(event);
          }}
        ></TextField>
        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
          Submit Form
        </Button>
      </form>

      <Collapse in={alertParams["visible"]}>
        <Alert
          severity={alertParams["severity"]}
          onClose={() => {
            setAlartParams({ ...alertParams, visible: false });
          }}
        >
          <AlertTitle>{alertParams["title"]}</AlertTitle>
          {alertParams["message"]}
        </Alert>
      </Collapse>
    </>
  );
};

export default Contact2;
