import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Container from '@mui/material/Container';
import GeneralButton from "./GeneralButton";
import FourColumnTable from "./FourColumnTable";
import SubmitButton from "./SubmitButton";
import { API_BASE } from "../config/constants";
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

function BuyerBookSeats() {

  const [buyShowNumber, setBuyShowNumber] = useState('');
  const [buyIsError, setBuyIsError] = useState(false);
  const [buyLoading, setBuyLoading] = useState(false);
  const [data, setData] = useState(false);
  const [availableShowSeating, setAvailableShowSeating] = useState([]);

  const getAvailableSeats = () => {
    setBuyLoading(true);
    setBuyIsError(false);

    const URL = API_BASE + "/buyer/api/retrieveAvailableSeatingsByShowNumber?showNumber=";

    axios.get(URL + buyShowNumber).then(res => {
      setAvailableShowSeating(res.data);
      setData(true);
      setBuyLoading(false);
    }).catch(err => {
      setBuyLoading(false);
      setBuyIsError(true);
    });
  }

  const [showNumber, setShowNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [seats, setSeats] = useState('');
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tableresponse, setTableResponse] = useState('');
  const [response, setResponse] = useState([]);

  const handleSubmit = () => {
    const seatArray = Array.from(seats.replaceAll(' ', '').split(','));
    setLoading(true);
    setIsError(false);
    const data = {
      showNumber: showNumber,
      mobileNumber: mobileNumber,
      seats: seatArray
    }

    const URL2 = API_BASE + "/buyer/api/bookSeats";

    axios.post(URL2, data).then(res => {
      setResponse(res.data);
      setLoading(false);
      setTableResponse(true);
      getAvailableSeats();
    }).catch(err => {
      setLoading(false);
      setIsError(true);
    });
  }

  return (
    <Container maxWidth="md">
      <h1>Check Availability</h1>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={12}>
          <TextField fullWidth type="number" id="standard-basic" label="Enter a Show Number" variant="standard"
            value={buyShowNumber} onChange={e => setBuyShowNumber(e.target.value)} />
        </Grid>

        {buyIsError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}

        <Grid item xs={12} sm={12}>
          <SubmitButton
            size="small"
            variant="contained"
            title={buyLoading ? 'Loading...' : 'Submit'}
            onClick={getAvailableSeats} />
        </Grid>

        <Grid item xs={12} sm={12}>
          {data &&
            <h3>The available seats are</h3>
          }
          {availableShowSeating.map(item => {
            return (
              <span>{item}   | </span>
            );
          })}
        </Grid>

        <Divider />

        <h1>Purchase Ticket</h1>

        <Grid item xs={12} sm={12}>
          <TextField fullWidth type="number" id="standard-basic" label="Show Number" variant="standard"
            value={showNumber} onChange={e => setShowNumber(e.target.value)} />
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField fullWidth type="text" id="standard-basic" label="Your Mobile Number" variant="standard"
            value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} />
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField fullWidth type="text" id="standard-basic" label="Seats you wish to book" variant="standard"
            value={seats} onChange={e => setSeats(e.target.value)} />
        </Grid>

        {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}

        <Grid item xs={12} sm={12}>
          <SubmitButton
            size="small"
            variant="contained"
            title={loading ? 'Loading...' : 'Submit'}
            onClick={handleSubmit} />
        </Grid>

        {tableresponse &&
          <FourColumnTable data={response} />
        }

        <Grid item xs={12} sm={12}>
          <GeneralButton
            title="BACK TO BUYER MENU"
            size="large"
            variant="contained"
            url="/buyer" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BuyerBookSeats;