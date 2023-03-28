import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from '@mui/material/Container';
import GeneralButton from "./GeneralButton";

function AdminMenu() {
  return (
    <Container fixed>
      <h1>Admin Menu</h1>
      <Grid container spacing={2}>

        <Grid item xs={8} sm={12}>
          <GeneralButton
            title="View Details of All Shows"
            size="large"
            variant="contained"
            url="/adminretrieveShows" />
        </Grid>

        <Grid item xs={8} sm={12}>
          <GeneralButton
            title="View Details of Show By Show Number"
            size="large"
            variant="contained"
            url="/adminviewshowbyshownumber" />
        </Grid>

        <Grid item xs={8} sm={12}>
          <GeneralButton
            title="Retrieve All Shows Seatings"
            size="large"
            variant="contained"
            url="/adminretrieveallshowsseatings" />
        </Grid>

        <Grid item xs={8} sm={12}>
          <GeneralButton
            title="View Show Seatings By Show Number"
            size="large"
            variant="contained"
            url="/adminretrieveshowseatingsbyshownumber" />
        </Grid>

        <Grid item xs={8} sm={12}>
          <GeneralButton
            title="View Show Seatings By Show Number and Status"
            size="large"
            variant="contained"
            url="/adminretrieveshowseatingsbyshownumberandstatus" />
        </Grid>

        <Grid item xs={8} sm={12}>
          <GeneralButton
            title="Setup Show"
            size="large"
            variant="contained"
            url="/adminsetupshow" />
        </Grid>

        <Grid item xs={8} sm={12}>
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

export default AdminMenu;
