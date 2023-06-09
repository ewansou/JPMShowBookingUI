import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from '@mui/material/Container';
import GeneralButton from "./GeneralButton";
import axios from "axios";
import FiveColumnTable from "./FiveColumnTable";
import { API_BASE } from "../config/constants";
import { Typography } from "@material-ui/core";

function AdminRetrieveShows() {

  const [showsDetails, updateShowsDetails] = useState([])

  useEffect(() => {
    axios.get(API_BASE + "/admin/api/retrieveShows")
      .then(({ data }) => {
        updateShowsDetails(data);
      })
  }, []);

  return (
    <Container maxWidth="md">
      <h1>List of Shows</h1>
      <Grid container spacing={2}>

        {showsDetails.length > 0 ? <FiveColumnTable data={showsDetails} /> :
          <Grid item xs={12} sm={12}>
          <Typography variant="subtitle1">There is no shows added yet</Typography>
          </Grid>
        }

        <Grid item xs={12} sm={12}>
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

export default AdminRetrieveShows;