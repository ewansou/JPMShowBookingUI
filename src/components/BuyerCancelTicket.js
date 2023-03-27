import React,  { useEffect, useState }  from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import axios from "axios";

function BuyerCancelTicket() {

  const [ticketNumber, setTicketNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const [response, setResponse] = useState();
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

const handleSubmit = () => {
  setLoading(true);
  setIsError(false);
  const data = {
    ticket: ticketNumber,
    mobileNumber: mobileNumber
  }

  const URL = "http://localhost:23008/buyer/api/cancelTicket";

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
      <p>Please enter details below to cancel your ticket</p>

        <div>
        <label htmlFor="ticketNumber" className="">Ticket Number</label>
        <input
          type="text"
          className="form-control"
          id="ticket-number"
          placeholder="Enter Your Ticket Number"
          value={ticketNumber}
          onChange={e => setTicketNumber(e.target.value)} />
        </div>

        <div>
        <label htmlFor="mobileNumber" className="">Mobile Number</label>
        <input
          type="text"
          className="form-control"
          id="mobile-number"
          placeholder="Enter Your Mobile Number"
          value={mobileNumber}
          onChange={e => setMobileNumber(e.target.value)} />
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

export default BuyerCancelTicket;