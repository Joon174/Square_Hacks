import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const MultilineTextField = (props) => {
  const classes = useStyles();

  return (
    <TextField
      id={props.text}
      label={props.text}
      multiline
      rows={props.rows}
      variant="outlined"
    />
  );
};
export default MultilineTextField;
