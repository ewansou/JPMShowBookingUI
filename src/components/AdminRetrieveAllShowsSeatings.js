import React,  { useEffect, useState }  from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import axios from "axios";

function AdminRetrieveAllShowsSeatings() {

  const [allShowsSeatings, updateAllShowsSeatings] = useState([])

  useEffect(() => {
    axios.get("http://localhost:23008/admin/api/retrieveAllShowsSeatings")
       .then(({ data }) => {
        updateAllShowsSeatings(data);
       })
    
 }, []);

  return (
    <div>
      <p>Below are the list of shows and their seatings in system</p>

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
          {allShowsSeatings.map(item => {
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

export default AdminRetrieveAllShowsSeatings;