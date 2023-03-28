import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Container from '@mui/material/Container';
import GeneralButton from "./GeneralButton";
import SubmitButton from "./SubmitButton";
import { API_BASE } from "../config/constants";

function BuyerRetrieveAvailableSeatingsByShowNumber() {

  const [showSeatingsDetail, setShowSeatingsDetail] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showNumber, setShowNumber] = useState('');

  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);

    const URL = API_BASE + "/buyer/api/retrieveAvailableSeatingsByShowNumber?showNumber=";

    axios.get(URL + showNumber).then(res => {
      setShowSeatingsDetail(res.data);
      setLoading(false);
    }).catch(err => {
      setLoading(false);
      setIsError(true);
    });
  }

  return (
    <Container fixed>
      <h1>View Available Seats By Show Number</h1>
      <Grid container spacing={2}>

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

        {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}

        <Grid item xs={8} sm={12}>
          <SubmitButton
            size="small"
            variant="contained"
            title={loading ? 'Loading...' : 'Submit'}
            onClick={handleSubmit} />
        </Grid>

        <Grid item xs={8} sm={12}>
          <p>The available seats are </p>
          {showSeatingsDetail.map(item => {
            return (
              <span>{item}   | </span>
            );
          })}
        </Grid>

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

export default BuyerRetrieveAvailableSeatingsByShowNumber;