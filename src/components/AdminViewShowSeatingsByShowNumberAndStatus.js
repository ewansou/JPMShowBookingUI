import React,  { useEffect, useState }  from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import axios from "axios";

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
    <div>
      <p>Please enter details below</p>
        <div>
          <label htmlFor="showNumber" className="">Show Number</label>
          <input
            type="number"
            className="form-control"
            id="show-number"
            placeholder="Enter Show Number"
            value={showNumber}
            onChange={e => setShowNumber(e.target.value)} />
        </div>
        <div>
          <label htmlFor="seatStatus" className="">Seat Status</label>
          <select type="text" onChange={e => setSeatStatus(e.target.value)}>
            <option>Please choose one option</option>
            {seatStatusOptions.map((seatStatus) => (
              <option value={seatStatus.value}>{seatStatus.label}</option>
            ))}
          </select>
        </div>

        {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}

        <button
          type="submit"
          className=""
          onClick={handleSubmit}
          disabled={loading}
        >{loading ? 'Loading...' : 'Submit'}</button>

      <table>
        <thead>
          <tr>
            <th>showNumber</th>
            <th>seatNumber</th>
            <th>seatStatus</th>
            <th>buyerMobile</th>
            <th>ticketNumber</th>
            <th>validTill</th>
          </tr>
        </thead>
        <tbody>
          {showSeatingsDetail.map(item => {
            return (
              <tr key={item.id}>
                <td>{ item.showNumber }</td>
                <td>{ item.seatNumber }</td>
                <td>{ item.seatStatus }</td>
                <td>{ item.buyerMobile }</td>
                <td>{ item.ticketNumber }</td>
                <td>{ item.validTill }</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Button variant="contained" color="primary">
        <Link href="/admin">BACK TO ADMIN MENU</Link>
      </Button>
    </div>
  );
}

export default AdminViewShowSeatingsByShowNumberAndStatus;