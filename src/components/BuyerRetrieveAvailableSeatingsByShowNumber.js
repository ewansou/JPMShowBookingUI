import React,  { useEffect, useState }  from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import axios from "axios";

function BuyerRetrieveAvailableSeatingsByShowNumber() {

  const [showSeatingsDetail, setShowSeatingsDetail] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showNumber, setShowNumber] = useState('');

const handleSubmit = () => {
  setLoading(true);
  setIsError(false);

  const URL = "http://localhost:23008/buyer/api/retrieveAvailableSeatingsByShowNumber?showNumber=";

  axios.get(URL+showNumber).then(res => {
    console.log(URL+showNumber);
    setShowSeatingsDetail(res.data);
    setLoading(false);
  }).catch(err => {
    setLoading(false);
    setIsError(true);
  });
}

  return (
    <div>
      <p>Please enter show number below</p>
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

        {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}

        <button
          type="submit"
          className=""
          onClick={handleSubmit}
          disabled={loading}
        >{loading ? 'Loading...' : 'Submit'}</button>

        <div>
          <p>The available seats are </p>
          {showSeatingsDetail.map(item => {
            return (
              <span>| {item} | </span>
            );
          })}
        </div>

      <Button variant="contained" color="primary">
        <Link href="/buyer">BACK TO BUYER MENU</Link>
      </Button>
    </div>
  );
}

export default BuyerRetrieveAvailableSeatingsByShowNumber;