import { 
  Button 
} from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    width: 100,
    fontSize: 20,
    color: "#FFFFFF",
  }
});

const SubmitButton = (props) => {
  const classes = useStyles();
  return (
    <Button
    color="primary"
    variant={props.variant}
    size={props.size}
    className={classes.button}
    onClick={props.onClick}
  >{ props.title }</Button>

  )
}
export default SubmitButton