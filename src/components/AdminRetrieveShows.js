import React,  { useEffect, useState }  from "react";
import Grid from "@material-ui/core/Grid";
import Container from '@mui/material/Container';
import GeneralButton from "./GeneralButton";
import axios from "axios";
import FiveColumnTable from "./FiveColumnTable";

function AdminRetrieveShows() {

  const [showsDetails, updateShowsDetails] = useState([])

  useEffect(() => {
    axios.get("http://localhost:23008/admin/api/retrieveShows")
       .then(({ data }) => {
           updateShowsDetails(data);
       })
 }, []);

  return (
    <Container fixed>
      <h1>Below are the list of shows in system</h1>
      <Grid container spacing={2}>

    <FiveColumnTable data={showsDetails}/>

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

export default AdminRetrieveShows;