import React,  { useEffect, useState }  from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import axios from "axios";

function AdminViewShowSeatingsByShowNumber() {

  const [showSeatingsDetail, setShowSeatingsDetail] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showNumber, setShowNumber] = useState('');

const handleSubmit = () => {
  setLoading(true);
  setIsError(false);

  const URL = "http://localhost:23008/admin/api/retrieveShowSeatingsByShowNumber?showNumber="

  axios.get(URL+showNumber).then(res => {    
    setShowSeatingsDetail(res.data);
    setLoading(false);
  }).catch(err => {
    setLoading(false);
    setIsError(true);
  });
}

  return (
    <div>
      <p>Please enter a show number below</p>
      <div>
          <label htmlFor="job" className="">Show Number</label>
          <input
            type="number"
            className="form-control"
            id="show-number"
            placeholder="Enter Show Number"
            value={showNumber}
            onChange={e => setShowNumber(e.target.value)} />
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

export default AdminViewShowSeatingsByShowNumber;