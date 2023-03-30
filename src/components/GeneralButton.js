import {
  createTheme,
  ThemeProvider,
  Button
} from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    fontSize: 20,
    color: "#FFFFFF"
  }
});

const GeneralButton = ({ title, variant, size, url }) => {
  const classes = useStyles();
  return (
    <Button
      color="primary"
      variant={variant}
      href={url}
      size={size}
      align="center"
      fullWidth={true}
      className={classes.button}
    >{title}</Button>

  )
}
export default GeneralButton