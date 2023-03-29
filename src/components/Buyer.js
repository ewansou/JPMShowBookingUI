import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from '@mui/material/Container';
import GeneralButton from "./GeneralButton";

function BuyerMenu() {
  return (
    <Container maxWidth="md">
      <h1>Buyer Menu</h1>
      <Grid container spacing={2}>

      <Grid item xs={12} sm={12}>
          <GeneralButton
            title="Retrieve Available Seats By Show Number"
            size="large"
            variant="contained"
            url="/buyerretrieveavailableseatingsbyshownumber" />
        </Grid>

        <Grid item xs={12} sm={12}>
          <GeneralButton
            title="Book Seats"
            size="large"
            variant="contained"
            url="/buyerbookseats" />
        </Grid>

        <Grid item xs={12} sm={12}>
          <GeneralButton
            title="Cancel Ticket"
            size="large"
            variant="contained"
            url="/buyercancelticket" />
        </Grid>

        <Grid item xs={12} sm={12}>
          <GeneralButton
            title="BACK TO HOME"
            size="large"
            variant="contained"
            url="/" />
        </Grid>

      </Grid>
    </Container>
  );
}

export default BuyerMenu;
