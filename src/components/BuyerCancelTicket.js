import React,  { useEffect, useState }  from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Container from '@mui/material/Container';
import GeneralButton from "./GeneralButton";
import SubmitButton from "./SubmitButton";


function BuyerCancelTicket() {

  const [ticketNumber, setTicketNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const [response, setResponse] = useState();
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

const handleSubmit = () => {
  setLoading(true);
  setIsError(false);
  const data = {
    ticket: ticketNumber,
    mobileNumber: mobileNumber
  }

  const URL = "http://localhost:23008/buyer/api/cancelTicket";

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
    <h1>Please enter details below to cancel your ticket</h1>
    <Grid container spacing={2}>

    <Grid item xs={8} sm={12}>
    <h2>Please enter your ticket number below</h2>
    <input
      type="text"
      className="form-control"
      id="ticket-number"
      placeholder="Enter Your Ticket Number"
      value={ticketNumber}
      onChange={e => setTicketNumber(e.target.value)} />
    </Grid>

    <Grid item xs={8} sm={12}>
    <h2>Mobile Number</h2>
    <input
      type="text"
      className="form-control"
      id="mobile-number"
      placeholder="Enter Your Mobile Number"
      value={mobileNumber}
      onChange={e => setMobileNumber(e.target.value)} />
    </Grid>

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
        url="/buyer" />
      </Grid>
      </Grid>
      </Container>
  );
}

export default BuyerCancelTicket;