import React,  { useEffect, useState }  from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import axios from "axios";

function AdminRetrieveShows() {

  const [showsDetails, updateShowsDetails] = useState([])

  useEffect(() => {
    axios.get("http://localhost:23008/admin/api/retrieveShows")
       .then(({ data }) => {
           updateShowsDetails(data);
       })
    
 }, []);

  return (
    <div>
      <p>Below are the list of shows in system</p>

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
          {showsDetails.map(item => {
            return (
              <tr key={item.id}>
                <td>{ item.showNumber }</td>
                <td>{ item.numberOfRows }</td>
                <td>{ item.numberOfSeatsPerRow }</td>
                <td>{ item.totalNumberOfSeats }</td>
                <td>{ item.cancellationWindowInMinutes }</td>
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

export default AdminRetrieveShows;