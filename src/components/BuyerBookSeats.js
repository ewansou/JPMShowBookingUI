import React,  { useEffect, useState }  from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import axios from "axios";

function BuyerBookSeats() {

  const [buyShowNumber, setBuyShowNumber] = useState('');
  const [buyIsError, setBuyIsError] = useState(false);
  const [buyLoading, setBuyLoading] = useState(false);
  const [availableShowSeating, setAvailableShowSeating] = useState([]);

  const getAvailableSeats = () => {
    setBuyLoading(true);
    setBuyIsError(false);
  
    const URL = "http://localhost:23008/buyer/api/retrieveAvailableSeatingsByShowNumber?showNumber=";
  
    axios.get(URL+buyShowNumber).then(res => {
      console.log(URL+buyShowNumber);
      setAvailableShowSeating(res.data);
      setBuyLoading(false);
    }).catch(err => {
      setBuyLoading(false);
      setBuyIsError(true);
    });
  }

  const [showNumber, setShowNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [seats, setSeats] = useState('');
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);

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

  const URL2 = "http://localhost:23008/buyer/api/bookSeats";

  console.log(data)

  axios.post(URL2, data).then(res => {    
    setResponse(res.data);
    setLoading(false);
    getAvailableSeats();
  }).catch(err => {
    setLoading(false);
    setIsError(true);
  });
}

  return (
    <div>
      <p>Check Availabiliy. Please enter show number you want to buy tickets for</p>
        <div>
          <label htmlFor="showNumber" className="">Show Number</label>
          <input
            type="number"
            className="form-control"
            id="show-number"
            placeholder="Enter Show Number"
            value={buyShowNumber}
            onChange={e => setBuyShowNumber(e.target.value)} />
        </div>

        {buyIsError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}

        <button
          type="submit"
          className=""
          onClick={getAvailableSeats}
          disabled={loading}
        >{buyLoading ? 'Loading...' : 'Submit'}</button>

        <div>
          <p>The available seats are </p>
          {availableShowSeating.map(item => {
            return (
              <span>| {item} | </span>
            );
          })}
        </div>


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

        <table>
        <thead>
          <tr>
            <th>showNumber</th>
            <th>seatNumber</th>
            <th>ticketNumber</th>
            <th>validTill</th>
          </tr>
        </thead>
        <tbody>
          {response.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.showNumber}</td>
                <td>{item.seatNumber}</td>
                <td>{item.ticketNumber}</td>
                <td>{item.validTill}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Button variant="contained" color="primary">
        <Link href="/buyer">BACK TO BUYER MENU</Link>
      </Button>
    </div>
  );
}

export default BuyerBookSeats;

/*
{
  "B2": "6ee1ed3e-d9ea-426d-b804-64bfd93df482",
  "B1": "aff349cd-600d-425f-929d-893c2728d3e8"
}
*/