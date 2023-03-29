import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from "@material-ui/core/styles";

const columns = [
  { field: 'showNumber', headerName: 'Show', width: 50 },
  { field: 'seatNumber', headerName: 'Seat', width: 50 },
  { field: 'seatStatus', headerName: 'Status', width: 100 },
  { field: 'buyerMobile', headerName: 'Buyer Mobile', width: 100 },
  { field: 'ticketNumber', headerName: 'Ticket', width: 300 },
  { field: 'validTill', headerName: 'Cancellation Valid Till', width: 250 }
];

const SixColumnDataTable = ({ rows }) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
export default SixColumnDataTable