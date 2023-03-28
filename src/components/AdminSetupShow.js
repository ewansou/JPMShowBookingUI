import React,  { useEffect, useState }  from "react";
import Grid from "@material-ui/core/Grid";
import Container from '@mui/material/Container';
import GeneralButton from "./GeneralButton";
import axios from "axios";

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

  const URL = "http://localhost:23008/admin/api/setupShow";

  console.log(data)

  axios.post(URL, data).then(res => {    
    setResponse(res.data);
    setLoading(false);
  }).catch(err => {
    setLoading(false);
    setIsError(true);
  });
}

  return (
    <Container fixed>
    <h1>Please enter new show details below</h1>
    <Grid container spacing={2}>

    <Grid item xs={8} sm={12}>
    <h2>Show Number:</h2>
    <input
      type="number"
      className="form-control"
      id="show-number"
      placeholder="Enter Show Number"
      value={showNumber}
      onChange={e => setShowNumber(e.target.value)} />
    </Grid>

    <Grid item xs={8} sm={12}>
    <h2>No. of Rows</h2>
    <input
      type="number"
      className="form-control"
      id="show-number"
      placeholder="Enter Number of Rows"
      value={numOfRows}
      onChange={e => setNumOfRows(e.target.value)} />
    </Grid>

    <Grid item xs={8} sm={12}>
    <h2>No. of Seats Per Row</h2>
    <input
      type="number"
      className="form-control"
      id="no-of-seats-per-row"
      placeholder="Enter Number of Seats Per Row"
      value={numOfSeatsPerRow}
      onChange={e => setNumOfSeatsPerRow(e.target.value)} />
    </Grid>

    <Grid item xs={8} sm={12}>
    <h2>Cancellation of Window (in minutes)</h2>
    <input
      type="number"
      className="form-control"
      id="cancellation-window"
      placeholder="Enter Cancellation Window (in minutes)"
      value={cancelWindow}
      onChange={e => setCancelWindow(e.target.value)} />
    </Grid>

    {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}

    <button
    type="submit"
    className=""
    onClick={handleSubmit}
    disabled={loading}
  >{loading ? 'Loading...' : 'Submit'}</button>

  <Grid item xs={8} sm={12}>
  <GeneralButton 
  title="BACK TO ADMIN MENU" 
  size="large"
  variant="contained"
  url="/admin" />
</Grid>

<p>{response}</p>

    </Grid>
    </Container>


        
  );
}

export default AdminSetupShow;