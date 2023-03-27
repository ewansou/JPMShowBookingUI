import React,  { useEffect, useState }  from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import axios from "axios";

function AdminSetupShow() {

  const [showNumber, setShowNumber] = useState('');
  const [numOfRows, setNumOfRows] = useState('');
  const [numOfSeatsPerRow, setNumOfSeatsPerRow] = useState('');
  const [cancelWindow, setCancelWindow] = useState('');

  const [response, setResponse] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

const handleSubmit = () => {
  setLoading(true);
  setIsError(false);
  const data = {
    showNumber: showNumber,
    numberOfRows: numOfRows,
    numberOfSeatsPerRow: numOfSeatsPerRow,
    cancellationWindowInMinutes: cancelWindow
  }

  const URL = "http://localhost:23008/admin/api/setupShow";

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
      <p>Please enter new show details below</p>

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
        <label htmlFor="noOfRows" className="">No. of Rows</label>
        <input
          type="number"
          className="form-control"
          id="no-of-rows"
          placeholder="Enter Number of Rows"
          value={numOfRows}
          onChange={e => setNumOfRows(e.target.value)} />
        </div>

        <div>
        <label htmlFor="noOfSeatsPerRow" className="">No. of Seats Per Row</label>
        <input
          type="number"
          className="form-control"
          id="no-of-seats-per-row"
          placeholder="Enter Number of Seats Per Row"
          value={numOfSeatsPerRow}
          onChange={e => setNumOfSeatsPerRow(e.target.value)} />
        </div>

        <div>
        <label htmlFor="showNumber" className="">Cancellation of Window (in minutes)</label>
        <input
          type="number"
          className="form-control"
          id="cancellation-window"
          placeholder="Enter Cancellation Window (in minutes)"
          value={cancelWindow}
          onChange={e => setCancelWindow(e.target.value)} />
        </div>

        {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}

        <button
          type="submit"
          className=""
          onClick={handleSubmit}
          disabled={loading}
        >{loading ? 'Loading...' : 'Submit'}</button>

      <p>{response}</p>

      <Button variant="contained" color="primary">
        <Link href="/admin">BACK TO ADMIN MENU</Link>
      </Button>
    </div>
  );
}

export default AdminSetupShow;