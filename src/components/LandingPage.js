import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from '@mui/material/Container';
import GeneralButton from "./GeneralButton";

function LandingPage() {
  return (
    <Container fixed>
      <h1>Welcome</h1>
      <Grid container spacing={2}>
        <Grid item xs={8} sm={12}>
            <GeneralButton 
            title="Admin" 
            size="large"
            variant="contained"
            url="/admin" />
        </Grid>
        <Grid item xs={12} sm={12}>
            <GeneralButton 
            title="Buyer" 
            size="large"
            variant="contained"
            url="/buyer" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default LandingPage;
