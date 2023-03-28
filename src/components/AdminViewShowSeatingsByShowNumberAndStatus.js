import React,  { useEffect, useState }  from "react";
import Grid from "@material-ui/core/Grid";
import Container from '@mui/material/Container';
import axios from "axios";
import SubmitButton from "./SubmitButton";
import SixColumnTable from "./SixColumnTable";
import GeneralButton from "./GeneralButton";

const seatStatusOptions = [
  {
    label: "Available",
    value: "AVAILABLE",
  },
  {
    label: "Booked",
    value: "BOOKED",
  }
];

function AdminViewShowSeatingsByShowNumberAndStatus() {

  const [showSeatingsDetail, setShowSeatingsDetail] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showNumber, setShowNumber] = useState('');
  const [seatStatus, setSeatStatus] = useState('');

const handleSubmit = () => {
  setLoading(true);
  setIsError(false);
  const data = {
    showNumber: showNumber,
    seatStatus: seatStatus
  }

  const firstPartURL = "http://localhost:23008/admin/api/retrieveShowSeatingsByShowNumberAndSeatStatus?showNumber=";
  const secondPartURL = "&seatStatus=";
  const finalURL = firstPartURL+data.showNumber+secondPartURL+data.seatStatus;

  console.log(data.showNumber)
  console.log(data.seatStatus)

  axios.get(finalURL).then(res => {    
    console.log (finalURL)
    setShowSeatingsDetail(res.data);
    setLoading(false);
  }).catch(err => {
    setLoading(false);
    setIsError(true);
  });
}

  return (
    <Container fixed>
    <h1>Please enter details below</h1>
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
    <label htmlFor="seatStatus" className="">Seat Status</label>
    <select type="text" onChange={e => setSeatStatus(e.target.value)}>
      <option>Please choose one option</option>
      {seatStatusOptions.map((seatStatus) => (
        <option value={seatStatus.value}>{seatStatus.label}</option>
      ))}
    </select>
    </Grid>

    {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}

    <Grid item xs={8} sm={12}>
    <SubmitButton 
    size="small"
    variant="contained"
    title={loading ? 'Loading...' : 'Submit'}
    onClick={handleSubmit} />
  </Grid>

  <SixColumnTable data={showSeatingsDetail}/>

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

export default AdminViewShowSeatingsByShowNumberAndStatus;