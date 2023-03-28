import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Container from '@mui/material/Container';
import GeneralButton from "./GeneralButton";
import FourColumnTable from "./FourColumnTable";
import SubmitButton from "./SubmitButton";
import { API_BASE } from "../config/constants";


function BuyerBookSeats() {

  const [buyShowNumber, setBuyShowNumber] = useState('');
  const [buyIsError, setBuyIsError] = useState(false);
  const [buyLoading, setBuyLoading] = useState(false);
  const [availableShowSeating, setAvailableShowSeating] = useState([]);

  const getAvailableSeats = () => {
    setBuyLoading(true);
    setBuyIsError(false);

    const URL = API_BASE + "/buyer/api/retrieveAvailableSeatingsByShowNumber?showNumber=";

    axios.get(URL + buyShowNumber).then(res => {
      setAvailableShowSeating(res.data);
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
  const [response, setResponse] = useState([]);

  const handleSubmit = () => {

    const seatArray = Array.from(seats.replaceAll(' ', '').split(','));

    console.log(seatArray)

    setLoading(true);
    setIsError(false);
    const data = {
      showNumber: showNumber,
      mobileNumber: mobileNumber,
      seats: seatArray
    }

    const URL2 = "http://localhost:23008/buyer/api/bookSeats";

    console.log(data)

    axios.post(URL2, data).then(res => {
      setResponse(res.data);
      setLoading(false);
      getAvailableSeats();
    }).catch(err => {
      setLoading(false);
      setIsError(true);
    });
  }

  return (
    <Container fixed>
      <h1>Check Availabiliy. Please enter show number you want to buy tickets for</h1>
      <Grid container spacing={2}>

        <Grid item xs={8} sm={12}>
          <h2>Please enter a show number below</h2>
          <input
            type="number"
            className="form-control"
            id="show-number"
            placeholder="Enter Show Number"
            value={buyShowNumber}
            onChange={e => setBuyShowNumber(e.target.value)} />
        </Grid>

        {buyIsError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}

        <Grid item xs={8} sm={12}>
          <SubmitButton
            size="small"
            variant="contained"
            title={buyLoading ? 'Loading...' : 'Submit'}
            onClick={getAvailableSeats} />
        </Grid>

        <Grid item xs={8} sm={12}>
          <p>The available seats are </p>
          {availableShowSeating.map(item => {
            return (
              <span>{item}   | </span>
            );
          })}
        </Grid>


        <h2>Please fill in table below to book seats</h2>

        <Grid item xs={8} sm={12}>
          <h2>Please enter a show number below</h2>
          <input
            type="number"
            className="form-control"
            id="show-number"
            placeholder="Enter Show Number"
            value={showNumber}
            onChange={e => setShowNumber(e.target.value)} />
        </Grid>

        <Grid item xs={8} sm={12}>
          <h2>Mobile Number</h2>
          <input
            type="number"
            className="form-control"
            id="mobile-number"
            placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChange={e => setMobileNumber(e.target.value)} />
        </Grid>

        <Grid item xs={8} sm={12}>
          <h2>Please Enter The Seats You want To Book</h2>
          <input
            type="text"
            className="form-control"
            id="seats"
            placeholder="Please Enter The Seats You want To Book"
            value={seats}
            onChange={e => setSeats(e.target.value)} />
        </Grid>

        {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}

        <Grid item xs={8} sm={12}>
          <SubmitButton
            size="small"
            variant="contained"
            title={loading ? 'Loading...' : 'Submit'}
            onClick={handleSubmit} />
        </Grid>

        <FourColumnTable data={response} />

        <Grid item xs={8} sm={12}>
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