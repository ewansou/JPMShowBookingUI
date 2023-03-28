import React,  { useEffect, useState }  from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Container from '@mui/material/Container';
import GeneralButton from "./GeneralButton";
import SingleRowFiveColumnTable from "./SingleRowFiveColumnTable";
import SubmitButton from "./SubmitButton";

function AdminViewShowByShowNumber() {

  const [showDetail, setShowDetail] = useState({});
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showNumber, setShowNumber] = useState('');

const handleSubmit = () => {
  console.log("Hit handleSubmit");
  setLoading(true);
  setIsError(false);

  const URL = "http://localhost:23008/admin/api/viewShow?showNumber="

  axios.get(URL+showNumber).then(res => {    
    setShowDetail(res.data);
    setLoading(false);
  }).catch(err => {
    setLoading(false);
    setIsError(true);
  });
}

  return (
    <Container fixed>
    <h1>View Show By Show Number</h1>
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

    <Grid item xs={8} sm={12}>
      <SubmitButton 
      size="small"
      variant="contained"
      title={loading ? 'Loading...' : 'Submit'}
      onClick={handleSubmit} />
    </Grid>

    {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
    
    <SingleRowFiveColumnTable data={showDetail}/>

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

export default AdminViewShowByShowNumber;