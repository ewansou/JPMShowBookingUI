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

const SubmitButton = ({ title, onClick }) => {
  const classes = useStyles();
  return (
    <button
    type="submit"
    className=""
    onClick={onClick}
    disabled={loading}
  >{title}</button>

  )
}
export default SubmitButton