import React,  { useEffect, useState }  from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import axios from "axios";

function AdminViewShowByShowNumber() {

  const [showDetail, setShowDetail] = useState({});
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showNumber, setShowNumber] = useState('');

const handleSubmit = () => {
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
            <th>numberOfRows</th>
            <th>numberOfSeatsPerRow</th>
            <th>totalNumberOfSeats</th>
            <th>cancellationWindowInMinutes</th>
          </tr>
        </thead>
        <tbody>
          <td>{showDetail.showNumber}</td>
          <td>{showDetail.numberOfRows}</td>
          <td>{showDetail.numberOfSeatsPerRow}</td>
          <td>{showDetail.totalNumberOfSeats}</td>
          <td>{showDetail.cancellationWindowInMinutes}</td>
        </tbody>
      </table>

      <Button variant="contained" color="primary">
        <Link href="/admin">BACK TO ADMIN MENU</Link>
      </Button>
    </div>
  );
}

export default AdminViewShowByShowNumber;