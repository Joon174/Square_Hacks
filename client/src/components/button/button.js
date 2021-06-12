import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { red, purple } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const color_primary = red[400];
const color_hover = red[600];
export const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(color_primary),
    backgroundColor: color_primary,
    width: `100%`,
    "&:hover": {
      backgroundColor: color_hover,
    },
  },
}))(Button);
