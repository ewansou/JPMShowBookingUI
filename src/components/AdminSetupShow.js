import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from '@mui/material/Container';
import GeneralButton from "./GeneralButton";
import axios from "axios";
import SubmitButton from "./SubmitButton";
import { API_BASE } from "../config/constants";
import TextField from '@mui/material/TextField';

function AdminSetupShow() {

  const [showNumber, setShowNumber] = useState('');
  const [numOfRows, setNumOfRows] = useState('');
  const [numOfSeatsPerRow, setNumOfSeatsPerRow] = useState('');
  const [cancelWindow, setCancelWindow] = useState('');

  const [response, setResponse] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);
    const data = {
      showNumber: showNumber,
      numberOfRows: numOfRows,
      numberOfSeatsPerRow: numOfSeatsPerRow,
      cancellationWindowInMinutes: cancelWindow
    }

    const URL = API_BASE + "/admin/api/setupShow";

    axios.post(URL, data).then(res => {
      setResponse(res.data);
      setLoading(false);
    }).catch(err => {
      setLoading(false);
      setIsError(true);
    });
  }

  return (
    <Container maxWidth="md">
      <h1>Please enter new show details below</h1>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField fullWidth label="Show Number" variant="standard"
            id="outlined-number" type="number" value={showNumber}
            onChange={e => setShowNumber(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField fullWidth label="No. of Rows" variant="standard"
            id="outlined-number" type="number" value={numOfRows}
            onChange={e => setNumOfRows(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField fullWidth label="No. of Seats Per Row" variant="standard"
            id="outlined-number" type="number" value={numOfSeatsPerRow}
            onChange={e => setNumOfSeatsPerRow(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }} />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField fullWidth label="Cancellation of Window (in minutes)" variant="standard"
            id="outlined-number" type="number" value={cancelWindow}
            onChange={e => setCancelWindow(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }} />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}

        <Grid item xs={8} sm={12}>
          <SubmitButton
            size="small"
            variant="contained"
            title={loading ? 'Loading...' : 'Submit'}
            onClick={handleSubmit} />
        </Grid>

        <h3>{response}</h3>

        <Grid item xs={8} sm={12}>
          <GeneralButton
            title="BACK TO ADMIN MENU"
            size="large"
            variant="contained"
            url="/admin" />
        </Grid>

      </Grid>
    </Container>

  );
}

export default AdminSetupShow;