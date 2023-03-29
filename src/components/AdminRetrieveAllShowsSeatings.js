import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from '@mui/material/Container';
import GeneralButton from "./GeneralButton";
import axios from "axios";
import SixColumnTable from "./SixColumnTable";
import SixColumnDataTable from "./SixColumnDataTable";
import { API_BASE } from "../config/constants";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

function AdminRetrieveAllShowsSeatings() {

  const [allShowsSeatings, updateAllShowsSeatings] = useState([])

  useEffect(() => {
    axios.get(API_BASE + "/admin/api/retrieveAllShowsSeatings")
      .then(({ data }) => {
        updateAllShowsSeatings(data);
      })
  }, []);

  return (
    <Container maxWidth="md">
      <h1>Show Seatings Details</h1>
      <Grid container spacing={2}>

      <SixColumnDataTable rows={allShowsSeatings} />
        
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

export default AdminRetrieveAllShowsSeatings;

