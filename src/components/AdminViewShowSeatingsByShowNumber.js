import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Container from '@mui/material/Container';
import GeneralButton from "./GeneralButton";
import SixColumnTable from "./SixColumnTable";
import SubmitButton from "./SubmitButton";
import { API_BASE } from "../config/constants";
import TextField from '@mui/material/TextField';


function AdminViewShowSeatingsByShowNumber() {

  const [showSeatingsDetail, setShowSeatingsDetail] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showNumber, setShowNumber] = useState('');

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);

    const URL = API_BASE + "/admin/api/retrieveShowSeatingsByShowNumber?showNumber="

    axios.get(URL + showNumber).then(res => {
      setShowSeatingsDetail(res.data);
      setLoading(false);
    }).catch(err => {
      setLoading(false);
      setIsError(true);
    });
  }

  return (
    <Container maxWidth="md">
      <h1>View Show Seatings by Show Number</h1>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={12}>
          <TextField fullWidth type="number" id="standard-basic" label="Show Number" variant="standard"
            value={showNumber} onChange={e => setShowNumber(e.target.value)} />
        </Grid>

        {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}

        <Grid item xs={8} sm={12}>
          <SubmitButton
            size="small"
            variant="contained"
            title={loading ? 'Loading...' : 'Submit'}
            onClick={handleSubmit} />
        </Grid>

        <SixColumnTable data={showSeatingsDetail} />

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

export default AdminViewShowSeatingsByShowNumber;