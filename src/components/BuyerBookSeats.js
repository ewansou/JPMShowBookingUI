import React,  { useEffect, useState }  from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import axios from "axios";

function BuyerBookSeats() {

  const [showNumber, setShowNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [seats, setSeats] = useState('');

  const [response, setResponse] = useState();
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

const handleSubmit = () => {

  const seatArray = Array.from(seats.replaceAll(' ', '').split(','));

  console.log(seatArray)

  setLoading(true);
  setIsError(false);
  const data = {
    showNumber: showNumber,
    mobileNumber: mobileNumber,
    seats: seatArray
  }

  const URL = "http://localhost:23008/buyer/api/bookSeats";

  console.log(data)

  axios.post(URL, data).then(res => {    
    setResponse(res.data);
    setLoading(false);
  }).catch(err => {
    setLoading(false);
    setIsError(true);
  });
}

  return (
    <div>
      <p>Please fill in table below to book seats</p>

        <div>
          <label htmlFor="showNumber" className="">Show Number</label>
          <input
            type="number"
            className="form-control"
            id="show-number"
            placeholder="Enter New Show Number"
            value={showNumber}
            onChange={e => setShowNumber(e.target.value)} />
        </div>

        <div>
        <label htmlFor="mobileNumber" className="">Mobile Number</label>
        <input
          type="text"
          className="form-control"
          id="mobile-number"
          placeholder="Enter Mobile Number"
          value={mobileNumber}
          onChange={e => setMobileNumber(e.target.value)} />
        </div>

        <div>
        <label htmlFor="seats" className="">Please Enter The Seats You want To Book</label>
        <input
          type="text"
          className="form-control"
          id="seats"
          placeholder="Please Enter The Seats You want To Book"
          value={seats}
          onChange={e => setSeats(e.target.value)} />
        </div>

        {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}

        <button
          type="submit"
          className=""
          onClick={handleSubmit}
          disabled={loading}
        >{loading ? 'Loading...' : 'Submit'}</button>

        <pre>{JSON.stringify(response, null, 2)}</pre>

      <Button variant="contained" color="primary">
        <Link href="/buyer">BACK TO BUYER MENU</Link>
      </Button>
    </div>
  );
}

export default BuyerBookSeats;