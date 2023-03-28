import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    width: 600,
    fontSize: 20,
    color: "#FFFFFF",
  }
});

const FiveColumnTable = ({ data }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Show Number</TableCell>
          <TableCell align="left">No. of Rows</TableCell>
          <TableCell align="left">No. of Seats Per Row</TableCell>
          <TableCell align="left">Total no. of Seats</TableCell>
          <TableCell align="left">Cancellation Windows (in minutes)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.showNumber}
            </TableCell>
            <TableCell align="left">{row.numberOfRows}</TableCell>
            <TableCell align="left">{row.numberOfSeatsPerRow}</TableCell>
            <TableCell align="left">{row.totalNumberOfSeats}</TableCell>
            <TableCell align="left">{row.cancellationWindowInMinutes}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}
export default FiveColumnTable